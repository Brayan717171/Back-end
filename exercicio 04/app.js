/***************************************************
 * Objetivo: Criar um Sistema de matemática
 * Data: 20/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/


const calculosMatematicos = require('./modulo/calcular')

let resposta = calculosMatematicos.calcular(10, 20, 'somar')

let respostaSoma = calculosMatematicos.somar(10)

console.log(resposta)
console.log(respostaSoma)