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

//nested

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
// console.log("start");

// setTimeout(() => {
//   console.log("This is after some time");
// }, 3000);

// console.log("end");

// let value = 0;

// const intervalValue = setInterval(() => {
//   value++;
//   console.log(`Value ${value}`);

//   if (value === 5) {
//     clearInterval(intervalValue);
//     console.log("interal stopped");
//   }
// }, 1000);

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

// function FetchingData() {
//   return new Promise((resolve, reject) => {
//     const data = "Data is here";
//     // resolve(data);
//     reject("You promise has been rejected");
//   });
// }

// FetchingData()
//   .then((data) => console.log(data))
//   .catch((erro) => console.error("This  is the rejected" + erro));

function FetchingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "fetched data";
      resolve(data);
      reject("Error");
    }, 3000);
  });
}

async function GettingData() {
  const data = await FetchingData();
  console.log("Waiting");
  console.log(data);
}
GettingData();
