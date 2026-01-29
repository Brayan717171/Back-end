//solicitar nome, pedir 3 valores. exibir o nome do usuario e a soma dos valores

//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saida de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    
    entradaDeDados.question('Favor digitar primeiro numero: ', function(numero1){
        
        entradaDeDados.question('Favor digitar segundo numero: ', function(numero2){
        
            entradaDeDados.question('Favor digitar terceiro numero: ', function(numero3){
                
                
                console.log('-------------------------------------------')
                console.log(`Olá  ${nomeUsuario}`)
                console.log(`A soma dos numeros são:  ${Number(numero1) + Number(numero2) + Number(numero3)} `)
                console.log('-------------------------------------------')
        
            })
        })
    })
})



