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

                    //let percentual = Number(taxaCompra) / 100
                    //let = montante = Number(capitalProduto) * ((1+Number(percentual)) ** Number(tempoPagamento))

                    let montante = calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)
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

//Criando uma função ara calcular o valor da compra parcelado
//Método tradicional de criar uma função

function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variaveis locais
    //As variáveis (valor, taxa, tempo são numéricas por conta da conversão)
    //Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda serão String)
    let valor = Number(valorCompra)
    let taxa =Number (taxaJuros)
    let tempo = Number (tempoPagto)


    //valídação para enradas vazias ou de caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra || tempoPagto == '' || isNaN(tempoPagto))){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')
        return false
    }else{
        //chama a função para converter o numero em percentual
    let percentual = calcularPercentual(taxa)

    //Válidação para o erro do percentual na função calcularPercentual()
    if(percentual){
        let montante = valor * ((1+percentual)**tempo)
        return Number (montante.toFixed(2))
    }else{
        console.log('ERRO: Valor da taxa está incorreto.')
        return false
    }
    
    }
}

function calcularPercentual(numero){
    let numeroPercentual = Number(numero)


    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false // não pode processar
    }else{
        //Procedimento do calculo do perentual
        let percentual = numeroPercentual / 100
        return  Number(percentual.toFixed(2))
    }

    
}