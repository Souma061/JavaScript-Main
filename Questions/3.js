//  🎯 Unique Sort
// Goal: Write a function that removes duplicates from an array and sorts it numerically.

// The Task:
// Create a function called uniqueSort that takes an array of numbers. It should return a new array containing only the unique numbers from the original array, sorted in ascending order.


// function uniqueSort(arr) {
//   return [...new Set(arr)].sort((a,b) => a - b);
// }

// console.log(uniqueSort([4, 2, 5, 1, 2, 3, 4]));


/*
Dry run:
function uniqueSort(arr) {
  return [...new Set(arr)].sort((a,b) => a - b);
}

console.log(uniqueSort([4, 2, 5, 1, 2, 3, 4]));
// Step 1: Create a Set from the array to remove duplicates
// new Set([4, 2, 5, 1, 2, 3, 4]) => Set {4, 2, 5, 1, 3}

// Step 2: Convert the Set back to an array using the spread operator
// [...Set {4, 2, 5, 1, 3}] => [4, 2, 5, 1, 3]

// Step 3: Sort the array in ascending order using the sort method with a compare function
// [4, 2, 5, 1, 3].sort((a,b) => a - b) => [1,    2, 3, 4, 5]

// Final Output: [1, 2, 3, 4, 5]
*/


// function uniqueSort(arr) {
//   const  array = []
//   const uniqueArr = []
//   for(let i = 0; i < arr.length; i++) {
//     if(!array[arr[i]]) {
//       uniqueArr.push(arr[i])
//       array[arr[i]] = true;
//     }
//   }
//   return uniqueArr.sort((a,b) => {
//     return a - b;
//   })
// }

// console.log(uniqueSort([4, 2, 5, 1, 2, 3, 4]));

function fuck() {
  console.log(fuck);
  fuck()

}
fuck()


