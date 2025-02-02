# 🕒 JavaScript Date & Math Methods

# 📆 JavaScript Date Methods

## 📅 Getting the Current Date

```js
const now = new Date();
console.log(now); // Outputs current date and time
```

---

## ⏳ Formatting Dates

```js
const date = new Date();
console.log(date.toDateString()); // e.g., "Sun Feb 04 2025"
console.log(date.toISOString()); // "2025-02-04T12:34:56.789Z"
console.log(date.toLocaleDateString()); // "2/4/2025"
console.log(date.toLocaleTimeString()); // "10:30:45 AM"
```

---

## 📆 Date Manipulation

### 🔹 Adding or Subtracting Days

```js
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Adds 7 days
console.log(futureDate);
```

### 🔹 Setting a Specific Date

```js
const specificDate = new Date(2025, 11, 25, 10, 30, 0); // Dec 25, 2025, 10:30 AM
console.log(specificDate);
```

---

## 🔄 Comparing Dates

```js
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-02-01");

console.log(date1 > date2); // false
console.log(date1 < date2); // true
```

---

# 🎯 JavaScript Math Methods

## 🔄 Rounding Methods

### `Math.round()`

```js
Math.round(4.7); // 5
Math.round(4.4); // 4
```

---

## 🎲 Random Numbers

### `Math.random()`

```js
Math.random(); // 0.123456789 (Random decimal between 0 and 1)
```

### 🔹 Random Integer in a Range

```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); // Random number between 1 and 100
```

---

## ⚖️ Min and Max Values

```js
console.log(Math.min(5, 10, 3)); // 3
console.log(Math.max(5, 10, 3)); // 10
```

---

## 💡 Tips and Best Practices

✔️ **Correct way to round decimals:**

```js
Math.round(price * 100) / 100; // Returns number 10.57
```

✔️ **Generate a random number correctly:**

```js
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

# 🗄️ Web Storage (LocalStorage, SessionStorage, Cookies)

## 📌 Introduction

Web storage allows storing data in the browser to improve performance and user experience.  
There are three main ways to store data in the browser:

- **LocalStorage**
- **SessionStorage**
- **Cookies**

---

## 📌 1. LocalStorage

**LocalStorage** allows storing key-value pairs **persistently**, even after the browser is closed.

### ✅ Features:

✔️ Stores data with **no expiration**  
✔️ Data is available **across sessions** (browser restarts, tabs)  
✔️ Stores up to **5MB** of data

### 🔹 Example Usage:

```js
// Save data
localStorage.setItem("username", "JohnDoe");

// Retrieve data
const user = localStorage.getItem("username");
console.log(user); // JohnDoe

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

---

## 📌 2. SessionStorage

**SessionStorage** stores key-value pairs **only for a session** (until the browser tab is closed).

### ✅ Features:

✔️ Stores data **per session (tab-specific)**  
✔️ Data is **cleared** when the tab/browser is closed  
✔️ Stores up to **5MB** of data

### 🔹 Example Usage:

```js
// Save data
sessionStorage.setItem("sessionUser", "JaneDoe");

// Retrieve data
const sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser); // JaneDoe

// Remove data
sessionStorage.removeItem("sessionUser");

// Clear all data
sessionStorage.clear();
```

---

## 📌 3. Cookies

**Cookies** store small amounts of data that can be sent between the **client and server**.

### ✅ Features:

✔️ Can have an **expiration time**  
✔️ Sent with **every HTTP request**  
✔️ Stores up to **4KB** of data  
✔️ Useful for **authentication & tracking**

### 🔹 Example Usage:

```js
// Set a cookie (expires in 7 days)
document.cookie =
  "user=JohnDoe; expires=" + new Date(2025, 0, 1).toUTCString() + "; path=/home";

// Retrieve all cookies
console.log(document.cookie);

// Delete a cookie
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

---

### 🍪 Setting Cookies using JavaScript Function

```js
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

setCookie("user", "JaneDoe", 7); // Cookie expires in 7 days
```
