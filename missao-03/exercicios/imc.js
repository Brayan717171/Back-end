/***************************************************
 * Objetivo: Fazer aplicações com diversos calculos
 * Data: 27/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const calculos = require ('./modulo/calculos')

const readline = require('readline')

// Cria uma interface para entrada e saída de dados pelo terminal
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu peso: ', function (valorPeso) {
    let peso = valorPeso

    entradaDeDados.question('Digite sua altura: ', function(valorAltura){
        let altura = valorAltura
        
        let resultadoCalculo = calculos.calcularImc(peso, altura)
        
        let resultado = calculos.imc(resultadoCalculo)

        
        
    })
})