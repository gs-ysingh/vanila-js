let generate = (length) => {
  let str = '';
  let arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for(let i = 0; i < length; i++) {
    str += arr[Math.floor(Math.random() * arr.length)];
  }
  return str;
}

generate(6);

let timer = (obj) => {
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let total = minutes * 60 + seconds;

  let count = 0;
  let timeInterval = setInterval(() => {
    let rem = total - count;
    let remMin = Math.floor(rem / 60);
    let remSec = rem % 60;
    document.getElementsByClassName('container')[0].innerHTML = `${remMin} minutes : ${remSec} seconds`;
    if(count === total) {
      clearInterval(timeInterval);
      alert('time up');
    } else if(total - count < 60) {
      document.getElementsByClassName('container')[0].classList.add('red');
    }
    count++;
  }, 1000);
}

timer({
  minutes: 2,
  seconds: 0
})



class PriorityQueue {
  constructor() {
    this.list = [];
  }

  enqueue(item, priority) {
    let obj = {
      priority: priority,
      item: item
    }

    let index = -1;
    for(let i = this.list.length - 1; i >= 0; i --) {
      if(this.list[i].priority === priority) {
        index = i;
        break;
      }
    }

    if(index === -1) {
      index = 0;
      for(let i = 0; i < this.list.length; i++) {
        if(this.list[i].priority > priority) {
          index = i;
          break;
        }
      }
      this.list = this.list.slice(0, index).concat(obj).concat(this.list.slice(index));
    } else {
      this.list = this.list.slice(0, index + 1).concat(obj).concat(this.list.slice(index + 1));
    }
  }

  dequeue() {
    if(this.list.length > 0) {
      return this.list[this.length - 1];
    }
    return 'list is empty';
  }

  front() {
    if(this.list.length > 0) {
      return this.list[0];
    }
    return 'list is empty';
  }

  printPQueue() {
    return this.list;
  }
}

let queue = new PriorityQueue();
queue.enqueue(1, 'abc')

queue.enqueue(2, 'pqr')

queue.enqueue(3, 'xyz')