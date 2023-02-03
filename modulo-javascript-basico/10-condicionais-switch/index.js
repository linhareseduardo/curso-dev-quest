//switch(parametro){
//  case valor1:
//      <bloco de declaração>
//  case valor2:
//      <bloco de declaração>    
//}

let nomeFilme = 'Batman'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o filme dos Vingadores')
        break
    case 'Batman':
        console.log('É o filme do Batman')
        break
    case 'Senhor dos Anéis':
        console.log('É o filme do Senhor dos Anéis')
        break
    default:
        console.log('É outro filme')
}

let avaliacao = 2

switch(avaliacao){
    case 1:
    case 2:
        console.log('o filme é ruim')
        break
    case 3:
    case 4:
        console.log('o filme é mediano')
        break
    case 5:
        console.log('o filme é excelente')
        break
    default:
        console.log('Nota inválida')                
        break
}