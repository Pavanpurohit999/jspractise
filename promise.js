const { resolve } = require("path");

function random(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 s passed");
}

random(3000).then(callback);

function pavan() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

function callback2() {
  console.log("5 s passed");
}
let p = new pavan();
p.then(callback2);

// assignment to readfile,writefile,cleanfile

let fs = require("fs");

function readtheFile(resolve) {
  fs.readFile("../a.txt", "utf-8", function (err, contents) {
    resolve(contents);
  });
}
function readfile() {
  return new Promise(readtheFile);
}

function readcall(contents) {
  console.log(contents);
}

function writethefile(resolve) {
  fs.writeFile("b.txt", "Hello Bro", function (err,data) {
    resolve(data);
  });
}
function writefile() {
  return new Promise(writethefile);
}

function writecall() {
  console.log("Data has been updated by me ...");
}

const l = new readfile();
l.then(readcall);
const w = new writefile();
w.then(writecall);
