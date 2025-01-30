// class MainClass {
//   greet() {
//     console.log("hello");
//   }
// }

// const object1 = new MainClass();
// const object2 = new MainClass();
// const object3 = new MainClass();
// const object4 = new MainClass();

// object1.greet();
// object2.greet();

// class MainClass {
//   greet() {
//     console.log("hello");
//   }
// }

// const object1 = new MainClass();

// object2.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`MY name is  ${this.name}`);
//     console.log(`MY age is  ${this.age}`);
//   }
// }

// const Person1 = new Person("ronit", 23);
// Person1.greet();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log("Any sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Dog bark");
//   }
// }

// const dog1 = new Dog();
// dog1.makeSound();

// polymorphism;
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log("Any sound");
//   }

//   display() {
//     console.log(`This is details ${this.name}`);
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Dog bark");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Cat meow");
//   }
// }

// const animal1 = new Animal("Doggy");

// const dog1 = new Dog("doggy");
// const cat1 = new Cat("catty");

// animal1.makeSound();
// dog1.makeSound();
// cat1.makeSound();
// dog1.display();
// cat1.display();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Tiger extends Animal {
//   constructor(name, age, speed) {
//     super(name, age);
//     this.speed = speed;
//   }
// }
// class Liger extends Animal {
//   constructor(name, age, speedy) {
//     super(name, age);
//     this.speedy = speedy;
//   }
// }
// class Siger extends Animal {
//   constructor(name, age, speedi) {
//     super(name, age);
//     this.speed = speedi;
//   }
// }

// const tiger = new Tiger("Tiger", 40, 100);
// const liger = new Liger("Liger", 90, 600);
// const siger = new Siger("Siger", 50, 500);

// // console.log(tiger.name);
// // console.log(tiger.age);
// // console.log(tiger.speed);
// // console.log(liger.name);
// // console.log(liger.age);
// // console.log(liger.speedy);

// console.log(tiger);
// console.log(liger);

// class Bank {
//   #balance;
//   name;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new Bank(1000);
// acc.deposit(5000);
// console.log(acc.getBalance());

// console.log(acc.#balance);

// accesing the methods directly using class
// class Helo {
//   static add() {
//     return 1 + 5;
//   }
// }

// console.log(Helo.add());
