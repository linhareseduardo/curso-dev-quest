/* 
    == -----igual----- a==b ---- verdadeiro se 'a' for igual a 'b'
    != ----- não é igual (diferente) - verdadeiro se 'a' não for igual a 'b'
    === ------ identico----- a===b ----- verdadeiro se 'a' for identico a 'b'
    !== ----- não identico a!==b verdadeiro se 'a' não for identico a 'b'
    < ----- menor que a < b ---- verdadeiro quando 'a' for menor que 'b'
    > ------ maior que a > b ----- verdadeiro quando 'a' for maior que 'b'
    >= maior ou igual que a >= b ---- verdadeiro quando 'a' for maior ou igual a 'b'
    <= menor ou igual que a <= b ----- verdadeiro quando 'a' for menor ou igual a 'b'
*/


const a = 3
const b = 3

console.log(a!==b)
console.log(a===b)
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a>=b)
console.log(a<b)
console.log(a<=b)

const c = 2
const d = 2

console.log(c === d && c <= d)
console.log(c === d && c < d)
console.log(c > d && c === d)
console.log(c > d && c < d)



console.log(c === d || c <= d)
console.log(c === d || c < d)
console.log(c < d || c === d)
console.log(c > d || c < d)


//not
console.log(!(a === b))


console.log(!(a < b))

