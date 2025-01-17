## JavaScript Objects

### What are Objects?

Objects are collections of **key-value pairs** that help organize and manipulate data in a structured way. Keys are strings (or Symbols), and values can be of any data type.

### Basic Syntax

```javascript
const objectName = {
  key1: value1,
  key2: value2,
  methodName() {
    // method logic
  },
};


const student = {
  name:"ronit" ,
  age: 23,
  isStudent: true
}


console.log(student.isStudent)
```

### Object Methods

#### 1. Object.keys()

Returns an array of object's enumerable property names.

**Example 1:**

```javascript
const laptop = { 
  brand: "Apple",
   model: "MacBook",
    year: 2024 };

console.log(Object.keys(laptop));
// Output: ["brand", "model", "year"]
```

**Example 2:**

```javascript
const recipe = { title: "Cake", servings: 8, difficulty: "medium" };
Object.keys(recipe).forEach((key) => console.log(`${key}: ${recipe[key]}`));
// Output:
// title: Cake
// servings: 8
// difficulty: medium
```

#### 2. Object.values()

Returns an array of object's enumerable values.

**Example 1:**

```javascript
const scores = { math: 95, science: 88, history: 92 };
console.log(Object.values(scores));
// Output: [95, 88, 92]
```

**Example 2:**

```javascript
const inventory = { apples: 5, oranges: 0, bananas: 12 };
const inStock = Object.values(inventory).filter((quantity) => quantity > 0);
console.log(inStock);
// Output: [5, 12]
```

#### 3. Object.entries()

Returns an array of key-value pair arrays.

**Example 1:**

```javascript
const person = { name: "John", age: 30, city: "New York" };
console.log(Object.entries(person));
// Output: [["name", "John"], ["age", 30], ["city", "New York"]]
```

**Example 2:**

```javascript
const prices = { shirt: 25, pants: 50, shoes: 80 };
Object.entries(prices).forEach(([item, price]) => {
  console.log(`${item} costs $${price}`);
});
```

#### 4. Object.assign()

Copies properties from source objects to a target object.

**Example 1:**

```javascript
const defaultSettings = { theme: "light", fontSize: 12 };
const userSettings = { theme: "dark" };
const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings);
// Output: { theme: "dark", fontSize: 12 }
```

**Example 2:**

```javascript
const baseProduct = { id: 1, category: "electronics" };
const productDetails = { name: "Phone", price: 599 };
Object.assign(baseProduct, productDetails);
// Output: { id: 1, category: "electronics", name: "Phone", price: 599 }
```

#### 5. Object.freeze()

Makes an object immutable.

**Example 1:**

```javascript
const config = { api: "https://api.example.com", timeout: 5000 };
Object.freeze(config);
config.timeout = 6000; // No effect
console.log(config.timeout); // Output: 5000
```

**Example 2:**

```javascript
const user = { id: 123, name: "Alice" };
Object.freeze(user);
user.email = "alice@example.com"; // No effect
console.log(user); // Output: { id: 123, name: "Alice" }
```

## JavaScript Arrays

### What are Arrays?

Arrays are **ordered collections of elements** that can store multiple values in a single variable.

### Basic Syntax

```javascript
const arrayName = [item1, item2, item3];
```

### Array Methods

#### 1. push()

Adds elements to the end of an array.

**Example 1:**

```javascript
const colors = ["red", "blue"];

colors.push("green");
console.log(colors); // Output: ["red", "blue", "green"]
```

**Example 2:**

```javascript
const numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

#### 2. pop()

Removes the last element from an array.

**Example 1:**

```javascript
const stack = ["first", "second", "third"];
const removed = stack.pop();
console.log(removed); // Output: "third"
console.log(stack); // Output: ["first", "second"]
```

**Example 2:**

```javascript
const cards = ["ace", "king", "queen", "jack"];
while (cards.length > 0) {
  console.log(`Removed: ${cards.pop()}`);
}
```

#### 3. shift()

Removes the first element from an array.

**Example 1:**

```javascript
const queue = ["first", "second", "third"];
const next = queue.shift();
console.log(next); // Output: "first"
console.log(queue); // Output: ["second", "third"]
```

**Example 2:**

```javascript
const tasks = ["urgent", "important", "routine"];
const nextTask = tasks.shift();
console.log(`Processing: ${nextTask}`); // Output: "Processing: urgent"
```

#### 4. unshift()

Adds elements to the beginning of an array.

**Example 1:**

```javascript
const numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

**Example 2:**

```javascript
const messages = ["old message"];
messages.unshift("new message", "very new message");
console.log(messages); // Output: ["very new message", "new message", "old message"]
```

#### 5. map()

Creates a new array by transforming each element.

**Example 1:**

```javascript
const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.2);
console.log(withTax); // Output: [12, 24, 36]
```

**Example 2:**

```javascript
const users = [{ name: "John" }, { name: "Jane" }];
const names = users.map((user) => user.name.toUpperCase());
console.log(names); // Output: ["JOHN", "JANE"]
```

#### 6. filter()

Creates a new array with elements that pass a test.

