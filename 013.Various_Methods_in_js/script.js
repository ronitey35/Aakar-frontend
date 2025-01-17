// const laptop = {
//   brand: "dell",
//   model: "Macbook air",
//   year: 2023,
//   isNew: true,
// };

// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));
// console.log(Object.entries(laptop));

// const laptop1 = {
//   brand: "Dell",
//   year: 2023,
// };

// Object.assign({}, laptop, laptop1);
// laptop doesnt get overwritten
// const laptop = {
//   brand: "dell",
//   model: "Macbook air",
//   year: 2023,
//   isNew: true,
// };

// Object.assign(laptop, laptop1);
// laptop gets overwritten

// laptop.brand = "Asus";
// console.log(laptop);

// Object.freeze(laptop);

// laptop.isNew = false;
// console.log(laptop);

// methods in array

// const laptop = ["Dell", "Asus", "Acer", "Rog"];

// laptop.push("Technos");
// console.log(laptop);

// laptop.pop();
// console.log(laptop);

// const queue = ["first", "second", "third"];

// const next = queue.shift();
// console.log(next); // Output: "first"
// console.log(queue); // Output: ["second", "third"]

// queue.unshift("Car");
// console.log(queue);

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumber = numbers.map(function (value) {
//   return value * 2;
// });

// console.log(doubledNumber);

// const scores = [75, 82, 95, 65, 89];

// // const highScore = scores.filter(function (value) {
// //   return value >= 50;
// // });
// // console.log(highScore);

// const totalAmount = scores.reduce(function (total, value) {
//   return total + value;
// }, 0);

// console.log(totalAmount);

// const numer = [1, 2, 3, 4, 5];
// numer.forEach(function (value) {
//   console.log(value + 100);
//   console.log(value);
// });

// const student = [
//   {
//     id: 1,
//     name: "subash",
//     age: 20,
//   },

//   {
//     id: 2,
//     name: "saraswoti",
//     age: 23,
//   },

//   {
//     id: 3,
//     name: "Ronit",
//     age: 24,
//   },
// ];

// const lessThan23 = student.find(function (item) {
//   return item.age == 24;
// });

// console.log(lessThan23);

// const fruits = ["apple", "mango", "pinapple"];

// console.log(fruits.includes("mango"));

// string methods

// let string = "Hello World";

// console.log(string.charAt(1));
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// let hello = "Hello this is flashey ";

// const word = hello.split(" ");
// console.log(word);

// let string = "hello ,world";

// const newText = string.replace("world", "Ronit");
// console.log(newText);

// const string1 = " hello World";

// console.log(string1.trim());

let string = "javascript";
console.log(string.substring(0, 6));
