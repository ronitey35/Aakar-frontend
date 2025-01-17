// //  Example with var (Function-scoped and hoisting)
// function varExample() {
//     console.log(msg); // undefined (hoisted but not initialized)
//     var msg = "Hello with var!";
//     console.log(msg); // Outputs "Hello with var!"
//   }
//   varExample();
  
//   // Example with let (Block-scoped, no hoisting)
//   function letExample() {
//     if (true) {
//       let msg = "Hello with let!";
//       console.log(msg); // Outputs "Hello with let!"
//     }
//     // console.log(msg); // ReferenceError: msg is not defined
//   }
//   letExample();

//   // Example with const (Block-scoped, immutable binding)
//   const constValue = 100;
//   console.log(constValue); // Outputs 100
//   // constValue = 200; // Error: Assignment to constant variable
  
//   // Modifying the contents of an object declared with const
//   const user = { name: "Bob", age: 25 };
//   user.age = 26; // Allowed: modifying properties of the object
//   console.log(user); // Outputs { name: "Bob", age: 26 }
  
  
  // ## Primitive Data Types

// // 1. String
// let name = "John";
// console.log(typeof name); // string

// // 2. Number
// let age = 25;
// let price = 99.99;
// console.log(typeof age); // number
// console.log(typeof price); // number

// // 3. Boolean
// let isLoggedIn = true;
// console.log(typeof isLoggedIn); // boolean

// // 4. Undefined
// let undefinedVar;
// console.log(typeof undefinedVar); // undefined

// // 5. Null
// let nullVar = null;
// console.log(typeof nullVar); // object (a known JavaScript quirk)

// // 6. BigInt
// let bigNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof bigNumber); // bigint

// // 7. Symbol
// let sym = Symbol("unique");
// console.log(typeof sym); // symbol
