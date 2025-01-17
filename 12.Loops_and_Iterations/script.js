// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= array.length; i++) {
//   console.log(array[i]);
// }

// for (let i = 0; i < 100; i++) {
//   console.log(" Hello from index" + i);
// }

// while
// let array = [1, 2, 3, 4, 5, 6, 7];
// let i = 0;
// while (i <= 4) {
//   console.log(array[i]); // Outputs: 1, 2, 3
//   i++;
// }
// let array1 = [1, 2, 3];
// let i = 0;
// while (i < array.length) {
//   console.log(array[i]); // Outputs: 1, 2, 3
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// array iterartion

// forEach
// let array1 = [1, 2, 3, 4, 5];
// array1.forEach(function (value) {
//   console.log(value / 2);
// });

// let array = ["mango", "orange", "pineapple"];
// array.forEach(function (value) {
//   console.log(`The name of the fruit is ${value}`);
// });

// let array = [2, 4, 6, 8, 10, 12];

// let mappedArray = array.map(function (subash) {
//   return subash * 100;
// });
// console.log(mappedArray);
// let array1 = ["subash", "sandip", "roshan"];

// let mappedArray1 = array1.map(function (value) {
//   return value + "is an student";
// });
// console.log(mappedArray1);

//filter
// let array = [1, 2, 3, 4, 5, 6];

// let filterArray = array.filter(function (value) {
//   return value % 3 === 0;
// });

// console.log(filterArray);

// let array1 = ["Mango", 1, "Orange", true, "Carrot", false];

// let filterArray1 = array1.filter(function (value) {
//   return typeof value == "boolean";
// });

// console.log(filterArray1);

// reduce

// let numbers = [2, 3, 5, 7, 11, 17, 27, 33, 37, 40, 2000];

// let sum = numbers.reduce(function (accumulator, value) {
//   return accumulator + value;
// }, 0);

// console.log(sum);

// Break example
// for (let i = 0; i < 10; i++) {
//   if (i === 7) break; // Stops when i equals 5.
//   console.log(i); // Outputs numbers from 0 to 4.
// }

// Continue example
// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue;
//   // Skips when i equals 5.
//   console.log(i); // Outputs numbers from 0 to 9 except for 5.
// }
