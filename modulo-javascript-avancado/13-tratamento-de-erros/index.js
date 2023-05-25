let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao !='boolean') throw "Somente o tipo booleano é aceito"

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

let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOcafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaralavada = await lavarXicara(cafeTomado) 
    }catch(error){
        console.log(error)
    }finally{
        console.log('Finalizado o ritual de tomar café, bora trabalhar')
    }
}

iniciarProcessoDeFazerCafe()
