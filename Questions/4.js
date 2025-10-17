// normalizing user data
// Goal: Write a function that takes an array of "user" objects and returns a new array where each object has a fullName and isActive property.

// The Task:
// Create a function called normalizeUsers. You'll be given an array of objects, where each object has a firstName, lastName, and status. Your function should use the .map() method to transform this array into a new one. Each object in the new array should have two properties: fullName (a combination of first and last name) and isActive (a boolean that is true if the status is "active" and false otherwise).



function normalizeUsers(users) {
  Name = users.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    isActive: user.status.toLowerCase() === 'active'
  }))
  return Name;
}

const users = [
  { firstName: "John", lastName: "Doe", status: "active" },
  { firstName: "Jane", lastName: "Smith", status: "inactive" },
  { firstName: "Emily", lastName: "Jones", status: "active" }
];

console.log(normalizeUsers(users));

