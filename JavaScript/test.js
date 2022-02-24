document.write("Welcome Java Script"); //print on the browser
console.log("Welcome to JavaScript console"); //browser console
//always use let(dont use var keyword)
let z1 = 12;
console.log("printing something" + z1);

//var -> scope level function
//let -> scope level block
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();
//JSON( Javas Script Object Notation)
const emp = {
    name: "Lakshmi",
    printEmp: function () { },
    printEmp2() {
        console.log(this);
    }, //es6 standards
};

const x1 = emp.printEmp2();
console.log(x1);

let kk1;
kk1 = 2222;
console.log("after declaring" + kk1);

let a; //decleration
//var vs let
a = 10; //initialization
console.log(a);
//JavaScript support loosely typed language
let a1 = 10;
//a1 = true;
//a1 = "abc";
var z2 = typeof a1;
console.log("Type of z2 is " + z2);

let b1 = "10";
let xx = true;
let c1 = 12;

console.log("a1+b1 = " + (a1 + b1));
console.log("a1+b1 = " + (b1 - a1));
console.log(a1 == b1); //true
console.log(a1 === b1); //false

let [first, second, third] = ["Apples", "Oranges", "Strawberry"];
//let [1,2,3]=['Apples','Oranges','Strawberry'];
let test = ["one", "two", "three"];
let [aa1, bb2, cb3] = test;
console.log(first);
console.log(second);
console.log(third);
//Destructuring returned arrays
function callMe() {
  return ["one", "two", "three"];
}

let [x, y, z] = callMe();
console.log(x);
console.log(y);
console.log(z);

//spread or rest parameter
let vegies = ["carrot", "eggplant", "greenpepper"];
let [first1, second1, third1] = [
  "musrhroom",
  "chillies",
  ...vegies,
  "cilantro",
  "potato",
];
console.log(first1);
console.log(second1);
console.log(third1);