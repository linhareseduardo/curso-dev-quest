

let ferverAgua = function(chaleiraEstaNoFogao,fogaoEstaLigado){
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver a água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarcafe = () => console.log('passar café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then()
console.log("fazendo café")