const fs = require("fs");
// fs.writeFileSync("./test.txt", "hello guys");
// fs.writeFile("./test.txt", "hello guys", (err) => {
//   console.log(err);
// });

// const result = fs.readFileSync("./copy.txt", "utf-8");
// fs.readFile("./copy.txt", "utf-8", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });

// fs.appendFileSync("./test.txt", "saurabh");
// fs.appendFile("./test.txt", "saurabh", (err) => {});
// fs.unlinkSync("./copy.txt");

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function writePrime(limit) {
  let arr = [];
  let i = 2;
  while (arr.length < limit) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

let prime = `Prime numbers are: [${writePrime(5)}]`;
fs.writeFile("./prime.txt", prime, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File 'prime.txt' created successfully.");
  }
});

fs.unlink("./prime.txt", (err) => {
  console.log(err);
});
