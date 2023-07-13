const readline = require('readline-sync');

const mansureBMI = (height, weight) => {
  const heightInMeters =  height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  return bmi;
};

const bmiStatus = (bmi) => {
  if (bmi < 18.5) return "Abaixo do peso (magreza)";
  if (bmi < 24.9) return "Peso normal";
  if (bmi < 29.9) return "Acima do peso (sobrepeso)";
  if (bmi < 34.9) return "Obesidade grau I";
  if (bmi < 39.9) return "Obesidade grau II";
  return "Obesidade graus III e IV";
}

const main = () => {
  const height = readline.questionInt("What’s your height? (in cm) ");
  const weight = readline.questionFloat("What’s your weight? (in Kg) ");
  const bmi = mansureBMI(height, weight);
  const status = bmiStatus(bmi);
  console.log(`Your BMI is ${bmi.toFixed(2)} and you are ${status}`);
  return bmi, status;
};
main();
