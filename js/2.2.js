const readlineSync = require("readline-sync");

let min = readlineSync.question("min");
let max = readlineSync.question("max");
let current = readlineSync.question("current");

if (min < max) {

if (current > min || current < max) {
    console.log(current);
} 

else {
    console.log("enter num min max");
}

else {
  console.log("min should be smaller than max");
}