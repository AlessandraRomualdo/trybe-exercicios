/*
Encontre o index através do valor de um elemento
Primeiramente divida seu problema em partes e só depois disso comece a codar.

Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array"
*/ 
//criar um arry e uma variavel com um elemento do array
//criar um for para pecorrer o array
//procurar elemento no array 
//imprimir index do elemento ou se não tiver imprimir não encontrado
let array = [2, 5, 8, 6, 7]
let valor = 7
for(let index = 0; index < array.length; index += 1){
    if(array[index] === valor){
        console.log('A possição do elemento é: '+index)
    }else{
        console.log('Elemento não encontrado no array')
    }
    
}



/*
Retorne os números ímpares
Primeiramente divida seu problema em partes e só depois disso comece a codar.

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
*/ 
//criar variavel que receba uma lista numeros impares
//criar of para pecorer numeros 1 a 50
//fazer uma comparação (se é impar)
//armazenar numeros impares na lista 
//exibir a lista
let numerosImpar = []
for(let index = 1; index < 50; index += 1){
    if(index % 2 !== 0){
        numerosImpar.push(index) 
    }
}
console.log(numerosImpar)