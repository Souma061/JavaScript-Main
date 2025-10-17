// The Falsy Bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.


// function bouncer(arr) {
//   return arr.filter(Boolean);
// }


// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer(["a", "b", "c"]));



function BouncerAgain(arr) {
  const newaRR = [];
  for(const element of arr) {
    if(element) {
      newaRR.push(element);
    }
  }
  return newaRR;
}

console.log(BouncerAgain([7, "ate", "", false, 9]));
console.log(BouncerAgain(["a", "b", "c"]));

/*
Dry Run:
function BouncerAgain(arr) {
  const newaRR = [];
  for(const element of arr) {
    if(element) {
      newaRR.push(element);
    }
  }
  return newaRR;
}
  console.log(BouncerAgain([7, "ate", "", false, 9]));
  step1: initialize newArr as an empty array
  step2: iterate over each element in the input array
  element = 7 (truthy) -> push to newArr -> newArr = [7]
  element = "ate" (truthy) -> push to newArr -> newArr = [7, "ate"]
  element = "" (falsy) -> do not push to newArr -> newArr = [7, "ate"]
  element = false (falsy) -> do not push to newArr -> newArr = [7, "ate"]
  element = 9 (truthy) -> push to newArr -> newArr = [7, "ate", 9]
  step3: return newArr
Final Output: [7, "ate", 9]



*/
