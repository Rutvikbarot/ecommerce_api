/** If */

if ("condition") {
}

// if-> else
if ("condition") {
} else {
}

// if -> else ladder

if ("condition") {
} else if ("condition") {
} else if ("condition") {
} else {
}

// switch

switch (true) {
  case 2:
    "muje nahi bejcna";
    break;

  case 3:
    "muje nahi 1";
    break;

  case 4:
    "muje nahi 1";
    break;
  default:
    "value wrong ";
    break;
}

// ->
let instock = 10;
if (instock <= 2) {
  console.log("is available");
} else if (instock !== 10) {
  console.log("out of stock");
} else if (instock !== 9) {
  console.log("ready to sale");
}

switch (instock) {
  case 10:
    console.log("avai");
    break;

  case 9:
    console.log("out");

  case 10:
    console.log("ready to sale");

  default:
    break;
}

// let instock = 2;
// if (instock >= 2) {
//   console.log("is available");
// } else if (instock === 0) {
//   console.log("out of stock");
// } else if (instock === 5) {
//   console.log("ready to sale");
// }

// switch (instock) {
//   case 2:
//     console.log("muje nahi bech na");
//     break;

//   case 3:
//     console.log("1");
//     break;

//   case 4:
//     console.log("2");
//     break;
//   default:
//     break;
// }

let color = "red"; //declare

console.log(color === "4");
console.log(color == 4);

console.log(color === "3");

// Function Decleration

function xyz(params) {
  console.log(params);
}

let obj = {
  name: "rutvik",
  age: "23",
  hobbies: ["eating", "gaming"],
  address: {
    city: "ahemedabad",
    state: "gujrat",
  },
};

function add(a, b) {
  console.log(a + b);
}

add(1, 2);
add(4, 5);

function sub(a, b) {
  console.log(a - b);
}
sub(1290, 1000);

function mult(a, b, c) {
  console.log(a * b * c);
}

mult(2, 2, 2);

function div(a, b, c) {
  console.log(a / b / c);
}

div(10, 2, 2);

// string //
console.log("-------------------------------");

var str = "HELLOW WORLD";
var res = str.charAt(7);

console.log(res);

console.log("-------------------------------");

var str = "HELLOW WORLD";
var res = str.charCodeAt(0);

console.log(res);

console.log("-------------CONCAT------------------");

var str1 = "Hellow ";
var str2 = "World!";

var res = str1.concat(str2);
console.log(res);
console.log("-------------endswith------------------");

var str = "Hellow world, Welcome to the universe.";
var res = str.endsWith("universe.");
console.log(res);

console.log("---------------fromcharcode----------------");

var res = String.fromCharCode(65);
console.log(res);

console.log("--------------includes-----------------");

var str = "Hellow world, welcome to the universe.";
var res = str.includes("no");
console.log(res);
console.log("--------------indexof-----------------");

var str = "Hellow world, welcome to the universe.";
var res = str.indexOf("welcome");
console.log(res);

console.log("-------------lastindexof------------------");

var str = "Hellow planet earth, you are a great planet.";
var res = str.lastIndexOf("planet");
console.log(res);

console.log("-------------------------------");

//---------------------------------------------------------
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobius", "Linus"];
var children = hege.concat(stale);
console.log(children);

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
console.log("--------------------------------------");

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.every(checkAdult));
console.log(ages.filter(checkAdult));
console.log("-----------------------");

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.find(checkAdult));

console.log(ages.findIndex(checkAdult));
console.log(
  "---------------------------------------------------------------------"
);

let numbers = [65, 44, 12, 2];
numbers.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);

console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];

var n = fruits.includes("banana", 0);
console.log(n);

console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];

var n = fruits.indexOf("apple");
console.log(n);
console.log("--------------------------------------------");

var fruits = [
  {
    name: "rutvik",
  },
];

var result = Array.isArray(fruits);
console.log(result);
console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];

var a = fruits.indexOf("apple");
console.log(a);
console.log("--------------------------------------------");

var number = [1, 2, 3, 4];
var x = number.map(Math.sqrt);
console.log(x);

console.log("--------------------------------------------");
var fruits = ["banana", "orange", "apple", "mango"];
fruits.pop();
console.log(fruits);

