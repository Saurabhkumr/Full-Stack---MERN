for(let i = 0 ; i<6 ;i++){
  for(let k=5-i ; k>0 ; k--){
    process.stdout.write(" ");
  }
  for(let j=0 ; j<=i ; j++){
    process.stdout.write("* ");
  }
  console.log();
}

