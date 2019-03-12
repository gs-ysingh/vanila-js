var promise1 = new Promise((resolve, reject) => {
  return setTimeout(() => {
    return resolve(100);
  }, 1000);
})

var promise2 = new Promise((resolve, reject) => {
  return fetch('abs.json').then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('errr');
    }
  })
    .catch((err) => {
      console.log('error in fetch');
      return reject(100)
    });
})

var promise3 = new Promise((resolve, reject) => {
  return promise2.then(res => res)
    .catch(err => {
      console.log('inner catch');
      return err;
    });
})

Promise.all([promise3])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })