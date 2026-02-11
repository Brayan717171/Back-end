/***************************************************
 * Objetivo: Criar um Sistema permite calculo de juros utilizando boas práticas com funções
 * Data: 11/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const readline = require('readline')

//Cria uma interface para entrada e saida de dados pelo terminal
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})  

// Entrada do nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    // Entrada do nome do produtos
    entradaDeDados.question('Digite o nome do Produto: ', function(produto){
        let nomeProduto = produto

        // Entrada do valor de compra
        entradaDeDados.question('Digite o valor da compra: ', function(capital){
            let capitalProduto = capital
            
            // Entrada da taxa de juros
            entradaDeDados.question('Digite a taxa de juros a ser aplicada na compra: ', function(taxa){
                let taxaCompra = taxa
                
                // Entrada do tempo de pagamento
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo

                    //Import da biblioteca que realiza calculos financeiros
                    let calculos = require('./modulo/calculos')

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)
                    if(montante){
                        console.log('O montante final é: ' + montante.toFixed(2))
                    }else{
                        console.log('ERRO: Devido a proplemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close
                    }
                    
                })
            })
        })
    })
})
