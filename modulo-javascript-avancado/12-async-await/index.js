let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado : Água foi fervida')
            resolve()
        } else{
            console.log('É necessário colocar a chaleira com a água e ligar o foão se não teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    }) 
}

let passarOcafe = (aguaFervida) => {
    return new Promise ((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise ((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise ((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xícara')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//     .then(() => {
//         return passarOcafe()
//     })
//     .then(() => {
//         return tomarCafe()
//     })
//     .then(() => {
//         return lavarXicara()
//     })
//     .then(() => {
//         console.log('Finalizando ritual do café, bora trabalhar')
//     })

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarOcafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaralavada = await lavarXicara(cafeTomado)
    if(xicaralavada) console.log('Finalizado o ritual de tomar café, bora trabalhar')

}

iniciarProcessoDeFazerCafe()

