let frutas = ['banana', 'maçã', 'laranja', 'pêra']

for(let i = 0; i < frutas.length; i++){
    console.log('Fruta: ' + frutas[i])
}

frutas.forEach(function(item){
    console.log('Fruta: ' + item)
})

frutas.push('manga')

console.log(frutas)

frutas.pop()

console.log(frutas)

frutas.shift()

console.log(frutas)

frutas.unshift('Morango')

console.log(frutas)

let posicaoLaranja = frutas.indexOf('laranja')

console.log(posicaoLaranja)