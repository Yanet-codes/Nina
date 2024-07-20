/*let customerLoyalty= "bronze";
if (customerLoyalty="bronze"){
  console.log("10% off");
}else if(customerLoyalty="silver"){
  console.log("15% off");
}else if(customerLoyalty="gold"){
  console.log("20% off");
}else{
  console.log("No discount for unknown loyality level")
}*/
function sum(...args) {
  let sum = 0;
  for (let arg of args)
  { 
sum += arg;
  return sum;
  }
x = sum(4, 9, 16, 25, 29, 100, 66, 77);
}
console.log(x)
