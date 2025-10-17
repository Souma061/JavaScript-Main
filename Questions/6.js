// Problem 1: Calculate Shopping Cart Total

// const shoppingCart = [
//   { name: 'Laptop', price: 1200, quantity: 1 },
//   { name: 'Mouse', price: 25, quantity: 2 },
//   { name: 'Keyboard', price: 75, quantity: 1 },
//   { name: 'Monitor', price: 300, quantity: 1 }
// ];


// const calculatetotal = (shoppingCart) => {
//   let total = 0;
//   for (const element of shoppingCart) {
//     total += element.price * element.quantity

//   }
//   return total;
// }
// console.log(calculatetotal(shoppingCart)); // Output: 1625


// const calculateTotalwithreduce = (shoppingCart) => {
//   return shoppingCart.reduce((total,item) => total + item.price * item.quantity,0)
// }
// console.log(calculateTotalwithreduce(shoppingCart)); // Output: 1625



//  Problem 2: Create a List of Active Premium Users
const users = [
  { firstName: 'Alice', lastName: 'Johnson', status: 'active', subscription: 'premium' },
  { firstName: 'Bob', lastName: 'Smith', status: 'inactive', subscription: 'free' },
  { firstName: 'Charlie', lastName: 'Brown', status: 'active', subscription: 'free' },
  { firstName: 'Diana', lastName: 'Prince', status: 'active', subscription: 'premium' }
];

// Your Task: Write a function getActivePremiumUsers that takes the users array and returns a new array containing only the full names (e.g., "Alice Johnson") of the users who meet the criteria.


// const getActivePremiumUsers = (users) => {
//   return users.filter(user => user.status === 'active' && user.subscription === 'premium').map(user => `${user.firstName} ${user.lastName}`);
// }
// console.log(getActivePremiumUsers(users)); // Output: ['Alice Johnson', 'Diana Prince']


// Problem 3: Update User Profile
const currentUser = {
  id: 101,
  name: 'John Doe',
  email: 'john.doe@example.com',
  isAdmin: false
};

const updates = {
  email: 'john.d@new-example.com',
  isAdmin: true
};
// Your Task: Write a function updateProfile that takes the currentUser object and the updates object. It should return a new user object that contains all the properties of the original user but with the updated values from the updates object. The original currentUser object should not be changed.


// const updateProfile = (currentUser,updates) => {
//   return {...currentUser,...updates}
// }
// console.log(updateProfile(currentUser, updates));

// Problem 4: Find the First Failing Test

const testResults = [
  { testName: 'Login Page Renders', status: 'pass' },
  { testName: 'User Authentication', status: 'pass' },
  { testName: 'Add to Cart Button', status: 'fail' },
  { testName: 'Checkout Process', status: 'pass' },

];

// Your Task: Write a function findFailedTest that takes the testResults array and returns the full object for the first test where the status is 'fail'. If all tests passed, it should return undefined.
// const findFailedTest = (testResults) => {
//   return testResults.find(test => test.status === 'fail')

// }
// console.log(findFailedTest(testResults)); // Output: { testName: 'Add to Cart Button', status: 'fail' }


// Create an array and get it's original properties through loop

Array.prototype.extraProperty = "Souma"

const arr = [1, 2, 3, 4, 5];

for(let v in arr) {
  if(arr.hasOwnProperty(v)) {
    console.log(v);
  }

}



