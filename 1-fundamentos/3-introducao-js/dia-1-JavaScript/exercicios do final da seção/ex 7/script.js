// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let aliquotaINSS
let alicotaIR
let salarioBruto = 3000.00
//aliquita de 8%
if(salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08
    //aliquota de 9%
}else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09
    //aliqiota de 11%
}else if(salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11
    //aliquota maxima
}else {
    aliquotaINSS = 570.88
}
let salariBase = salarioBruto - aliquotaINSS
//isento de IR
if(salariBase <= 1903.98){
    alicotaIR = 0
    //alicota de 7.5%
}else if(salariBase <= 2826.65){
    alicotaIR = (salariBase * 0.075) - 142.80
    //alicota de 15%
}else if(salariBase <= 3751.05){
    alicotaIR = (salariBase * 0.15) - 354.80
    //alicota de 22.5%
}else if(salariBase <= 4664.68){
    alicotaIR = (salariBase * 0.225) - 636.13 
}else{//alicota maxima 27.5%
    alicotaIR = (salariBase * 0.275) - 869.36
}
let salarioliquido = salariBase - alicotaIR
console.log('Salario bruto: '+salarioBruto)
console.log('Salario base: '+salariBase)
console.log('Salario liquido: '+salarioliquido)