console.log("----------------------shift----------------------");

var fruits = ["banana", "orange", "apple", "mango"];
fruits.shift();
console.log(fruits);

console.log("----------------------sort---------------------");

var fruits = ["z", "x", "y"];

fruits.sort();
console.log(fruits);

console.log("--------------------------------------------");
var fruits = ["banana", "orange", "apple", "mango"];

var length = fruits.push("kiwi");
console.log(fruits);
console.log(length);

console.log("--------------------------------------------");

var number = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  console.log(total, num);
  if (total > 0) {
    return Math.round(total) - Math.round(num);
  } else {
    return num;
  }
}
var result = number.reduce(getSum, 0);
console.log(result);

console.log("-----------------------");

var num = [175, 50, 25];
function myFunc(total, num) {
  return total - num;
}

var result = num.reduceRight(myFunc);
console.log(result);
console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];
fruits.reverse();
console.log(fruits);

console.log("--------------------------------------------");

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.some(checkAdult));
console.log("------------------ Array.slice() --------------------------");

var fruits = ["banana", "orange", "lemon", "apple", "mango"];

var citrus = fruits.slice(1, 3);
console.log(citrus);

console.log("---------------- Array.splice() ----------------------------");

var fruits = ["banana", "orange", "apple", "mango"];
fruits.splice(2, 0, "lemon", "kiwi");
console.log(fruits);
console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];
var x = fruits.toString();
console.log(x);

console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];

fruits.unshift("lemon", "pineapple");
console.log(fruits);

console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];
var r = fruits.valueOf();
console.log(r);

console.log("--------------------------------------------");

var fruits = ["banana", "orange", "apple", "mango"];

var energy = fruits.join(" and ");
console.log(energy);

console.log("--------------------------------------------");

var fruits = ["apple", "banana", "mango", "orange"];
fruits.fill("Kiwi");
console.log(fruits);
console.log("-------------------------------------");

var fruits = ["apple", "banana", "mango"];

var f = fruits.entries();
console.log(...f);

console.log("------------------------------");
fruits.copyWithin(2, 1);
fruits.myUcase();
console.log(fruits);

console.log("------------------");

function x(...a10) {
  console.log(a10);
  console.log(a10.reduce((a, b) => a + b));

  // for,  for in , for of

  // initialization , compare , increment
  for (let index = 0; index < a10.length; index++) {
    const element = a10[index];
    if (element % 2 === 0) {
    } else {
    }
  }

  console.log({ ...a10 });
  for (const key in a10) {
    if (Object.hasOwnProperty.call(a10, key)) {
      const element = a10[key];
      console.log(element);
    }
  }
  prototypeThe;

  //map , forEach , filter

  a10.map(function (element, index, array) {
    console.log("element :", element);
    console.log("index : ", index);
    console.log("array : ", array);
  });
  console.log("------------------------------------------------");
  a10.forEach(function (element, index, array) {
    console.log("element :", element);
    console.log("index : ", index);
    console.log("array : ", array);
  });

  console.log("------------------------------------------------");
  a10.filter(function (element, index, array) {
    console.log("element :", element);
    console.log("index : ", index);
    console.log("array : ", array);
  });

  let rutvik = a10.filter((ele) => {
    return ele % 2 !== 0;
  });

  console.log(rutvik, "kfhdsgiguifghijhuij");

  console.log("------------------------------------------------");

  let y = a10.filter((ele) => {
    return ele % 3 === 0;
  });
  console.log(y, "...");

  x(1, 2, 3, 4, 5, 10, 1001, 5001, 7001, 8001);

  let color = "redblueblack"; //declare

  console.log(color === "redblueblack");
  console.log(color == 4);

  console.log(color === "3");
}
//----------------------------------------------
// spread
let newx = {};
newx.body = {};
newx.number = 100;
newx.body.test = "hey";
console.log(newx);

let newy = {};
console.log({ ...newy, body: "test", number: 1000 });
console.log({ ...newy, body: "test", number: 2000 });
let body = { instock: 10 };

if (body.instock > 0) {
  body = { ...body, outofstock: false };
} else {
  body = { ...body, outofstock: true };
}

console.log(body);
