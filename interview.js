// let a = 10;
// let b = new Number(10);
// console.log(a === b);

// let obj = {
//   name: "saurabh",
//   address: {
//     city: "New delhi",
//   },
// };

// let user = obj; // reference is copied
// user.name = "anmol";
// console.log(obj.name);

// shallow copy

// let obj = {
//   name: "saurabh",
//   address: {
//     city: "New delhi",
//   },
// };

// let user = { ...obj };
// user.name = "anmol";
// user.address.city = "varanasi";
// console.log(obj.name);
// console.log(obj.address.city);
// console.log(user.name);
// console.log(user.address.city);

// Deep copy

// let obj = {
//   name: "saurabh",
//   address: {
//     city: "New delhi",
//   },
//   func: () => {
//     return "hello";
//   },
// };

// let user = JSON.parse(JSON.stringify(obj));

// const _ = require("lodash");
// let user = _.cloneDeep(obj);

// user.name = "anmol";
// user.address.city = "varanasi";
// console.log(obj.name);
// console.log(obj.address.city);
// console.log(obj.func());

// console.log(user.name);
// console.log(user.address.city);
// console.log(user.func());

function sum(a) {
  return function (b) {
    res = a + b;
    return function (c) {
      return res * c;
    };
  };
}

console.log(sum(2)(5)(4));
