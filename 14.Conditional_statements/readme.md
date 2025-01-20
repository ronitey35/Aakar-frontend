# JavaScript Conditional Statements

Conditional statements in JavaScript are used to make decisions based on specific conditions. They allow your program to execute certain pieces of code only if a particular condition evaluates to `true`. This is essential for creating dynamic and interactive web applications.

---

## Types of Conditional Statements

### 1. **if Statement**

Executes a block of code if a specified condition is true.

**Syntax:**

```js
if (condition) {
  // Code to execute if condition is true
}
```

**Example:**

```js
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

### 2. **if...else Statement**

Executes one block of code if the condition is true, and another block if it is false.

**Syntax:**

```js
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

**Example:**

```js
let age = 16;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

---

### 3. **if...else if...else Statement**

Tests multiple conditions.

**Syntax:**

```js
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition2 is true
} else {
  // Code to execute if none of the conditions are true
}
```

**Example:**

```js
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  
}
```

---

### 4. **switch Statement**

Evaluates an expression and executes code based on matching case clauses. The `break` statement is used to terminate a case and prevent fall-through to subsequent cases. If no `break` is provided, execution will continue to the next case.

**Syntax:**

```js
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
  // Code to execute if no case matches
}
```

**Example:**

```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

**Explanation:**

- Each `case` represents a possible value of the `expression`.
- The `break` statement ensures that once a matching case is found and executed, the program exits the `switch` block.
- Without `break`, the program will continue executing the next case, even if it doesn't match the `expression`. This is called **fall-through**.
- The `default` case is optional and executes if no matching case is found.

**Example without break (fall-through):**

```js
let color = "red";
switch (color) {
  case "red":
    console.log("Color is red");
  case "blue":
    console.log("Color is blue");
  default:
    console.log("Unknown color");
}
// Output:
// Color is red
// Color is blue
// Unknown color
```

---

## Special Cases for Conditional Statements

### 1. **Ternary Operator**

A shorthand way of writing an `if...else` statement.

**Syntax:**

```js
condition ? expressionIfTrue : expressionIfFalse;
```

**Example:**

```js
let age = 20;
let eligibility = age >= 18 ? "Eligible" : "Not eligible";
console.log(eligibility); // Output: Eligible
```

### 2. **Short-Circuit Evaluation**

Logical operators can be used for conditional execution.

**Example:**

```js
let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!"); // Output: Welcome back!

let user = null;
let username = user || "Guest";
console.log(username); // Output: Guest
```

### 3. **Nullish Coalescing Operator (`??`)**

Returns the right-hand operand if the left-hand operand is `null` or `undefined`.

**Example:**

```js
let user;
let username = user ?? "Guest";
console.log(username); // Output: Default User
```

---

## Common Use Cases for Conditional Statements

1. **Form Validation**

   ```js
   let username = "";
   if (username === "") {
     console.log("Username is required");
   }
   ```

2. **Role-Based Access Control**

   ```js
   let role = "admin";
   if (role === "admin") {
     console.log("You have full access.");
   } else if (role === "editor") {
     console.log("You can edit content.");
   } else {
     console.log("You have read-only access.");
   }
   ```

3. **API Response Handling**
   ```js
   let responseStatus = 404;
   if (responseStatus === 200) {
     console.log("Request successful");
   } else if (responseStatus === 404) {
     console.log("Resource not found");
   } else {
     console.log("An error occurred");
   }
   ```
