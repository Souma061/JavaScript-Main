/* 
The most important rule in JavaScript is: JavaScript is single-threaded. This means it can only do one thing at a single moment in time.

Imagine a chef who can only chop one vegetable at a time. They can't chop carrots and onions simultaneously. This is JavaScript. Because of this, a long-running task (like a complex calculation or a network request) would "block" everything else, freezing the webpage.

The Event Loop is the clever solution that lets JavaScript handle these long-running tasks without blocking. It's made of three main parts.


*/

// function first() {
//     console.log('first');
//     second();
// }

// function second() {
//     console.log('second');
    
// }
// first();

// console.log('A');

// setTimeout(()=>{
//     console.log('b');
    
// },0)

// console.log('c');
// What Happens:

// console.log("A") runs. Output: A

// setTimeout is given to the Browser. The timer starts.

// console.log("C") runs. Output: C

// The Call Stack is now empty.

// The timer finishes, and its callback () => console.log("B") is placed in the Callback Queue.

// The Event Loop sees the Stack is empty and moves the callback to the Stack.

// The callback runs. Output: B

// Final Output: A, C, B


// console.log("1: Start");

// // This is a Macrotask
// setTimeout(() => {
//   console.log("2: Timeout (Macrotask)");
// }, 0);

// // This is a Microtask
// Promise.resolve().then(() => {
//   console.log("3: Promise (Microtask)");
// });

// console.log("4: End");

// console.log('A');

// setTimeout(() => console.log('B'), 0);

// Promise.resolve().then(() => {
//   console.log('C');
// }).then(() => {
//   console.log('D');
// });

// console.log('E');

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('3');
//   setTimeout(() => {
//     console.log('4');
//   }, 0);
// });

// console.log('5');

// console.log('A: Script Start');

// new Promise((resolve) => {
//   console.log('B: Promise Constructor');
//   resolve();
// }).then(() => {
//   console.log('C: Promise .then()');
// });

// setTimeout(() => {
//   console.log('D: setTimeout');
// }, 0);

// console.log('E: Script End');

// The correct output is:
// A, B, E, C, D


// ## Explanation
// Let's trace the execution:

// console.log('A: Script Start');

// This is synchronous and runs immediately.

// Output: A: Script Start

// new Promise(...)

// The code inside the Promise constructor (the part with (resolve) => { ... }) runs synchronously as soon as the promise is created. It does not wait.

// console.log('B: Promise Constructor') runs immediately.

// Output: B: Promise Constructor

// resolve() is called. This puts the .then() callback () => console.log('C') into the Microtask Queue to run later.

// setTimeout(...)

// The browser gets the setTimeout instruction. Its callback () => console.log('D') is placed in the Macrotask Queue.

// console.log('E: Script End');

// This is the final synchronous line of the script. It runs immediately.

// Output: E: Script End


const users = [
    { id: 1, name: 'Alice', isActive: true, subscription: 'premium' },
    { id: 2, name: 'Bob', isActive: false, subscription: 'free' },
    { id: 3, name: 'Charlie', isActive: true, subscription: 'free' }
  ];

//   Your Task: Write a pure function called createDiscountList that takes an array of users. The function should return a new array containing only the users who are isActive. For these active users, a new property hasDiscount should be added and set to true.


// function createDiscountList(users) {
//     return users.filter(user => user.isActive).map(user => ({
//         ...user,
//         hasDiscount: true
//     }))
// }

// console.log(createDiscountList(users));



//OOP
//Clss

class car {
    constructor(brand,model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} is accelerating at ${this.speed} km/h`);
        
    }
    brake() {
        this.speed = 0;
        console.log(`${this.brand} ${this.model} is braking`);
    }
}

const myCar = new car('Toyota','Corolla');
const anotherCar = new car('Ford','Mustang');

myCar.accelerate(30);
anotherCar.accelerate(50);
myCar.brake();
anotherCar.brake();

// ## Inheritance: Building on a Blueprint
// Inheritance lets one class (a "child") inherit the properties and methods of another class (a "parent"). The child class can then add its own unique properties and methods. We use the extends keyword to do this.

class newcar {
    
    constructor(brand,model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} is accelerating at ${this.speed} km/h`);
        
    }
     
}

class raceCar extends newcar {
    useTurbo() {
        this.speed += 50;
        console.log(`${this.brand} ${this.model} is using turbo`);
    }
}

const myRaceCar = new raceCar('Ferrari','488');
myRaceCar.accelerate(100);
myRaceCar.useTurbo();
// myRaceCar.brake();

class Car {
    constructor(brand) {
      this.brand = brand;
      this.speed = 0;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.brand} is going ${this.speed} km/h.`);
    }
  }
  
  class RaceCar extends Car {
    // 1. RaceCar gets its own constructor.
    constructor(brand, turboType) {
      // 2. We MUST call super() first to run the Car's constructor.
      //    This sets up this.brand.
      super(brand);
  
      // 3. Now we can set up RaceCar's own properties.
      this.turboType = turboType;
    }
  
    useTurbo() {
      this.speed += 50;
      console.log(`The ${this.turboType} turbo engaged! ${this.brand} is now going ${this.speed} km/h.`);
    }
  }
  
  const mySuperCar = new RaceCar('Lamborghini', 'V8 Twin-Turbo');
  mySuperCar.accelerate();   // -> Lamborghini is going 10 km/h.
  mySuperCar.useTurbo();     // -> The V8 Twin-Turbo turbo engaged! Lamborghini is now going 60 km/h.