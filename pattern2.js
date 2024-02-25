for (let i = 1 ; i <= 4; i++) {
  for(let j = 4-i ; j>0 ; j--){
    process.stdout.write(" ");
  }
  for(let k=1 ; k<=i ; k++){
    process.stdout.write(k.toString());
  }
  for(let l=i-1 ; l>0 ; l--){
    process.stdout.write(l.toString());
  }
  console.log();
}