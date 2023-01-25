//Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:
//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
/** 
 /de um vanor maior que 1
 /imprima o valor em linhas 
 */
let n = 4
let linha = ''

for(let index = 0; index < n; index +=1){
    linha += '*'
}

for(let index = 0; index < n; index += 1){
    console.log(linha)
}

/**
 * Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
 */
let v = 5
let simbolo = '*'
let newLine = ''

for(let index = 0; index <= v; index +=1){
    console.log(newLine)
    newLine  += simbolo
}