**Example 1:**

```javascript
const scores = [75, 82, 95, 65, 89];
const highScores = scores.filter((score) => score >= 80);
console.log(highScores); // Output: [82, 95, 89]
```

**Example 2:**

```javascript
const products = [
  { name: "Phone", inStock: true },
  { name: "Laptop", inStock: false },
  { name: "Tablet", inStock: true },
];
const available = products.filter((product) => product.inStock);
```

#### 7. reduce()

Reduces an array to a single value.

**Example 1:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15
```

**Example 2:**

```javascript
const cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 2 },
  { item: "Notebook", price: 5 },
];
const total = cart.reduce((sum, item) => sum + item.price, 0);


#### 8. forEach()
Executes a function for each array element.

**Example 1:**
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output:
// 2
// 4
// 6
```

**Example 2:**
```javascript
const items = ['apple', 'banana', 'orange'];
items.forEach((item, index) => {
    console.log(`${index + 1}: ${item}`);
});
// Output:
// 1: apple
// 2: banana
// 3: orange
```

#### 9. find()
Returns the first element that passes a test.

**Example 1:**
```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
const user = users.find(u => u.id === 2);
console.log(user); // Output: { id: 2, name: 'Jane' }
```

**Example 2:**
```javascript
const numbers = [1, 3, 5, 7, 9];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: undefined (no even numbers)
```

#### 10. includes()
Checks if an array includes a certain element.

**Example 1:**
```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // Output: true
```

**Example 2:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const hasNegative = numbers.includes(-1);
console.log(hasNegative); // Output: false
```

## JavaScript Strings

### What are Strings?

Strings are sequences of characters used to represent and manipulate text data.

### Basic Syntax

```javascript
const stringName = "Hello, World!";
```

### String Methods

#### 1. charAt()

Returns the character at a specified index.

**Example 1:**

```javascript
const text = "JavaScript";
console.log(text.charAt(0)); // Output: "J"
```

**Example 2:**

```javascript
const sentence = "Hello World";
for (let i = 0; i < sentence.length; i++) {
  console.log(sentence.charAt(i));
}
```

#### 2. toUpperCase()

Converts a string to uppercase.

**Example 1:**

```javascript
const name = "john doe";
console.log(name.toUpperCase()); // Output: "JOHN DOE"
```

**Example 2:**

```javascript
const code = "abc123";
const upperCode = code.toUpperCase();
console.log(upperCode); // Output: "ABC123"
```

#### 3. toLowerCase()

Converts a string to lowercase.

**Example 1:**

```javascript
const text = "HELLO WORLD";
console.log(text.toLowerCase()); // Output: "hello world"
```

**Example 2:**

```javascript
const email = "User@Example.com";
const normalizedEmail = email.toLowerCase();
console.log(normalizedEmail); // Output: "user@example.com"
```

#### 4. split()

Splits a string into an array of substrings.

**Example 1:**

```javascript
const sentence = "Hello world from JavaScript";
const words = sentence.split(" ");
console.log(words); // Output: ["Hello", "world", "from", "JavaScript"]
```

**Example 2:**

```javascript
const date = "2024-01-16";
const [year, month, day] = date.split("-");
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
```

#### 5. replace()

Replaces specified content with new content.

**Example 1:**

```javascript
const text = "Hello, world!";
const newText = text.replace("world", "JavaScript");
console.log(newText); // Output: "Hello, JavaScript!"
```

**Example 2:**

```javascript
const code = "var x = 10;";
const modernCode = code.replace("var", "const");
console.log(modernCode); // Output: "const x = 10;"
```
#### 6. trim()
Removes whitespace from both ends of a string.

**Example 1:**
```javascript
const text = "   Hello World!   ";
console.log(text.trim()); // Output: "Hello World!"
```

**Example 2:**
```javascript
const userInput = "\n\t  user@email.com  \n";
const cleanEmail = userInput.trim();
console.log(cleanEmail); // Output: "user@email.com"
```

#### 7. substring()
Extracts characters between two indices from a string.

**Example 1:**
```javascript
const text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"
```

**Example 2:**
```javascript
const email = "user@example.com";
const domain = email.substring(email.indexOf('@') + 1);
console.log(domain); // Output: "example.com"
```

## Time Management Methods

### setTimeout()

Executes a function after a specified delay.

#### Basic Syntax

```javascript
setTimeout(callback, delayInMilliseconds);
```

**Example 1:**

```javascript
setTimeout(() => {
  console.log("Delayed message");
}, 2000); // Runs after 2 seconds
```

<!-- Working with dom -->
<!-- **Example 2:**
```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, 3000); // Re-enables after 3 seconds
}); -->

````

### setInterval()
Repeatedly executes a function at specified intervals.

#### Basic Syntax
```javascript
setInterval(callback, intervalInMilliseconds);
````

**Example 1:**

```javascript
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) clearInterval(interval);
}, 1000); // Counts every second
```

<!-- working with dom -->
<!-- **Example 2:**
```javascript
const clock = document.querySelector(".clock");
setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000); // Updates every second
``` -->
