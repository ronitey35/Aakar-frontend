"use strict";
// function hello() {
//   console.log("hello");
// }

// (function () {
//   console.log("THis is IIFE");
// })();

// (() => {
//   console.log("THis is arroe IIFE");
// })();

// (function (a, b) {
//   console.log(a + b);
// })(10, 20);

// function hello(a, b) {
//   console.log(a + b);
// }

// hello(4, 5);

function totalAmountInCart(...items) {
  return items.reduce(function (acc, item) {
    return acc + item;
  }, 0);
}

let totalAmount = totalAmountInCart(2, 4, 5, 4, 5, 10, 20, 50, 2, 1);

console.log(totalAmount);

// let totalAmount1 = totalAmountInCart(2, 4, 5, 4, 5, 10, 20, 50, 2, 1);

// console.log(totalAmount1);

// function hello(...inputs) {
//   console.log(inputs);
// }

// hello(1, 2, 3, 4, 5, 6, 7, 5, 6);

// const arr = [1, 2, 3, 4];
// console.log(...arr);
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

// const obj1 = {
//   name: "ROnit",
//   age: 23,
// };
// const obj2 = {
//     ...obj1,
//   location: "chitwam",
//   faculty: "BIT"
// };

// // const combinedObject = {...obj1, ...obj2}
// console.log(obj2)

// function numbers(a, b, ...num) {
//   console.log(a + b);
//   console.log(num);
// }

// numbers(1, 8, 4, 5, 5, 5, 5);
// console.log(this);

// a = 10;
// console.log(a);

// function hello(a, b) {
//   console.log(a + a);
// }
// hello(4, 5);

// const obj = Object.freeze({ name: "Ronit" });
// obj.name = "saraswoti";

// function hello() {
//   console.log(this);
// }
// hello();

// const helo = () => {
//   console.log(this);
// };
// helo();

// const obj1 = {
//   name: "ROnit",
//   age: 23,
//   hi: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };
// const obj2 = {
//   name: "Saraswoti",
//   age: 24,
//   hi: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };
// const obj3 = {
//   name: "mandip",
//   age: 24,
//   hi: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// obj1.hi();
// obj2.hi();
// obj3.hi();

// const obj = {
//   name: "mandip",
//   age: 24,
//   hi: function () {
//     console.log(this);
//   },
// };
// obj.hi()

// let string = " hello";
// let age = 23;
// if (!true) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(!true);
// strictly
// if (5  === "5") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (5 !== "5") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (5 != "5") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (false || true) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (false && true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// true && console.log("This is trrue");

// console.log(!false);

// let a = 10;
// let ab = a + 5;
// console.log(ab);

// let a = 10;
// a += 5;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 2;
// console.log(a);
// a %= 2;
// console.log(a);
