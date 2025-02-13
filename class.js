const { log } = require("node:console");
const { resolve } = require("node:path");

class Rectangle {
  constructor(length, breadth, color) {
    this.length = length;
    this.breadth = breadth;
    this.color = color;
  }

  area() {
    const area = this.length * this.breadth;
    return area;
  }

  paint() {
    console.log(`Painting with ${this.color} color.`);
  }
}

const rect = new Rectangle(2, 3, "red"); // rect is object of rectangle class.
const area = rect.area();
console.log(area);
rect.paint();

// Predefined Classes
// 1.Date
const now = new Date();
console.log(now.getFullYear());

// 2.Map

const map = new Map();
map.set("name", "Pavan");
map.set("age", 20);
console.log(map.get("age"));

// Promisified SetTimeout

function SetTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 sec have passed.");
}

SetTimeoutPromisified(3000).then(callback);

setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
