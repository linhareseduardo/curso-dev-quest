const pessoas = ['Roberto', 'Ricardo', 'Ruan']

console.log(...pessoas)

let pessoas1 = ['Roberto', 'Ricardo', 'Ruan']
let pessoas2 = ['Pedro', 'Ricardo', 'Paulo']

pessoas1 = [...pessoas1,...pessoas2]

console.log(pessoas1)

const pessoa1 = { nome: 'Eduardo', idade: 26 }
const pessoa2 = { nome: 'Guilherme', idade: 29}

const objetoClonado = {...pessoa1}

console.log(objetoClonado)