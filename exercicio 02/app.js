const { log } = require('console')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
   
    entradaDeDados.question('Favor digitar o nome do produto:', function(nomeProduto){
       
        entradaDeDados.question('Favor insira a taxa de juros do produto:', function(taxaJuros){
            
            entradaDeDados.question('Favor insira o tempo de pagamento:', function(tempoPagamento){
                
                if(nomeUsuario == '' || nomeProduto==''|| taxaJuros ==''||  tempoPagamento ==''){
                    console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                }else if(isNaN(taxaJuros)  || isNaN(tempoPagamento)  ){

                    console.log('ERRO: Não é possivel calcular a média com as letras nas notas dos aluno!!"!')

                }
                
                let calculoTaxa = taxaJuros / 100
                console.log(`A taxa é ${calculoTaxa}`)
                

            })
        })
    })
})