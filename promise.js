class MyPromise {
  constructor(fn) {
    this.state = 'pending';
    this.value = undefined;
    this.error = undefined;
    this.promiseChain = [];
    this.catchChain = [];

    const resolve = (value) => {
      this.value = value;
      if(this.state === 'fullfilled') {
        return;
      }
      this.state = 'fullfilled';
      if(Array.isArray(this.promiseChain)) {
        this.promiseChain.forEach((fun) => {
          this.value = fun(this.value);
        }); 
      }
    }

    const reject = (err) => {
      this.error = err;
      if(this.state === 'rejected') {
        return;
      }
      this.state = 'rejected';
      if(Array.isArray(this.catchChain)) {
        this.catchChain(err); 
      }
    }

    if(typeof fn !== 'function') {
      throw new Error('Promise expects a function argument');
    }

    try {
      fn(resolve, reject);
    }
    catch(e) {
      reject(e);
    }
  }

  then(fn) {
      if(this.state === 'fullfilled') {
        this.value = fn(this.value);
      }
      this.promiseChain.push(fn);
      return this;
  }

  catch(fn) {
      if(this.state === 'rejected') {
        fn(this.error);
      }
      this.catchChain.push(fn);
      return this;
  }
}


new MyPromise((resolve, reject) => {
  setTimeout(() => {
      resolve(100);
    }, 1000)
}).then((value) => {
  return value * 2;
}).then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(JSON.stringify(err))
})



new Promise((resolve, reject) => {
  setTimeout(() => {
		resolve(20);
	}, 1000);
})
.then((value) => {
	return value * 2;
})
.then((value) => {
	console.log(value);
})
.catch(() => {
	console.log('Some error occured');
})


class MyPromise {
	constructor(fn) {
		this.state = 'pending';
		this.value = undefined;
		this.promiseChain = [];
		this.errorChain = [];

		if(typeof fn !== 'function') {
			throw new Error('Promise expects function as argument');
		}

		const resolve = (value) => {
			this.state = 'resolved';
			this.value = value;
			this.promiseChain.forEach((fn) => {
				this.value = fn(this.value);
			})
		}

		const reject = (err) => {
			this.state = 'rejected';
			this.onRejected(err);
		}

		try {
			fn(resolve, reject);
		}
		catch(e) {
			reject(e);
		}
	}

	then = (onFullFilled, onRejected) => {
		if(this.state === 'resolved') {
			this.value = onFullFilled(this.value);
		}
		if(this.state === 'rejected') {
			this.error = onRejected(this.error);
		}
		this.promiseChain.push(onFullFilled);
		this.errorChain.push(onRejected);
		return this;
	}

	catch = (fn) => {
		this.onRejected = fn;
		return this;
	}
}
