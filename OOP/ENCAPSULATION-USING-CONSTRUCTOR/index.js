//Encapsulation using constructor

function createCounter() {
  let count = 0;
  this.increment = () => {
    count++;
  };
  this.decrement = () => {
    count--;
  };
  this.getCount = () => {
    return count;
  };
}

const counter = new createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
