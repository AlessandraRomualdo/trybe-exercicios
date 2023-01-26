//Desenvolva cada exercício a seguir utilizando funções:
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 

function adicao(a, b){
    return a + b
} 
function subtracao(a, b){
    return a - b
}
function multiplicacao(a, b){
    return a * b
}
function divisao(a, b){
    return a / b
}
function resto(a, b){
    return a % b
}
console.log(divisao(14, 7))
console.log(adicao(5, 10))
console.log(subtracao(2, 8))
console.log(multiplicacao(5, 4))
console.log(resto(10, 5))
//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function retornarMaior(num1, num2){
    if(num1 > num2){
        return `O ${num1} é maior`
    }else{
        return `O ${num2} é maior`
    }
}
console.log(retornarMaior(30, 50))
//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres(valor1, valor2, valo3){
    if(valor1 > valor2 && valor1 > valo3){
        return `O ${valor1} é o maior`
    }else if(valor2 > valo3){
        return `O ${valor2} é o maior`
    }else{
        return `O ${valo3} é o maior`
    }
}
console.log(maiorDeTres(55, 36, 47))
//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
 
function verdadeFalso0(valor){
    if(valor > 0){
        return 'positive'
    }else if(valor < 0){
        return  'negative'
    }else{
        return 'zero'
    }
}
console.log(verdadeFalso0(-2))
//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangulo(angulo1, angulo2, angulo3){
    if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return `[ERRO - angulo invalido]`
    }else if( angulo1 + angulo2 + angulo3 !== 180){
        return false
    }else{
        return true
    }
}
console.log(triangulo(30, 120, 30))