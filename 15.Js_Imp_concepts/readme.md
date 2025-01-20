# JavaScript: IIFE, Rest and Spread Operators, `this` Keyword, and Operators

## **1. Immediately Invoked Function Expressions (IIFE)**

### **What is IIFE?**
IIFE stands for Immediately Invoked Function Expression. It is a function that gets executed immediately after its definition.

### **Syntax**
```javascript
()();
```
Or with an arrow function:
```javascript
(() => {
  // Code to execute
})();
```


### **Example 1**: Basic IIFE
```javascript
(function () {
  console.log('This is an IIFE!');
})();
```
**Output:**
```
This is an IIFE!
```

### **Example 2**: IIFE with Parameters
```javascript
(function (name) {
  console.log(`Hello, ${name}!`);
})('Alice');
```
**Output:**
```
Hello, Alice!
```

---

## **2. Rest and Spread Operators**

### **Rest Operator**
The Rest operator (`...`) collects arguments into an array. It is typically used in function parameters to handle variable numbers of arguments.

### **Syntax**
```javascript
function myFunction(...args) {
  // args is an array
}
```

### **Example 1**: Using Rest in Functions
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));
```
**Output:**
```
10
```

### **Example 2**: Combining Rest with Other Parameters
```javascript
function introduce(greeting, ...names) {
  console.log(`${greeting}, ${names.join(' and ')}!`);
}
introduce('Hello', 'Alice', 'Bob');
```
**Output:**
```
Hello, Alice and Bob!
```

---

### **Spread Operator**
The Spread operator (`...`) expands an array or object into individual elements.

### **Syntax**
```javascript
const arr = [1, 2, 3];
console.log(...arr);
```

### **Example 1**: Using Spread with Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
```
**Output:**
```
[1, 2, 3, 4, 5, 6]
```

### **Example 2**: Cloning Objects with Spread
```javascript
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1, city: 'New York' };
console.log(obj2);
```
**Output:**
```
{ name: 'Alice', age: 25, city: 'New York' }
```

---

## **3. `this` Keyword**

### **What is `this`?**
- In JavaScript, `this` refers to the object that is executing the current function.
- Its value depends on how the function is invoked.

### **Rules for `this`:**
1. **Global Scope**: Refers to the global object (`window` in browsers).
2. **Object Method**: Refers to the object that owns the method.
3. **Arrow Functions**: `this` is lexically scoped and inherits from the surrounding context.

### **Syntax**
```javascript
console.log(this);
```

### **Example 1**: `this` in Global Scope
```javascript
console.log(this); // In browsers, this will be the `window` object.
```

### **Example 2**: `this` in Object Methods
```javascript
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};
person.greet();
```
**Output:**
```
Hi, my name is Alice
```

