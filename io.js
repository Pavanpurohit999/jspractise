const { log } = require("console");
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log("Err is:");
  console.log(err);
  console.log("Data is :");
  console.log(contents);
});
fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log("Error is:");
  console.log(err);
  console.log("Data is:");
  console.log(contents);
});

console.log("Done!");
