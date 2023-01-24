// Lidando com arrays

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}
// Some todos os valores contidos no array e imprima o resultado;
let soma = 0
for(let index = 0; index < numbers.length; index += 1){
   soma += numbers[index]
}
console.log(soma)
// Calcule e imprima a média aritmética dos valores contidos no array;
let total = 0
for(let index = 0; index < numbers.length; index += 1){
    total += numbers[index]    
}
let media = total / numbers.length
    console.log(media)
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if(media > 20){
    console.log('Valor maior que 20.')
}else{
    console.log('Valor menor ou igual a 20')
}
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let comparacao = numbers[0]
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > comparacao){
        comparacao = numbers[index]
    }
}
console.log(comparacao)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impar = 0
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 == !0){
        impar += 1        
    }
}
if(impar === 0){
    console.log('Nenhum valor impar encontrado')
}else{
    console.log('Existe '+impar+' valores impares no array numbers')
}
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0]
for(let index = 0; index < numbers.length; index += 1){
    if(menor > numbers[index]){
        menor = numbers[index]
    }
}
console.log('Este é o menor valor do array '+menor)
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numeros = []
for(let index = 1; index <= 25; index += 1){
    numeros.push(index)
}
console.log(numeros)
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let res = 0
for(let index = 0; index < numeros.length; index += 1){
    res =numeros[index] / 2
    console.log(res)
}
