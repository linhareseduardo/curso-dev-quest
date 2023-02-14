// setTimeout(function(){console.log('após 3 segundos')}, 3000)

// setInterval(() => {
//     console.log('Executando a cada 2 segundos')
// }, 2000);

// console.log('console depois do setTimeout')

let idDoIntervalo = setInterval(() => {
        console.log('Executando a cada 2 segundos')
     }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)