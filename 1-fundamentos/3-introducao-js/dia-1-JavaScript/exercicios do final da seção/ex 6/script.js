// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const num1 = 20
const num2 = 34
const num3 = 26
let result 

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    result = true
}else{
    result = false
}
console.log(result)

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

if(num1 % 2 == !0 || num2 % 2 == !0 || num3 % 2 == !0){
    result = true
}else{
    result = false
}
console.log(result)

// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
const custo = 10
let imposto = 20 / 100
let custoTotal = 100 + (20 / 100)
const valorVenda = 20
let quant = 1000

if(custo < 0 || valorVenda < 0){
    console.log('[ERRO] - os valores não podem ser menor que zero')
}else{
    let totalEmVendas = (custoTotal + valorVenda) * quant
    let lucro = totalEmVendas - (custoTotal * quant)
    console.log(lucro.toFixed(2))

}