### **Example 3**: `this` in Arrow Functions
```javascript
const person = {
  name: 'Alice',
  greet: () => {
    console.log(`Hi, my name is ${this.name}`);
  },
};
person.greet();
```
**Output:**
```
Hi, my name is undefined
```
(Note: Arrow functions don't bind their own `this`; it depends on the surrounding context.)

---

Got it! Here's the markdown with detailed explanations for each topic under the **Operators in JavaScript** section:

```markdown
## **4. Operators in JavaScript**

### **1. Arithmetic Operators**
Arithmetic operators are used to perform basic mathematical operations. These include addition, subtraction, multiplication, division, modulus (remainder), and exponentiation (power).

| Operator | Description         | Example        | Result     |
|----------|---------------------|----------------|------------|
| `+`      | Addition            | `5 + 3`        | `8`        |
| `-`      | Subtraction         | `5 - 3`        | `2`        |
| `*`      | Multiplication      | `5 * 3`        | `15`       |
| `/`      | Division            | `6 / 3`        | `2`        |
| `%`      | Modulus (Remainder) | `5 % 2`        | `1`        |
| `**`     | Exponentiation      | `2 ** 3`       | `8`        |

- **Addition (`+`)**: Adds two operands.
- **Subtraction (`-`)**: Subtracts the second operand from the first.
- **Multiplication (`*`)**: Multiplies two operands.
- **Division (`/`)**: Divides the first operand by the second.
- **Modulus (`%`)**: Returns the remainder of a division operation.
- **Exponentiation (`**`)**: Raises the first operand to the power of the second.

#### **Example 1**: Basic Arithmetic Operations
```javascript
const a = 10;
const b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

#### **Example 2**: Exponentiation
```javascript
console.log(2 ** 4); // 16
```

---

### **2. Comparison Operators**
Comparison operators are used to compare two values and return a boolean value (`true` or `false`) based on the comparison.

| Operator | Description              | Example        | Result     |
|----------|--------------------------|----------------|------------|
| `==`     | Equal to                | `5 == '5'`     | `true`     |
| `===`    | Strictly equal to       | `5 === '5'`    | `false`    |
| `!=`     | Not equal to            | `5 != '5'`     | `false`    |
| `!==`    | Strictly not equal to   | `5 !== '5'`    | `true`     |
| `>`      | Greater than            | `5 > 3`        | `true`     |
| `<`      | Less than               | `3 < 5`        | `true`     |
| `>=`     | Greater than or equal to| `5 >= 5`       | `true`     |
| `<=`     | Less than or equal to   | `3 <= 5`       | `true`     |

- **Equal to (`==`)**: Compares two values for equality, performing type coercion if needed.
- **Strictly equal to (`===`)**: Compares both value and type for equality (no type coercion).
- **Not equal to (`!=`)**: Compares two values for inequality, allowing type coercion.
- **Strictly not equal to (`!==`)**: Compares both value and type for inequality (no type coercion).
- **Greater than (`>`)**: Returns `true` if the left operand is greater than the right.
- **Less than (`<`)**: Returns `true` if the left operand is less than the right.
- **Greater than or equal to (`>=`)**: Returns `true` if the left operand is greater than or equal to the right.
- **Less than or equal to (`<=`)**: Returns `true` if the left operand is less than or equal to the right.

#### **Example 1**: Strict Equality
```javascript
console.log(5 === '5'); // false
```

#### **Example 2**: Greater than Comparison
```javascript
console.log(7 > 3); // true
```

---

### **3. Logical Operators**
Logical operators are used to combine multiple conditions or to negate a condition. They are essential for decision-making and control flow.

| Operator | Description      | Example           | Result     |
|----------|------------------|-------------------|------------|
| `&&`     | Logical AND      | `true && false`   | `false`    |
| `||`     | Logical OR       | `true || false`   | `true`     |
| `!`      | Logical NOT      | `!true`           | `false`    |

- **Logical AND (`&&`)**: Returns `true` if both operands are `true`.
- **Logical OR (`||`)**: Returns `true` if at least one of the operands is `true`.
- **Logical NOT (`!`)**: Negates the boolean value of the operand (returns `false` if `true`, and vice versa).

#### **Example 1**: Logical AND
```javascript
console.log(true && false); // false
```

#### **Example 2**: Logical OR
```javascript
console.log(true || false); // true
```

---

### **4. Assignment Operators**
Assignment operators are used to assign values to variables. These operators often combine an operation with the assignment to modify a variable.

| Operator | Description          | Example     |
|----------|----------------------|-------------|
| `=`      | Assign               | `x = 10`    |
| `+=`     | Add and assign       | `x += 5`    |
| `-=`     | Subtract and assign  | `x -= 3`    |
| `*=`     | Multiply and assign  | `x *= 2`    |
| `/=`     | Divide and assign    | `x /= 4`    |
| `%=`     | Modulus and assign   | `x %= 2`    |

- **Assign (`=`)**: Assigns the value of the right operand to the left operand.
- **Add and assign (`+=`)**: Adds the right operand to the left operand and assigns the result to the left.
- **Subtract and assign (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left.
- **Multiply and assign (`*=`)**: Multiplies the left operand by the right and assigns the result to the left.
- **Divide and assign (`/=`)**: Divides the left operand by the right and assigns the result to the left.
- **Modulus and assign (`%=`)**: Assigns the remainder of dividing the left operand by the right to the left operand.

#### **Example 1**: Add and Assign
```javascript
let x = 10;
x += 5;
console.log(x); // 15
```

#### **Example 2**: Multiply and Assign
```javascript
let y = 4;
y *= 3;
console.log(y); // 12
```
