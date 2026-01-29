
//Imprime o terminal o conteúdo
console.log('Testando o print do console')

//Permite criar variavel
var nome = 'Brayan'

console.log(nome)
//Fomas de concaternar variaveis e texto
console.log('O nome do usuário é: '+nome)
console.log(`O nome do usuário é: ${nome}`)

//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saida de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//função para retornar o nome digitado no terminal
    //O método question chama sua digitação chama a sua função "CALL BACK"
    //Para entregar o que foi digitado no terminal, através do argumento
    ///nomeUsuario
entradaDeDados.question('Favor digitar o seu nome:', function(nomeUsuario){
    console.log('O nome do usuário é ' + nomeUsuario)
    //Entrada de dados para Email
    entradaDeDados.question('Favor digitar o seu email:', function(emailUsuario){
        console.log(`O email informado é: ${emailUsuario}`)
    })
})


