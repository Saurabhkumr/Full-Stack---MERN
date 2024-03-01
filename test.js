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

// Q4

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

//Q5

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

// Q6

let str = "saurabhkumar";
let a = 0;
let n = str.length;
for (let i = 1; i < n; i++) {
  for (let k = n; k > 0; k--) {
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
  n--;
  console.log();
}
