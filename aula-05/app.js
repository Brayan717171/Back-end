/***************************************************
 * Objetivo: Arquivo responsável pela criação da API do projetos de Estados e Cidades
 * Data: 1/04/2026
 * Autor: Brayan
 * Versão: 1.0 (adaptado para API)
 * 
 * Instalação do EXPRESS - npm install express --save
 *  Dependencia responsavel pela utilização do protocolo HTTP  para 
 *  Criar uma API
 * 
 * Instalação do CORS - npm install cors --save
 *  Dependencia responsavel pela configuração a serem realizadas 
 *  para permissao de acesso a API
 * 
 * 
 ***************************************************/

//Import da dependencisa para criar API
const express   = require('express')
const cors  = require('cors')

const funcoes = require ('./modulo/funcao')

//Criando um objeto para manipular o express
const app = express()


//Conjunto de permissões a serem aplicadas no CORS da API
const corsOption = {
    origin: ['*'], // A origem da requisição, podendo ser um IP ou * (Todos)
    methods: 'GET', // São os verbos que serão liberados ma API(GET, PUT, POST, DELETE)
    allowedHeadres: ['content-type', 'Autorization'], //São permissoes de cabeçalho do CORS
}

//Response -> Retorno da PI

//Request -> São chegadas de dados API

//Configura as permissões da API através do CORS
app.use(cors(corsOption));

app.get('/v1/brasil/estados', function (req, res) {
    let estados = funcoes.getListaDeEstados()
    res.json(estados)
    res.status(200)
    

})

app.get('/v1/brasil/dados/estado/:uf', function (req, res) {
    let sigla = req.params.uf
    let estados = funcoes.getDadosEstado(sigla)
    res.json(estados)
    res.status(200)
    
    

})


app.get('/estados/:uf', (req, res) => {
    
     res.status(200)

});

//Serve para imicializar a API e receber as requizições
app.listen(8080, function(){
    console.log(`✅ API rodando e aguardando novas reuqisicões`);
})