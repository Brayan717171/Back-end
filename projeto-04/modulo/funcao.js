/***************************************************
 * Objetivo: Manipular dados usando array e json
 * Data: 18/03/2026
 * Autor: Brayan
 * versão: 1.0
 ***************************************************/


const estadosCidades = require('./estados_cidades');

const getListaDeEstados = function(){

    
    let listaUf = []

    estadosCidades.estados.forEach(function(estado) {
        listaUf.push(estado.sigla)
        
    })


    return {

        uf: listaUf,
        quantidade: listaUf.length
    }
}

const getDadosEstado = function(){
    let uf = 'SP'

    estadosCidades.estados.forEach(function(estado){
        
        // Compara a cor do produto com a cor pesquisada (ignorando maiúsculas/minúsculas)
        if(String(estado.cidades).toLocaleUpperCase() == String(uf).toLocaleUpperCase()){
            
            // Exibe o produto completo caso a cor seja encontrada
            console.log(estado)

           
        }
    })
    
}

const getCapitalEstado = function(){
    
}

const getCapitalPais = function(){
    
}

const getCidades = function(){
    
}
//console.log(getListaDeEstados())

console.log(getDadosEstado())