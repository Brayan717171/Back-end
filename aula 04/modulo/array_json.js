/***************************************************
 * Objetivo: Manipular dados usando array e json
 * Data: 05/03/2026
 * Autor: Brayan
 * versão: 1.0
 ***************************************************/


/*

    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> é um objeto na memória que permite trabalhar com vários valores em um único objeto

        let nome    = José

        let nome2   = Maria

        let nome3   = João


                indice   0        1       2
        let nome    =   ['José', 'Maria', 'João']

    JSON -> é um objeto na memória que permite trabalhar com chave e valor

    let nome        ='José'
    let telefone    ='123456789'
    let email       ='jose@gmail.com'

    let nome = {"nome": "José",
                "telefone": "123456789", 
                "email": "jose@gmail.com" 
                }
*/



const listaDeNome = ['José', 'Maria', 'João', 'André', 'Alex']
const listaDeClientes = []
const listaDeFornecedores = []



const exibirDados = function(){

    //Exibe o objeto array e seu conteúdo
    console.log(listaDeNome)

    //Exibeo objeto array em tabela com seus indices
    console.table(listaDeNome)
    
    //Exibe apernas o valor do respectivo indice
    console.table(listaDeNome[0])

    //Retorna o tipo de dados de um indice array
    console.log(typeof(listaDeNome[4]))

    console.log(`O nome do cliente é ${listaDeNome[0]}`)
    console.log(`O nome do cliente é ${listaDeNome[1]}`)
    console.log(`O nome do cliente é ${listaDeNome[2]}`)
    console.log(`O nome do cliente é ${listaDeNome[3]}`)
    console.log(`O nome do cliente é ${listaDeNome[4]}`)


    //Estrutura de Repetição
    
    console.log('******** WHILE ********')
    let cont = 0 
    while (cont < listaDeNome.length) {
        console.log(`O nome do cliente é ${listaDeNome[cont]}`)
        cont++
    }
     
    console.log('******** FOR ********')

    for (let contador = 0; contador < listaDeNome.length ; contador++) {
        console.log(`O nome do cliente é ${listaDeNome[contador]}`)
        
    }

    //Retorna o conteúdo de cada elemento através de uma CALL BACK
    console.log('******** FOR EACH ********')
    listaDeNome.forEach(function(cliente) {
        console.log(`O nome do cliente é ${cliente}`)
    });


    //Retorna o indice do elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaDeNome[item]
    //Praticamante igual a FOR e WHILE
    console.log('******** FOR IN ********')
    for(item in listaDeNome){
        console.log(`O nome do cliente é ${listaDeNome[item]}`)
    }

    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido
    //Com ForEach
    console.log('******** FOR OF ********')
    for (cliente of listaDeNome) {
        console.log(`O nome do cliente é ${cliente}`)
    }


    console.log(listaDeNome.length)

}

const manipularDados = function(){
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'


    console.log(listaDeClientes)

    //Permite adicionar novos valores no array, sempre npo final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    console.log(listaDeFornecedores)
}

manipularDados()