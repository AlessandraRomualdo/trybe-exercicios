let numeros = []

for(let index = 1; index <= 100; index += 1){
     numeros.push(index)
}
//console.log(numeros)

let soma = 0

for(let i = 0; i < numeros.length; i += 1){
    soma += numeros[i]
}
//console.log(soma)

let cem = 100
for(let ind = 100; ind == 0; ind -= 5){
    cem -= cem[ind]
    console.log(cem)
}