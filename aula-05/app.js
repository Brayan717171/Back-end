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
const funcoes = require('./modulo/funcao')

// Inicializa uma nova aplicação Express
const app = express()

// Define as configurações do CORS (Cross-Origin Resource Sharing)
const corsOption = {
    // Permite que requisições venham de qualquer origem (o '*' é um coringa)
    origin: ['*'], 
    
    // Restringe o acesso apenas ao método HTTP GET
    methods: 'GET', 
    
    // Define quais cabeçalhos o cliente pode enviar na requisição
    allowedHeaders: ['content-type', 'Authorization'], 
}


app.use(cors(corsOption));


// ============================================================
// ROTA 1 — Dados completos de um estado pela sigla
// GET /v1/brasil/dados/estado/:uf
// Exemplo: http://localhost:8080/v1/brasil/dados/estado/sp
// ============================================================
app.get('/v1/brasil/dados/estado/:uf', function (req, res) {
    let { uf } = req.params
    let estados = funcoes.getDadosEstado(uf)

    if (estados) {
        res.status(200).json(estados)
    } else {
        res.status(404).json({ erro: `Estado '${uf}' não encontrado.` })
    }
})

// ============================================================
// ROTA 2 — Capital de um estado pela sigla
// GET /v1/brasil/capital/estado/:uf
// Exemplo: http://localhost:8080/v1/brasil/capital/estado/AL
// ============================================================
app.get('/v1/brasil/capital/estado/:uf', (req, res) => {
    let { uf } = req.params
    let capital = funcoes.getCapitalEstado(uf)

    if (capital) {
        res.status(200).json(capital)
    } else {
        res.status(404).json({ erro: `Capital do estado '${uf}' não encontrada.` })
    }
});

// ============================================================
// ROTA 3 — Estados que já foram capital do Brasil
// GET /v1/brasil/estados/capital/brasil
// Exemplo: http://localhost:8080/v1/brasil/estados/capital/brasil
// ============================================================
app.get('/v1/brasil/estados/capital/brasil', (req, res) => {
    let capitais = funcoes.getCapitalPais()

    if (capitais) {
        res.status(200).json(capitais)
    } else {
        res.status(404).json({ erro: `Nenhuma capital encontrada.` })
    }
});

// ============================================================
// ROTA 4 — Estados de uma região
// GET /v1/brasil/estados/regiao/:regiao
// Exemplo: http://localhost:8080/v1/brasil/estados/regiao/Sul
// ============================================================
app.get('/v1/brasil/estados/regiao/:regiao', (req, res) => {
    const { regiao } = req.params
    const estados = funcoes.getEstadosRegiao(regiao)

    if (estados) {
        res.status(200).json(estados)
    } else {
        res.status(404).json({ erro: `Região '${regiao}' não encontrada.` })
    }
});

// ============================================================
// ROTA 5 — Cidades de um estado pela sigla
// GET /v1/brasil/cidades/estado/:uf
// Exemplo: http://localhost:8080/v1/brasil/cidades/estado/MS
// ============================================================
app.get('/v1/brasil/cidades/estado/:uf', (req, res) => {
    const { uf } = req.params
    const cidades = funcoes.getCidades(uf)

    if (cidades) {
        res.status(200).json(cidades)
    } else {
        res.status(404).json({ erro: `Estado '${uf}' não encontrado.` })
    }
});

// ============================================================
// ROTA 6 — Lista todas as siglas dos estados
// GET /v1/brasil/estados
// Exemplo: http://localhost:8080/v1/brasil/estados
// ============================================================
app.get('/v1/brasil/estados', function (req, res) {
    let estados = funcoes.getListaDeEstados()
    res.status(200).json(estados)
})


// ============================================================
// ROTA 6 — Documentação de end-points
// GET /v1/brasil/doc
// Exemplo: http://localhost:8080/v1/brasil/doc
// ============================================================
app.get('/v1/brasil/doc', function (req, res) {
    let docAPI = {
        "API-description": "API para manipular dados de Estados e Cidades",
        "date": "2026-04-02",
        "Development": "Brayan",
        "Version": "1.0",
        "Endpoints": [
            {   
                "id": 1,
                "rota 1": "/v1/brasil/estados",
                "obs": "Retorna a lista de todos os Estados"
            },
            {
                "id": 2,
                "rota 2": "/v1/brasil/dados/estado/sp",
                "obs": "Retorna os dados do estado filtrando pela sigla do estado"
            },
            {
                "id": 3,
                "rota 3": "/v1/brasil/capital/estado/sp",
                "obs": "Retorna os dados da capital filtrando pela sigla do estado"
            },
            {
                "id": 4,
                "rota 4": "/v1/brasil/estados/capital/brasil",
                "obs": "Retorna todos os estados que foram capital do brasil"
            },
            {
                "id": 5,
                "rota 5": "/v1/brasil/estados/regiao/Sul",
                "obs": "Retorna todos os estados referente a uma regiao"
            },
            {
                "id": 6,
                "rota 6": "/v1/brasil/cidades/estado/sp",
                "obs": "Retorna todas as cidades filtrando pela sigla do estado"
            },
            
        ]
    }
    res.status(200)
    res.json(docAPI)
})



app.listen(8080, function(){
    console.log(`✅ API rodando e aguardando novas requisições`);
})