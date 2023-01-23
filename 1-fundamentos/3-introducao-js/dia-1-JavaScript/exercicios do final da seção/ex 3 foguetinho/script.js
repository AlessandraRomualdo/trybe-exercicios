//🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let anguloA = 60
let anguloB = 60
let anguloC = 60
let somaAngulos = anguloA + anguloB + anguloC


if(anguloA < 0 || anguloB < 0 || anguloC < 0){
    console.log('[ERRO] - Angulo inválido')
}else{    
    if(somaAngulos == 180){
        console.log(true)
    }else {
        console.log(false)
    }
}