var numA = 6
var numB = 12

console.log("------------------level 0------------");
if(numA<numB){
  console.log(`${numA} is bigger than ${numB}`);
}

console.log("------------------level 1------------");
if(numA>numB){
  console.log(`${numA} is bigger than ${numB}`);
} else if(numA<numB) {
  console.log(`${numA} is smaller than ${numB}`);
} else {
  console.log(`${numA} is equals ${numB}`);
}

console.log("------------------level 2------------");
(numA>numB) ? console.log(`${numA} is bigger than ${numB}`) : console.log(`${numA} is smaller than ${numB}`)


console.log("------------------level 3------------");

var bmi = 22

if(bmi<18.5){
  console.log("underweight")
} else if ( (bmi>=18,5) && (bmi<25) ){
  console.log("normal rage")
} else if ( (bmi>=25) && (bmi<30) ){
  console.log("overweight pre obese")
} else if ( (bmi>=30) && (bmi<35) ){
  console.log("obese class I")
} else if ( (bmi>=35) && (bmi<40) ){
  console.log("obese class II")
} else if (bmi>=40){
  console.log("obese class III")
}

console.log("------------------level 4------------");

function bmiCalculator(bmi){
  if(bmi<18.5){
    return "underweight"
  } else if ( (bmi>=18,5) && (bmi<25) ){
    return "normal rage"
  } else if ( (bmi>=25) && (bmi<30) ){
    return "overweight pre obese"
  } else if ( (bmi>=30) && (bmi<35) ){
    return "obese class I"
  } else if ( (bmi>=35) && (bmi<40) ){
    return "obese class II"
  } else if (bmi>=40){
    return "obese class III"
  }
}

console.log(bmiCalculator(35));
console.log(bmiCalculator(22));

console.log("------------------level 5------------");

function ranNumGenerator(){
  return Math.floor(Math.random()*40)
}

console.log(ranNumGenerator());
