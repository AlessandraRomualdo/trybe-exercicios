//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const valor1 = 20
const valor2 = 10

if(valor1 > valor2){
    console.log('O valor '+valor1+' é maior que '+valor2)
}else{
    console.log('O valor '+valor2+' é maior')
}

//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

const numero1 = 50
const numero2 = 48
const numero3 = 73

if(numero1 > numero2 && numero1 > numero3){
    console.log('O valor '+numero1+' é maior')
}else if(numero2 > numero1 && numero2 > numero3){
    console.log('O valor '+numero2+' é maior')
}else{
    console.log(numero3+' é maior')
}

//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let valor = 5

if(valor > 0){
    console.log('positive')
}else if(valor < 0){
    console.log('negative')
}else{
    console.log('zero')
}