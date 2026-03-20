/***************************************************
 * Objetivo: Manipular dados usando array e json
 * Data: 18/03/2026
 * Autor: Brayan
 * versão: 1.0
 ***************************************************/

const estadosCidades = require('./estados_cidades');

// Aqui pegamos a lista com todas as siglas dos estados e quantos são no total
const getListaDeEstados = function(){
    
    // começamos como false, se achar algo vira true
    let status = false
    // aqui vamos guardar todas as siglas que formos encontrando
    let listaUf = []

    // passando por cada estado para pegar sua sigla
    estadosCidades.estados.forEach(function(estado) {
        listaUf.push(estado.sigla)
        status = true
    })

    console.log(`Status: ${status}`)


    return {
        uf: listaUf,
        quantidade: listaUf.length
    }
}

// Aqui buscamos todas as informações de um estado pelo sua sigla
// exemplo: passando 'SP' vai retornar tudo sobre São Paulo
const getDadosEstado = function(uf){

    
    // começamos como false, se achar o estado vira true
    let status = false
    // caixa vazia que vai receber os dados do estado quando acharmos
    let dadosEstado = {}

    // procurando o estado que tem a mesma sigla que foi passada
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            status = true
            //agora preenchemos com os dados do estado
            dadosEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
            }
        }
    })

    console.log(`Status: ${status}`)
    //Exibe todos os dados inseridos no objeto dadosEstados
    return dadosEstado
}

// Aqui buscamos apenas a capital de um estado pela sua sigla
const getCapitalEstado = function(uf){

    // começamos como false, se achar o estado vira true
    let status = false
    // caixa vazia que vai receber os dados quando acharmos o estado
    let dadosCapital = {}
    
    // procurando o estado pela sigla para pegar sua capital
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            status = true
            //Pegando todos os dados necessários
            dadosCapital = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital
            }
        }
    })

    console.log(`Status: ${status}`)
    return dadosCapital
}

// Aqui buscamos todos os estados que pertencem a uma região
// exemplo: passando 'Sul' vai retornar PR, SC e RS
const getEstadosRegiao = function(regiao){

    // começamos como false, se achar algum estado da região vira true
    let status = false
    let dadosRegiao = {
        regiao: '',   // nome da região que vamos preencher
        estados: []   // lista que vai crescendo conforme achamos os estados da região
    }

    // procurando todos os estados que pertencem a essa região
    estadosCidades.estados.forEach(function(estado){
        if(estado.regiao.toLocaleUpperCase() == regiao.toLocaleUpperCase()){
            status = true
            dadosRegiao.regiao = estado.regiao
            // cada estado encontrado vai sendo adicionado na lista
            dadosRegiao.estados.push({
                uf: estado.sigla,
                descricao: estado.nome
            })
        }
    })

    console.log(`Status: ${status}`)
    return dadosRegiao
}

// Aqui buscamos os estados que já foram ou ainda são capital do Brasil
const getCapitalPais = function(){

    // começamos como false, se achar alguma capital vira true
    let status = false
    let dadosCapitalPais = {
        // lista que vai receber todos os estados que já foram capital
        capitais: []
    }

    // verificamos se o estado tem a propriedade capital_pais
    // só RJ, BA e DF possuem essa propriedade no JSON
    estadosCidades.estados.forEach(function(estado){
        if(estado.capital_pais){
            status = true
    
            dadosCapitalPais.capitais.push({
                capital_atual: estado.capital_pais.capital,  // ainda é capital? true ou false
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,  // quando virou capital
                capitais_pais_ano_fim: estado.capital_pais.ano_fim        // quando deixou de ser
            })
        }
    })

    console.log(`Status: ${status}`)
    return dadosCapitalPais
}

// Aqui buscamos todas as cidades de um estado pela sua sigla
// exemplo: passando 'SP' vai retornar todas as cidades de São Paulo
const getCidades = function(uf){
    
    
    // começamos como false, se achar o estado vira true
    let status = false
    let dadosCidades = {
        // lista vazia que vai receber as cidades do estado
        cidades: []
    }
    let listaNomes = [];


    // procurando o estado pela sigla para pegar suas cidades
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            status = true

            estado.cidades.forEach(function(item) {
                listaNomes.push(item.nome); // Pegamos só a string do nome
            });
            
            dadosCidades = {
                uf: estado.sigla,
                descricao: estado.nome,
                quantidade_cidades: estado.cidades.length,
                cidades: listaNomes // Agora passamos a lista preenchida
            }
        
        }
    })

    console.log(`Status: ${status}`)
    return dadosCidades
}

// testando todas as funções
console.log(getListaDeEstados())
console.log(getDadosEstado('sp'))
console.log(getCapitalEstado('RN'))
console.log(getEstadosRegiao('Sul'))
console.log(getCapitalPais())
console.log(getCidades('ms'))