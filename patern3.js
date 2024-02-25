function factorial(num){
  if(num==0){
    return 1;
  }
  return num*factorial(num-1);
}
for(let i = 0 ; i <6 ; i++){
  for(let k = 5-i ; k>0 ; k--){
    process.stdout.write(" ");
  }
  for(let j = i ; j>=0 ; j--){
    let ans = factorial(i)/(factorial(i-j)*factorial(j));
    process.stdout.write(ans.toString()+" ");
  }
  console.log();
}