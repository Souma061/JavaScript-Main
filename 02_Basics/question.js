// function makeCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = makeCounter();
// counter();
// const result = counter();
// console.log(result);

(function() {
  var a = 1;
  let b = 2;

  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  console.log(b);
})();
