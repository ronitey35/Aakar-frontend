### Math Methods

#### Math.random()
Returns a random number between 0 and 1.

**Example 1:**
```javascript
const random = Math.random();
console.log(random); // Output: 0.123456789 (random number)
```

**Example 2:**
```javascript
// Random number between 1 and 10
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // Output: Random number 1-10
```

#### Math.floor() and Math.ceil()
Round numbers down or up.

**Example 1:**
```javascript
console.log(Math.floor(5.7)); // Output: 5
console.log(Math.ceil(5.7));  // Output: 6
```

**Example 2:**
```javascript
const price = 99.99;
const roundedDown = Math.floor(price); // 99
const roundedUp = Math.ceil(price);    // 100
```

### Date Methods

#### Date manipulation
Methods for working with dates.

**Example 1:**
```javascript
const now = new Date();
console.log(now.toLocaleDateString()); // Output: Current date
console.log(now.toLocaleTimeString()); // Output: Current time
```

**Example 2:**
```javascript
const date = new Date();
console.log(date.getFullYear());  // Current year
console.log(date.getMonth() + 1); // Current month (0-11, so add 1)
console.log(date.getDate());      // Current day
```

### JSON Methods

#### JSON.stringify() and JSON.parse()
Convert between JavaScript objects and JSON strings.

**Example 1:**
```javascript
const user = { name: 'John', age: 30 };
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: '{"name":"John","age":30}'
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser); // Output: { name: 'John', age: 30 }
```

**Example 2:**
```javascript
const settings = {
    theme: 'dark',
    notifications: true,
    lastLogin: new Date()
};
// Store in localStorage
localStorage.setItem('settings', JSON.stringify(settings));
// Retrieve from localStorage
const stored = JSON.parse(localStorage.getItem('settings'));
```

### Promise Methods

#### Promise handling
Methods for handling asynchronous operations.

**Example 1:**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!'), 1000);
});

promise.then(result => console.log(result));
```

**Example 2:**
```javascript
Promise.all([
    fetch('/api/users'),
    fetch('/api/posts')
])
.then(([users, posts]) => {
    console.log('Both requests completed');
})
.catch(error => console.error('An error occurred'));
```

### LocalStorage Methods

#### localStorage.setItem() and localStorage.getItem()
Store and retrieve data in browser storage.

**Example 1:**
```javascript
localStorage.setItem('username', 'john_doe');
const username = localStorage.getItem('username');
console.log(username); // Output: 'john_doe'
```

**Example 2:**
```javascript
const preferences = {
    theme: 'dark',
    fontSize: '16px'
};
localStorage.setItem('preferences', JSON.stringify(preferences));
const stored = JSON.parse(localStorage.getItem('preferences'));
```