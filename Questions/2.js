// 🏭 The Counter Factory
// Goal: Write a function that creates and returns a configurable counter function.

// The Task:
// Create a function called createCounter that accepts one optional argument, startValue (which defaults to 0). This function should return another function. The returned function, when called, should increment a private internal counter and return the new value.


function createCounter(startValue = 0) {
  let counter = startValue;
  return function() {
    counter += 1;
    return counter;
  }

}


const counterFrom5 = createCounter(5);
console.log(counterFrom5());
