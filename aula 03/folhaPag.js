let valorPercentual = 5
//Import da biblioteca que realiza calculos financeiros
let calculos = require('./modulo/calculos')

let percentual = calculos.calcularPercentual(valorPercentual)

console.log(percentual)