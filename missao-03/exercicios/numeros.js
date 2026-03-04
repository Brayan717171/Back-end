/***************************************************
 * Objetivo: Aplicação pra numeros pares e impares
 * Data: 04/03/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const calculos = require('./modulo/calculos')
const tratativa = require('./modulo/tratativa')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Número Inicial (entre 0 e 500): ', function(valorDigitado1) {
    let inicial = valorDigitado1

    entradaDeDados.question('Número Final (entre 100 e 1000): ', function(valorDigitado2) {
        let final = valorDigitado2

       

                // Chamamos a validação primeiro usando os seus nomes de variáveis
                if (tratativa.validarNumeros(valorDigitado1, valorDigitado2) && tratativa.validarDados(valorDigitado1, valorDigitado2)) {
                        
                        // 2 Se for válido, chamar a função que faz o cálculo
                        
                    }
                
                    // Fecha a entrada de dados
                    entradaDeDados.close();

                
           
    }) 
})