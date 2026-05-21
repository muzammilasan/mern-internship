let a = 1;
a = "hello";
a = true;

console.log(a);

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Muzammil"));

let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else if (num % 2 === 1) {
  console.log("Odd");
}

for (let i = 10; i <= 15; i++) {
  console.log(i);
}

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(5));

for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function greetUser(user) {
  if (user.gender === "male") {
    console.log("Hi Mr " + user.name + ", your age is " + user.age);
  } else if (user.gender === "female") {
    console.log("Hi Mrs " + user.name + ", your age is " + user.age);
  } else {
    console.log("Hi Mr/Mrs " + user.name + ", your age is " + user.age);
  }
}

let person = {
  name: "Farhana",
  age: 21,
  gender: "female",
};

greetUser(person);

person.gender = "male";
person.name = "Farhan";
greetUser(person);

let name = ["Ibrahim", "Ratheesh", "Kittunni", "Dinkan"];

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

class Phone {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const phone0 = new Phone("Samsung", "Galaxy S21", 799);
const phone1 = new Phone("Apple", "15", 499);

console.log(phone0.brand + " " + phone0.model);

class Student {
  constructor(name, roll, math, phys, chem) {
    this.name = name;
    this.roll = roll;
    this.math = math;
    this.phys = phys;
    this.chem = chem;
  }
  introduce() {
    console.log("Hi " + this.name);
  }
  report() {
    let total = (this.mark = this.math + this.phys + this.chem);
    return total;
  }
}

let st0 = new Student("Muz", 49, 90, 85, 80);
let st1 = new Student("Noo", 50, 80, 85, 90);
let st2 = new Student("Rae", 51, 85, 80, 90);

st0.introduce();
console.log("Total Marks: " + st0.report());

class User {
  constructor(name, gender, age, phone) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
  }
}

let nums = [1, 2, 3, 4, 5, 6];

let even_nums = nums.filter((n) => n % 2 == 0);
console.log(even_nums);

even_nums.forEach((n) => console.log(n + " is even"));

let mul5_nums = nums.map((n) => n * 5);
console.log(mul5_nums);

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
  console.log(fn);
}

console.log(sumofSomething(1, 2, square));
console.log(sumofSomething(2, 3, cube));

let someArray = [1, 2, 3, 4];

someArray.map((value, i, array) => {
  console.log(value);
});

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += 1;
  }
  return ans;
}

function findSumTill100() {
  return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("hello world");

const fs = require("fs");

function readMyfile(cb) {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    cb(data);
  });
}

console.log("Hello");

function whenDone(data) {
  console.log(data);
}

readMyfile(whenDone);
