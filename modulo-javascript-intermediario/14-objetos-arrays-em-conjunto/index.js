// let jogo1 ={
//     nome: 'Final Fantasy'
// }

// let jogo2 ={
//     nome: 'Fallout'
// }

// let jogo3 ={
//     nome: 'Fifa'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: ['Final Fantasy', 'Fallout', 'Fifa']
// }

// console.log(videoGame)


// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Eduardo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}


console.log(cliente.ultimoPedido.jogos[0])