// Q1

// let a = 233456332;
// let arr="";
// a = a.toString().split('');
// for(i in a){
//   if(!arr.includes(a[i])){
//     arr+=a[i];
//   }

// }
// for(let j in arr){
//   let count = 0 ;
//   for(let k in a){
//     if(arr[j]==a[k]){
//       count++;
//     }
//   }
//   process.stdout.write(`${arr[j]} - ${count} `+" ");
// }

// function count(num){
//   let b = num.toString();
//   let ans = {};
//   for(let i in b){
//     let digit = b[i];
//     ans[digit]=(ans[digit] || 0)+1;
//   }
//   for(let j in ans){

//     process.stdout.write(`${j}-${ans[j]}`+"  ");
//   }

// }
// let a = 233456332;
// count(a);

// Q2

// let str = "This is a sample string";
// str=str.split(' ').join('');
// count(str);

// Q3

// a

// let str = "Reverse words of this string";
// str = str.split(' ').reverse().join(' ');
// console.log(str);

// b

// let str = "Reverse words";
// str = str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
// console.log(str);

// c

// let str = "Reverse words";
// str = str.split(' ').map(word=>word.split('').reverse().join('')).reverse().join(' ');
// console.log(str);

// Q5

// for(let i = 1 ; i<=6 ; i++){
//   for(let j = 6-i ; j>0;j--){
//     process.stdout.write("  ");
//   }
//   for(let k = i ; k>0 ; k--){
//     process.stdout.write(k.toString()+" ");
//   }

//   for(let l=2 ; l<=i; l++){
//     process.stdout.write(l.toString()+" ");
//   }
//   console.log();

// }

//Q6

// function fact(num){
//   if(num==0) return 1;
//   return num*fact(num-1);
// }

// for(let i = 0 ; i < 6 ; i++){
//   for(let j = 6-i ; j>0 ; j--){
//     process.stdout.write(" ");
//   }
//   for(let k = i ; k>=0 ; k--){
//     let ans = fact(i)/(fact(i-k)*fact(k));
//     process.stdout.write(ans.toString()+" ");
//   }
//   console.log()
// }

// Q7

// let str = "saurabhkumar";
// let a = 0;
// let n = Math.ceil(str.length / 2);
// for (let i = 1; i < n; i++) {
//   for (let k = n - i; k > 0; k--) {
//     process.stdout.write(" ");
//   }
//   for (let j = i; j > 0; j--) {
//     if (a < str.length) {
//       let str1 = str[a];
//       process.stdout.write(str1 + " ");
//       a++;
//     } else {
//       process.stdout.write(" - ");
//     }
//   }
//   if (a >= str.length) break;
//   console.log();
// }

//Q-8

//i

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + 2;
// }
// console.log(arr);

//ii
// let arr2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] = arr2[i] - 2;
// }
// console.log(arr2);

//iii
// let arr3 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = arr3[i] ** 2;
// }
// console.log(arr3);

//iv
// let arr4 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr4.length; i++) {
//   arr4[i] = 1;
// }
// console.log(arr4);

//v
// let arr5 = [1, 121, 13, 241, 51];
// arr5.forEach((element) => {
//   prime(element);
// });
// function prime(num) {
//   let a = Math.ceil(Math.sqrt(num));
//   let flag = 0;
//   if (num <= 1) {
//     console.log(`${num} - Neither prime or non prime`);
//     return;
//   }

//   for (let i = 2; i <= a; i++) {
//     if (num % i == 0) {
//       flag = 1;
//     }
//   }

//   if (flag != 0) {
//     console.log(`${num} - Non Prime`);
//   } else console.log(`${num} - Prime`);
// }

//vi
// let arr6 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr6.length; i++) {
//   if (arr6[i] % 2 == 0) {
//     console.log(`${arr6[i]} Even no`);
//   } else {
//     console.log(`${arr6[i]} Odd No`);
//   }
// }

//vii
// let arr7 = [121, 321, 34543, 23, 4445, 55];
// arr7.forEach((num) => {
//   palindrome(num);
// });
// function palindrome(num) {
//   let rev = num.toString().split("").reverse().join("");
//   if (num == rev) console.log(`${num} is a palindrome`);
//   else console.log(`${num} is not a palindrome`);
// }

//viii
// let arr8 = [2, 5, 3, 6, 4];
// arr8.forEach((num) => {
//   console.log(`factorial of ${num} is ${factorial(num)}`);
// });
// function factorial(num) {
//   if (num == 0) return 1;
//   return num * factorial(num - 1);
// }

//ix
// let arr9 = [4, 5, 6, 3, 2];
// arr9.shift();
// console.log(arr9);

//x
let arr10 = [2, 3, 4, 5, 6];
arr10.splice(1, 0, 55, 99);
console.log(arr10);
