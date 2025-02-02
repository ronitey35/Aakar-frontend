const num = [1, 2, 3, 4, 5];

// console.log(num[3]);

// const [hel, second, pel, forth, fifth] = num;

// console.log(pel);

// const [pahilo, dosro, ...helo] = num;
// console.log(pahilo);

// console.log(helo);
// const [pahi, , , , antim] = num;
// console.log(pahi, antim);
// const obj = {
//   name: "Ronit",
//   age: 23,
// };

// console.log(obj.name);

// const { name, age } = obj;
// console.log(name);
// console.log(age);
// const { name: Fullname, age: katibarsa } = obj;

// console.log(Fullname);
// console.log(katibarsa);

//nested destructuring

// const obj = {
//   name: "Ronit",
//   age: 23,
//   city: {
//     Tol: "Milan",
//     Area: "Buspark",
//   },
// };

// // console.log(obj.city.Tol);
// // console.log(obj.city.Area);

// const {
//   name: naam,
//   age,
//   city: { Tol: tolly, Area },
// } = obj;
// console.log(naam);
// console.log(Area);
// console.log(tolly);

// advanced js starting Now

// setTimeout
// console.log("start");

// setTimeout(() => {
//   console.log("This is after some time");
// }, 3000);

// console.log("end");

// let value = 0;

// setInterval  ,ClearInterval
// const intervalValue = setInterval(() => {
//   value++;
//   console.log(`Value ${value}`);

//   if (value === 5) {
//     clearInterval(intervalValue);
//     console.log("interal stopped");
//   }
// }, 1000);

// clearTimeout
// const timeOut = setTimeout(() => {
//   console.log("THis is clear ");
// }, 1000);
// clearTimeout(timeOut);

// callbacks
// function FetchingData(helo) {
//   setTimeout(() => {
//     const data = "THis is the data , you need";
//     helo(data);
//   }, 5000);
// }

// FetchingData((data) => {
//   console.log(data);
// });

// promises
// function FetchingData() {
//   return new Promise((resolve, reject) => {
//     const data = "Data is here";
//     // resolve(data);
//     reject("You promise has been rejected");
//   });
// }

// async await
// FetchingData()
//   .then((data) => console.log(data))
//   .catch((erro) => console.error("This  is the rejected" + erro));

// function FetchingData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "fetched data";
//       resolve(data);
//       reject("Error");
//     }, 3000);
//   });
// }

// async function GettingData() {
//   const data = await FetchingData();
//   console.log("Waiting");
//   console.log(data);
// }
// GettingData();

// let promiseHohai = new Promise((resolve, reject) => {
//   let a = 1 + 4;

//   if (a == 5) {
//     resolve("Success");
//   } else {
//     reject("Rejected");
//   }
// });

// promiseHohai
//   .then((helo) => console.log(helo))
//   .catch((err) => console.error(err));

// function Person(Fname, Lname) {
//   this.firstName = Fname;
//   this.LastName = Lname;
// }

// Person.prototype.gender = "Male";

// const Per = new Person("helo", "helo");
// const Per1 = new Person("he", "she");

// console.log(Per);
// console.log(Per1);

// console.log("start");
// setTimeout(() => {
//   console.log("Api call");
// }, 6000);
// console.log("end");

// function Outerfunction() {
//   const outerVariable = "I am outside variable";

//   function innerfunction() {
//     console.log(outerVariable);
//   }
//   return innerfunction;
// }

// const hello = Outerfunction();
// hello();

// higherOrderFunction

// function higherOrderFunction(hello) {
//   console.log("THis is hi");
//   hello();
//   console.log("Hi");

//   return function chitwan() {
//     console.log("chitwan");
//   };
// }

// const abc = higherOrderFunction(() => {
//   console.log("hello from outer scope");
// });

// abc();

// const object = {
//   name: "Ronit",
// };
// console.log(object);

// function Person(Fname, Lname, age) {
//   this.firstName = Fname;
//   this.LastName = Lname;
//   this.age = age;
// }

// console.log(Person);

// Person.prototype.gender = "Male";

// const Person1 = new Person("Ronit", "Adhikari", 23);
// const Person2 = new Person("Sandip", "Hello", 26);
// console.log(Person2);
// console.log(Person1);

// const helo = (a, b) => {
//   console.log(4 + 6);
//   console.log(a + b);
// };

// helo(10, 12);

// template lteral
// const name = "Aakar";

// console.log("This is from " + name);
// console.log(`THis is from ${name}`);

// const obj = {
//   name: "Ronit",
//   age: 23,
//   gender: "male",
//   district: {
//     Tol: "milan",
//     Area: "hi",
//   },
// };
// console.log(obj.name);

// const { name: Fullname, age: katibarsa, gender } = obj;
// console.log(Fullname);
// console.log(katibarsa);
// const {
//   name: Fullname,
//   age: katibarsa,
//   gender,
//   district: { Tol, Area: basniThau },
// } = obj;

// console.log(obj.district.Area);
// console.log(basniThau);

// async function fetchPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();
//   console.log(posts);
// }
// fetchPost();

// async function fetchPost() {
//   try {
//     const response = await fetch("https://jsonplaceholde.typicode.com/posts");
//     const posts = await response.json();
//   } catch (error) {
//     console.log("Error Occured" + error.message);
//   }
// }
// fetchPost();
