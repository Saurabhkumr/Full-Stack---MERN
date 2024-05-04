// console.log("10" === 10);
// const regex = /\d+/g;
// const str = "The price is $10 for 2 items.";
// let match;

// while ((match = regex.exec(str)) !== null) {
//   console.log("Match found:", match[0], "at index", match.index);
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(
//       "Hello, my name is " + this.name + " and I am " + this.age + " years old."
//     );
//   };
// }

// var p = new Person("Saurabh", 12);
// p.sayHello();

// function sum(...arr) {
//   let s = 0;
//   for (n of arr) {
//     s += n;
//   }
//   return s;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));

// function sum(a, b) {
//   return a + b;
// }
// arr = [6, 5, 4, 3];
// console.log(sum(...arr));
// console.log(typeof arr);

// const fibo = (n) => {
//   let a = 0;
//   let b = 1;
//   console.log(a);
//   console.log(b);
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//   }
// };
// module.exports = fibo;

let arr = [4, 5, 6, 7, 3];
console.log(arr.pop());
