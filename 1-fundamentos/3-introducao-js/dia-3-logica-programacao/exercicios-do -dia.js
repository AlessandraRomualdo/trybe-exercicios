//crie um algoritmo que imprima na tela o fatorial de 10.
//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1
for(let index = 10; index > 0; index -= 1){
    fatorial *= index   
   
}
console.log(fatorial)

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'Chocolate'
let inverter = ''
for(let index = 0; index < word.length; index += 1){
    inverter += word[word.length - 1 - index]
}
console.log(inverter)

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css']
let palavraMaior = array[0]
let menorPalavra =array[0]
for(let index = 0; index < array.length; index += 1){
     
        if(array[index].length > palavraMaior.length){
            palavraMaior = array[index]
        }
}
console.log(palavraMaior)

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index]
    }
}
console.log(menorPalavra)
