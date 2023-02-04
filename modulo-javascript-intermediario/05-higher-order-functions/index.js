const calcularAnoDeNascimeto = function(idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimeto(26, 10, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

// function dobrar(numero){
//     return numero * 2
// }

// function triplicar(numero){
//     return numero * 3
// }

// function quadruplicar(numero){
//     return numero * 4
// }

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(50))
console.log(triplicar(50))
console.log(quadruplicar(50))
