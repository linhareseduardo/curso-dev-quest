'use strict'

// console.log(this)

// console.log(window)

// console.log(window === this)

// this.name = 'Ricardo'

// function saudar(){
//     console.log('this no contexto da função ', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Eduardo',
//     saudar: function(){
//         console.log('this no contexto do método', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'brócolis',
    temperatura: 0
}

// comida.cozinhar = function (comidaParaCozinhar, temperaturaDeCozimento) {
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento
// }

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento
}

console.log(comida)

//comida.cozinhar(comida,100)
comida.cozinhar(100)

console.log(comida)