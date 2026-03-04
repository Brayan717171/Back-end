/***************************************************
 * Objetivo: Aplicação pra tabuada
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

// Corrigido apenas o parêntese: question('pergunta', function(variavel) { ... })
entradaDeDados.question('Tabuada Inicial (entre 2 e 100): ', function(tabInicial) {
    let inicial = tabInicial

    entradaDeDados.question('Tabuada Final (entre 2 e 100): ', function(tabFinal) {
        let final = tabFinal

        entradaDeDados.question('Contador Inicial (entre 1 e 50): ', function(contInicial) {
            let contInicial1 = contInicial

            entradaDeDados.question('Contador Final (entre 1 e 50): ', function(contFinal) {
                let contFinal2 = contFinal

                // Chamamos a validação primeiro usando os seus nomes de variáveis
                if (tratativa.validarDados (inicial, final, contInicial1, contFinal2) && tratativa.validarTabuada(inicial, final)) {


                    if(tratativa.validarContador (contInicial1, contFinal2)){
                        // Se a validação for verdadeira, gera a tabuada
                    calculos.gerarTabuada(inicial, final, contInicial1, contFinal2)
                    }
                    
                }

                entradaDeDados.close()
            }) 
        }) 
    }) 
})