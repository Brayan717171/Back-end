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



const listaDeNome = ['José', 'Maria', 'João', 'André', 'Alex' ]
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
    listaDeFornecedores.push('Luizinho da Silva')
    listaDeFornecedores.push('André da Silva')
    console.log(listaDeFornecedores)

    
    //Permite adicionar novos elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.log(listaDeFornecedores)

    //Permite remover elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do INICIO da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //Splice() -> Permite remover um elemento baseado no indice da lista 
        // splice(indice, quantidade de elementos)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    //Splice() -> Permite Adicionar um novo elemento em um determinado lugar do array (indice)
                    // Indice 0 -> significa que não será removido ninguem, Novo conteúdo
    listaDeFornecedores.splice(1,0,'Carlos da silva')
    console.table(listaDeFornecedores)
}


const removerItem = function(nome){

//Retorna o indice de um elemento fazendo a busca pelo valor
let indice = listaDeNome.indexOf(nome)
if(indice != -1){
    listaDeNome.splice(indice, 1 )
    return true
}else{
    return false
}

    // for(indice in listaDeNome){
    //     if (listaDeNome[indice] == nome) {
    //         listaDeNome.splice(indice,1)
            
    //     }
    // }

}



const verificarItem = function(nome){

    //Verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNome.includes(nome)
    
}


const quantidadeItens = function(nome){
    let cont = 0


    listaDeNome.forEach(function(item){      
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
    })
    return cont



}
const criandoDadosJSON = function(){
    let aluno = {
                 "nome": "José", 
                 "ra": 123456,
                 "telefone": "9757574414", 
                 "email": "jose@gmail.com" 
                }

    //Exibindo o objeto JSON completo
    console.log(aluno)

    //Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)
    
    //Adiciona um novo atributo no JSON
    aluno.sexo = 'Masculino'
    console.log(aluno)

    delete aluno.telefone
    console.log(aluno)

}

const cadastroDeProdutos = function (){

    let cores = [
        { "id": 1,  "cor": "Branco"   }, //Indice 0
        { "id": 2,  "cor": "Preto"    }, //Indice 1
        { "id": 3,  "cor": "Azul"     }, //Indice 2
        { "id": 4,  "cor": "Rosa"     }, //Indice 3
        { "id": 5,  "cor": "Cinza"    }, //Indice 4
       
    ]

    let marcas = [
        { "id": 1, "modelo": "Dell",       "telefone": "(11) 4004-0100", "email": "suporte@dell.com" },       // Indice 0
        { "id": 2, "modelo": "LG",         "telefone": "(11) 4004-5400", "email": "suporte@lg.com" },         // Indice 1
        { "id": 3, "modelo": "Lenovo",     "telefone": "(11) 4004-4717", "email": "suporte@lenovo.com" },     // Indice 2
        { "id": 4, "modelo": "Apple",      "telefone": "(11) 4004-1779", "email": "suporte@apple.com" },      // Indice 3
        { "id": 5, "modelo": "Razer",      "telefone": "(11) 4004-7293", "email": "suporte@razer.com" },      // Indice 4
        { "id": 6, "modelo": "Logitech",   "telefone": "(11) 4004-5644", "email": "suporte@logitech.com" },   // Indice 5
        { "id": 7, "modelo": "Multilaser", "telefone": "(11) 4004-6588", "email": "suporte@multilaser.com" }, // Indice 6
    ]

    let produtos = [
        {
            "id": 1,
            "nome": "Monitor",
            "descricao": "27 polegadas",
            "marca": [marcas[1]],  
            "quantidade": 20,
            "cor": [cores[4], cores[1]],
            "valor": 800.50
        },
        {
            "id": 2,
            "nome": "Teclado",
            "descricao": "Mecânico RGB",
            "marca": [marcas[5]],   
            "quantidade": 200,
            "cor": [cores[0], cores[1]],
            "valor": 350.00
        },
        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Sem fio 1600 DPI",
            "marca": [marcas[0], marcas[1], marcas[5]], 
            "quantidade": 500,
            "cor": [cores[0], cores[1], cores[4]],
            "valor": 180.00
        },
    ]

    produtos.forEach(function(produto) {
        console.log(`Produto: ${produto.nome}`)
        console.log(`Quantidade: ${produto.quantidade}`)
        console.log(`Valor: ${produto.valor}`)

        produto.cor.forEach(function(c) {
            console.log(`Cor: ${c.cor}`)
        })

        produto.marca.forEach(function(m) {
            console.log(`Modelo: ${m.modelo}`)
        })
    
    })
    // console.log(cores)
    //console.table(cores)     

    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log(`A cor do produto é: ${nomeCor.cor}`)
    // })
    // // console.log(cores[2].nome)
    //console.table(produtos)
    // console.log(produtos[0].cor[1].cor)
    
}   









//exibirDados()
//manipularDados()
//console.table(listaDeNome)

// let resposta = removerItem('asda')
// if(resposta)
//  console.log('itens removido com sucesso')
//
// else
//  console.log('Não foram encontrados itens para ser removido')


//console.log(quantidadeItens('José'))

//criandoDadosJSON()
cadastroDeProdutos()
