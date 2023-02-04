let frutas = ['banana', 'maçã', 'laranja', 'uva']

let frutasExtraidas = frutas.slice(1,3)

console.log(frutasExtraidas)

console.log(frutas)

frutasExtraidas = frutas.splice(1,2)

console.log(frutasExtraidas)

console.log(frutas)

let removeEAdicionaFrutas = frutas.splice(1, 2, 'goiaba', 'abacaxi', 'pêra')

console.log(frutas)