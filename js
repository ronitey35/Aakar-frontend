// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   console.log(users);
// }

// fetchUsers();

// tryCatch
// async function fetchData() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );
//       const data = await response.json();
//       console.log("Data:", data);
//     } catch (error) {
//       console.error("Fetch error:", error.message);
//     }
//   }

//   fetchData();
// // custom error

//   function checkAge(age) {
//     if (age < 18) {
//       throw new Error("Age must be 18 or above.");
//     }
//     console.log("Access granted.");
//   }

//   try {
//     checkAge(16);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
