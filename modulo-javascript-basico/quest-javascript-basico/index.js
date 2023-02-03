function somar(numero1, numero2){
    let soma = numero1 + numero2;
    return 'A soma dos dois números é: ' + soma;
}

function subtrair(numero1, numero2){
    let subtrair = numero1 - numero2;
    return 'A subtração dos dois números é: ' + subtrair;    
}

function dividir(numero1, numero2){
    let dividir = numero1 / numero2;
    return 'A divisão dos dois números é: ' + dividir;
}

function multiplicar(numero1, numero2){
    let multiplicar = numero1 * numero2;
    return 'A multiplicação dos dois números é: ' + multiplicar;
}

let soma = somar(2,2)
let subtracao = subtrair(24,10)
let multiplicacao = multiplicar(10,2)
let divisao = dividir(25,5)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

