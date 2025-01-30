# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on objects that contain data and behavior. JavaScript supports OOP using prototypes and ES6 classes. This document presents OOP concepts in a structured learning order to help understand them effectively.

## 1. Objects and Classes

### What are Objects?
Objects are collections of properties and methods that represent real-world entities.

### What are Classes?
Classes serve as blueprints for creating objects. They define properties and methods that objects instantiated from them will have.

#### Example:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice.
```

---

## 2. Access Modifiers (Public, Private, Protected)

### Public Members
- By default, properties and methods in JavaScript classes are public.
- They can be accessed and modified from outside the class.

#### Example:
```js
class Car {
  constructor(brand) {
    this.brand = brand; // Public property
  }

  showBrand() {
    console.log(`Car brand: ${this.brand}`); // Public method
  }
}

const myCar = new Car("Toyota");
myCar.showBrand(); // Output: Car brand: Toyota
```

### Private Members
- Private properties and methods are prefixed with `#`.
- They can only be accessed within the class.

#### Example:
```js
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
// console.log(account.#balance); // Error: Private field
```

### Protected Members (Not Natively Supported)
- JavaScript does not have built-in support for protected properties.
- A common convention is to use an underscore `_` to indicate a protected member.

#### Example:
```js
class Parent {
  constructor() {
    this._protectedData = "Protected Info"; // Convention
  }
}

class Child extends Parent {
  showData() {
    console.log(this._protectedData);
  }
}

const obj = new Child();
obj.showData(); // Output: Protected Info
```

---

## 3. Encapsulation

### What is Encapsulation?
Encapsulation is the practice of restricting direct access to object data and only exposing necessary parts through methods.

#### Example:
```js
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("JohnDoe", "secret123");
console.log(user.checkPassword("secret123")); // Output: true
// console.log(user.#password); // Error: Private field
```

---

## 4. Inheritance

### What is Inheritance?
Inheritance allows one class (child) to acquire the properties and methods of another class (parent). This helps in code reuse.

#### Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Bark!
```

---

## 5. Polymorphism

### What is Polymorphism?
Polymorphism allows methods in child classes to override parent methods with specific implementations.

#### Example:
```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.54
```

---

## 6. Abstraction

### What is Abstraction?
Abstraction is the concept of hiding implementation details and only exposing necessary functionality.

#### Example:
```js
class Car {
  constructor(model) {
    this.model = model;
  }

  startEngine() {
    console.log("Engine started");
  }
}

const myCar = new Car("Toyota");
myCar.startEngine(); // Output: Engine started
```

---

## 7. Constructor Functions

### What are Constructor Functions?
Before ES6 classes, JavaScript used functions to create objects. These are called constructor functions.

#### Example:
```js
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

const student1 = new Student("John", 20);
student1.introduce(); // Output: Hi, I'm John and I'm 20 years old.
```

---

## 8. Static Methods

### What are Static Methods?
Static methods belong to a class rather than an instance and can be called directly on the class.

#### Example:
```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // Output: 8
```

