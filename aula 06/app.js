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

//Import da dependencia para criar API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

//Import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

// Inicializa uma nova aplicação Express
const app = express()

// Define as configurações do CORS (Cross-Origin Resource Sharing)
const corsOption = {
    // Permite que requisições venham de qualquer origem (o '*' é um coringa)
    origin: '*',
    
    
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // são os valores verbos que são liberados
    
    // Define quais cabeçalhos o cliente pode enviar na requisição
    allowedHeaders: ['content-type', 'Authorization'], 
}



app.post('/v1/senai/locadora/filme', bodyParserJSON , async function (req, res){

    

    let dados = req.body

    let contentType = req.headers['content-type']

    let result = await controllerFilme.inseirNovoFilme(dados,contentType)

    res.status(result.status_code).json(result)

})


app.use(cors(corsOption));
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`✅ API rodando na porta ${PORT} e aguardando novas requisições`);
});
