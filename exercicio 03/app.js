/***************************************************
 * Objetivo: Criar um Sistema de matemática
 * Data: 13/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const readline = require('readline')

//Cria uma interface para entrada e saida de dados pelo terminal
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})  

entradaDeDados.question('Digite qual operação matemática voçê deseja realizar(somar, subtrair, dividir, multiplicar): ', function (operacao){
    let numero = operacao

    if( numero.toLowerCase() == 'somar'){
        entradaDeDados.question('Digite o primeiro número que será somado:', function (soma){
            let valor1 = soma

            entradaDeDados.question(`Digite o segundo número: `, function (soma2){
                let valor2 = soma2

                //Import da biblioteca que realiza calculos financeiros
                let calculos = require('./modulo/calculos')

                let somar = calculos.calcularSoma(valor1, valor2)
                if(somar){
                    console.log('A soma final é: ' + somar)
                }else{
                    console.log('ERRO: Devido a problemas no calculo, o programa encerrou.')
                    entradaDeDados.close
                }
                
            })
        })
    }else if(numero.toLowerCase() == 'subtrair'){
        entradaDeDados.question('Digite o primeiro número que será subtraído:', function (subtrair1){
            let valor1 = subtrair1

            entradaDeDados.question(`Digite o segundo número: `, function (subtrair2){
                let valor2 = subtrair2

                //Import da biblioteca que realiza calculos financeiros
                let calculos = require('./modulo/calculos')

                let subtrair = calculos.calcularSubtracao(valor1, valor2)
                if(subtrair){
                    console.log('A subtração final é: ' + subtrair)
                }else{
                    console.log('ERRO: Devido a problemas no calculo, o programa encerrou.')
                    entradaDeDados.close
                }
            })
        })
    }else if(numero.toLowerCase() == 'dividir'){
        entradaDeDados.question('Digite o primeiro número que será dividido:', function (dividir1){
            let valor1 = dividir1

            entradaDeDados.question(`Digite o segundo número: `, function (dividir2){
                let valor2 = dividir2

                 //Import da biblioteca que realiza calculos financeiros
                 let calculos = require('./modulo/calculos')

                 let dividir = calculos.calcularDivisao(valor1, valor2)
                 if(dividir){
                     console.log('A Divisão final é: ' + dividir)
                 }else{
                     console.log('ERRO: Devido a problemas no calculo, o programa encerrou.')
                     entradaDeDados.close
                 }

            })
        })
    }else if(numero.toLowerCase() == 'multiplicar'){
        entradaDeDados.question('Digite o primeiro número que será multiplicado:', function (multiplicar1){
            let valor1 = multiplicar1

            entradaDeDados.question(`Digite o segundo número: `, function (multiplicar2){
                let valor2 = multiplicar2

                //Import da biblioteca que realiza calculos financeiros
                let calculos = require('./modulo/calculos')

                let multiplicar = calculos.calcularMultiplicacao(valor1, valor2)
                if(multiplicar){
                    console.log('A Divisão final é: ' + multiplicar)
                }else{
                    console.log('ERRO: Devido a problemas no calculo, o programa encerrou.')
                    entradaDeDados.close
                }
            })
        })
    }else{
        console.log('Erro: digite as palavras como foi informado na pergunta inicial')
    }
})