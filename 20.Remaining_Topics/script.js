// const currentDate = new Date();
// console.log(currentDate);

// console.log(currentDate.toDateString());
// console.log(currentDate.toISOString());

// console.log(currentDate.toLocaleTimeString());

// currentDate.setDate(currentDate.getDate() + 7);
// console.log(currentDate);

// const myDate = new Date(2026, 11, 9, 3, 17, 0);
// console.log(myDate);

// const lowDate = new Date("2025-08-10");
// const hiGHDate = new Date("2025-08-10");

// console.log(lowDate >= hiGHDate);

// console.log(Math.round(4.2));
// console.log(Math.round(4.7));

// console.log(Math.min(3, 6, 50));
// console.log(Math.max(3, 6, 50));

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNumber(100, 400));

// sessionStorage.setItem("name", "Ronit");
// sessionStorage.setItem("Age", "23");
// sessionStorage.setItem("Gender", "Male");
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("Age"));

// sessionStorage.removeItem("Age");

// sessionStorage.clear();

// console.log(sessionStorage.getItem("Age"));

// localStorage.setItem("username", "john");
// console.log(localStorage.getItem("username"));

document.cookie =
  " name =Ronit; expires:" + new Date(2025, 1, 5).toUTCString() + "; path = /";
console.log(document.cookie);


