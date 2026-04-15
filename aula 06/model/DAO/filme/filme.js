/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de Dados MYSQL na tabela
 *              Filme
 * Data: 15/ 04/ 2026
 * Autor: Brayan
 * Verão: 1.0
 **************************************************************************************************************************************************************************/
//Import da biblioteca para gerenciar o banco de dados Mysql no node.js
const knex = require('knex')
//Import de arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knexFile')


//Criar a conexão com o banco de dados Mysql
const knexConex = knex(knexConfig.development)


// Instalações:
// * 
// * npm install express --save
// * npm install cors --save
// * 
// * npm install knex --save : biblioteca p/ se conectar com o banco de dados, existem várias dependencias e ele é uma delas.
// * outras bibliotecas que se conectam com o BD: 
// * 
// * Sequelize (mais básico e antigo, prof recomendou evitar o uso)
// * Prisma (é bom, porém está instavével)
// * Knex
// * Tudo depende do BD que vc está utilizando.



// //Função para inserir dados na tabela de filme


const incertFilme = async function(filme){
    let sql = `
    insert into tbl_filme (
        nome,
        data_lancamento,
        duracao, 
        sinopse, 
        avaliacao, 
        valor, 
        capa
        )
    values (
        '${filme.nome}',
        '${filme.data_lancamento}',
        '${filme.duracao}',
        '${filme.sinopse}',
        '${filme.avaliacao}', 
        '${filme.valor}',
        '${filme.capa}'
        );`

    //Executar o ScriptSql no banco de dados
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){

}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function(){

}

//Função para retornar os dados do filme filrando pelo id
const selectByIdFilme = async function(id){

}


//Funcão para excluir o filme pelo id
const deleteFilme = async function(id){

}

module.exports = {
    incertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme,
}