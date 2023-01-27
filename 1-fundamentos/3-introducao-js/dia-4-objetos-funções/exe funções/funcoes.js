
//primeiro
const ligarDesligar = (statusCarro) => {
    
    if(statusCarro === 'ligado'){
        statusCarro = 'desligado'
          return `O motor está ${statusCarro}` 
    }else{
        statusCarro = 'lidado'
       return  `O motor está ${statusCarro}` 
    }
}

console.log(ligarDesligar('desligado'))
// segundo
const circleArea = (radius) => {
    let pi = 3.14
    area = pi * (radius**2)
//troquei essa parte (radius !== typepf('number'))
    if(typeof(radius) !== 'number'){
        return `O parâmetro radius deve ser um número`
    }else{
        return `Essa é a área do círculo: ${area}`
    }
}
console.log(circleArea(35))
//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
//Implemente a função longestWord que retornará a maior palavra da frase recebida como parâmetro.
//De olho na dica: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.
//A função longestWord ao receber a frase 'Antônio foi ao banheiro e não sabemos o que aconteceu' e o retorno da função longestWord é: 'aconteceu';
//Ao receber a frase: Eu estudo na Trybe com muita dedicação o retorno será dedicação;
let frase = 'Eu estudo na Trybe com muita dedicação'
const longestWord = (frase) => {
    let sFrase = frase.split(' ')
    let maiorPalavra = sFrase[0]
    for(let value of sFrase){
        if(value.length > maiorPalavra.length){
            maiorPalavra = value
        }
    }
    return maiorPalavra
}
console.log(longestWord(frase))
