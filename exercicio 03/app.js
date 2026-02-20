/***************************************************
 * Objetivo: Criar um Sistema de matemática
 * Data: 13/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const readline = require('readline')

// Cria uma interface para entrada e saída de dados pelo terminal
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Pergunta inicial para definir a operação
entradaDeDados.question('Digite qual operação matemática você deseja realizar (somar, subtrair, dividir, multiplicar): ', function (operacao) {
    let numero = operacao
    
    // Import do arquivo de funções. Importamos aqui para ser usado em qualquer IF.
    var calculos = require('./modulo/calculos')

    // --- LÓGICA PARA SOMA ---
    if (numero.toLowerCase() == 'somar') {
        entradaDeDados.question('Digite o primeiro número que será somado:', function (soma) {
            let valor1 = soma
            entradaDeDados.question(`Digite le segundo número: `, function (soma2) {
                let valor2 = soma2

                let somar = calculos.calcularSoma(valor1, valor2)
                
                // Validação estrita: verifica se o resultado não é 'undefined' nem 'false'.
                // Isso permite que o número 0 (zero) seja exibido como um resultado válido.
                if (somar !== undefined && somar !== false) {
                    console.log(`O resultado da operação é: ${somar}`);
                    entradaDeDados.close() // Encerra o processo após exibir o resultado
                } else {
                    console.log('ERRO: Não foi possível realizar o cálculo. Verifique os valores inseridos.')
                    entradaDeDados.close()
                }
            })
        })

    // --- LÓGICA PARA SUBTRAÇÃO ---
    } else if (numero.toLowerCase() == 'subtrair') {
        entradaDeDados.question('Digite o primeiro número que será subtraído:', function (subtrair1) {
            let valor1 = subtrair1
            entradaDeDados.question(`Digite o segundo número: `, function (subtrair2) {
                let valor2 = subtrair2

                let subtrair = calculos.calcularSubtracao(valor1, valor2)
                
                // Checagem necessária para aceitar resultados = 0
                if (subtrair !== undefined && subtrair !== false) {
                    console.log(`O resultado da operação é: ${subtrair}`);
                    entradaDeDados.close()
                } else {
                    console.log('ERRO: Não foi possível realizar o cálculo. Verifique os valores inseridos.')
                    entradaDeDados.close()
                }
            })
        })

    // --- LÓGICA PARA DIVISÃO ---
    } else if (numero.toLowerCase() == 'dividir') {
        entradaDeDados.question('Digite o primeiro número que será dividido:', function (dividir1) {
            let valor1 = dividir1
            entradaDeDados.question(`Digite o segundo número: `, function (dividir2) {
                let valor2 = dividir2

                let dividir = calculos.calcularDivisao(valor1, valor2)
                
                // A validação aqui também protege contra a mensagem de erro no divisor zero
                if (dividir !== undefined && dividir !== false) {
                    console.log(`O resultado da operação é: ${dividir}`);
                    entradaDeDados.close()
                } else {
                    console.log('ERRO: Não foi possível realizar o cálculo. Verifique os valores inseridos.')
                    entradaDeDados.close()
                }
            })
        })

    // --- LÓGICA PARA MULTIPLICAÇÃO ---
    } else if (numero.toLowerCase() == 'multiplicar') {
        entradaDeDados.question('Digite o primeiro número que será multiplicado:', function (multiplicar1) {
            let valor1 = multiplicar1
            entradaDeDados.question(`Digite o segundo número: `, function (multiplicar2) {
                let valor2 = multiplicar2

                let multiplicar = calculos.calcularMultiplicacao(valor1, valor2)
                
                // Corrigido para aceitar multiplicar por 0 (ex: 5 * 0 = 0)
                if (multiplicar !== undefined && multiplicar !== false) {
                    console.log(`O resultado da operação é: ${multiplicar}`);
                    entradaDeDados.close()
                } else {
                    console.log('ERRO: Não foi possível realizar o cálculo. Verifique os valores inseridos.')
                    entradaDeDados.close()
                }
            })
        })

    // Caso o usuário digite uma operação que não existe
    } else {
        console.log('Erro: digite as palavras como foi informado na pergunta inicial')
        entradaDeDados.close() // Importante fechar aqui para não travar o terminal
    }
})