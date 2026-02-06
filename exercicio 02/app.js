// Importação de módulos e configuração da interface de entrada pelo terminal
const { log } = require('console')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Inicio (Entrada de Dados)
entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    let nome = nomeUsuario
    
    // Validação básica: verifica se está vazio ou se é apenas um número
    if(nome == ''){
        console.log('ERRO: é obrigatório o preenchimento do nome !!!')
        entradaDeDados.close()
    }else if(!isNaN(nome)){
        console.log('ERRO: é obrigatório o preenchimento do nome com letras !!!')
        entradaDeDados.close()
    }

    entradaDeDados.question('Favor digitar o Nome do produto:', function(nomeProduto){
        let produto = nomeProduto
        if(produto== ''){
            console.log('ERRO: é obrigatório o preenchimento do nome do produto !!!')
            entradaDeDados.close()
        }else if(!isNaN(produto)){
            console.log('ERRO: é obrigatório o preenchimento do nome do produto com letras !!!')
            entradaDeDados.close()
        }

        entradaDeDados.question('Favor insira o Valor do produto:', function(valorProduto){
            let valor = valorProduto
            if(valor == ''){
                console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                entradaDeDados.close()
            }else if(isNaN(valor)){
                console.log('ERRO: Não é possivel calcular com letras no valor do produto!!!')
                entradaDeDados.close()
            }

            entradaDeDados.question('Favor insira a taxa de juros do produto:', function(taxaJuros){
                let taxa = taxaJuros
                if(taxa ==''){
                    console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                    entradaDeDados.close()
                }else if(isNaN(taxa)){
                    console.log('ERRO: Não é possivel calcular com letras no valor do produto!!!')
                    entradaDeDados.close()
                }else if(taxa > 100 || taxa < 0 ){
                    console.log('ERRO: a taxa devem ser entre 0 e 100')
                }

                // Escolha do modo de cálculo (Mensal ou Anual)
                entradaDeDados.question('Digite 1 para forma de pagamento em MESES ou 2 para pagamento em ANOS: ', function(pagamento){
                    if(pagamento == ''){
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                        entradaDeDados.close()
                    }else if(isNaN(pagamento)){
                        console.log('ERRO: Não é possivel calcular com letras!!!')
                        entradaDeDados.close()
                    }

                    //LÓGICA PARA PAGAMENTO EM MESES
                    if(pagamento == '1'){
                        entradaDeDados.question('Favor insira o tempo de pagamento em Meses:', function(tempoPagamento){
                            let parcelas = tempoPagamento
                            if(parcelas ==''){
                                console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                                entradaDeDados.close()
                            }else if(isNaN(parcelas)){
                                console.log('ERRO: Não é possivel calcular com letras!!!')
                                entradaDeDados.close()
                            }else{
                                // Cálculo de Juros Compostos: M = P * (1 + i)^n
                                let calculoTaxa = taxaJuros / 100
                                let montante = valor * (1 + calculoTaxa) ** parcelas 
                                let valorAcrecimo = montante - valor

                                // Exibição do Recibo para o usuário
                                console.log('')
                                console.log('******************* Viva Moda *******************') 
                                console.log('')
                                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}. `)
                                console.log(`A compra do produto ${produto}, tem um valor de: ${valor}.`)
                                console.log(`A sua compra será parcelada em ${parcelas} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.`)
                                console.log(`O acréscimo realizado ao valor de: ${valor} será de ${valorAcrecimo.toFixed(2)}. `)
                                console.log( `Muito obrigado por escolher a Viva Moda.`)
                                console.log('')
                                console.log(`*******************************************************`)
                                entradaDeDados.close()
                            }
                        })
                        
                    //LÓGICA PARA PAGAMENTO EM ANOS 
                    }else if(pagamento == '2'){
                        entradaDeDados.question('Favor insira o tempo de pagamento em Anos:', function(tempoPagamentoAnos){
                            
                            if(tempoPagamentoAnos ==''){
                                console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                                entradaDeDados.close()
                            }else if(isNaN(tempoPagamentoAnos)){
                                console.log('ERRO: Não é possivel calcular com letras no valor do produto!!!')
                                entradaDeDados.close()
                            }else{
                                let anos = tempoPagamentoAnos

                                //Conversão do período de anos para meses
                                anos = anos * 12 

                                // Cálculo do montante usando a função Math.pow
                                let montanteFinal = valor * (Math.pow((1 + (taxa/100)), anos))

                                // Exibição dos resultados formatados
                                console.log('')
                                console.log('********************** Viva Moda ***********************')
                                console.log('')
                                console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`)
                                console.log(`A compra do produto ${produto}, tem um valor de: R$${valor}.`)
                                console.log(`A sua compra será parcelada em ${tempoPagamentoAnos} anos e o Sr(a) pagará: R$${(montanteFinal/anos).toFixed(2)} por mês.`)
                                console.log(`O acréscimo realizado ao valor de: R$${(valor)} será de R$${(montanteFinal - valor).toFixed(2)}.`)
                                console.log('')
                                console.log('Muito obrigado por escolher a Viva Moda.')
                                console.log('*************************************************************')
                                entradaDeDados.close()
                            } 
                        })
                    }
                })
            })
        })
    })
})