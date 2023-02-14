let pessoas =[
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Eduardo', idade: 26}
]

// let nomeDasPessoas = []

// for(let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

// let nomeDasPessoas = pessoas.map(function (pessoa){
//     return pessoa.nome + " tem "+ pessoa.idade + " anos de idade "
// })

// console.log(nomeDasPessoas)

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem "+ pessoa.idade + " anos de idade ")

console.log(nomeDasPessoas)