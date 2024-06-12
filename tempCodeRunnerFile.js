let str = "saurabhkumar";
let a = 0;
let n = Math.ceil(str.length / 2);
for (let i = 1; i < n; i++) {
  for (let k = n - i; k > 0; k--) {
    process.stdout.write(" ");
  }
  for (let j = i; j > 0; j--) {
    if (a < str.length) {
      let str1 = str[a];
      process.stdout.write(str1 + " ");
      a++;
    } else {
      process.stdout.write(" - ");
    }
  }
  if (a >= str.length) break;
  console.log();
}
