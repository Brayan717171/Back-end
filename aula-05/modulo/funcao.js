const estadosCidades = require('./estados_cidades');

const getListaDeEstados = function(){
    let listaUf = [];
    estadosCidades.estados.forEach(function(estado) {
        listaUf.push(estado.sigla);
    });
    return { uf: listaUf, quantidade: listaUf.length };
};

const getDadosEstado = function(uf){
    let dadosEstado = false;                                                     // ← false
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            dadosEstado = {                                                       // ← achou: vira objeto
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
            };
        }
    });
    return dadosEstado;
};

const getCapitalEstado = function(uf){
    let dadosCapital = false;                                                     // ← false
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            dadosCapital = {                                                       // ← achou: vira objeto
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital
            };
        }
    });
    return dadosCapital;
};

const getEstadosRegiao = function(regiao){
    let dadosRegiao = false;                                                      // ← false
    estadosCidades.estados.forEach(function(estado){
        if(estado.regiao.toLocaleUpperCase() == regiao.toLocaleUpperCase()){
            if(!dadosRegiao) dadosRegiao = { regiao: '', estados: [] };           // ← inicializa na primeira entrada
            dadosRegiao.regiao = estado.regiao;
            dadosRegiao.estados.push({ uf: estado.sigla, descricao: estado.nome });
        }
    });
    return dadosRegiao;
};

const getCapitalPais = function(){
    let dadosCapitalPais = false;                                                 // ← false
    estadosCidades.estados.forEach(function(estado){
        if(estado.capital_pais){
            if(!dadosCapitalPais) dadosCapitalPais = { capitais: [] };            // ← inicializa na primeira entrada
            dadosCapitalPais.capitais.push({
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capitais_pais_ano_fim: estado.capital_pais.ano_fim
            });
        }
    });
    return dadosCapitalPais;
};

const getCidades = function(uf){
    let dadosCidades = false;                                                     // ← false
    estadosCidades.estados.forEach(function(estado){
        if(estado.sigla.toLocaleUpperCase() == uf.toLocaleUpperCase()){
            let listaNomes = [];
            estado.cidades.forEach(function(item) {
                listaNomes.push(item.nome);
            });
            dadosCidades = {                                                       // ← achou: vira objeto
                uf: estado.sigla,
                descricao: estado.nome,
                quantidade_cidades: estado.cidades.length,
                cidades: listaNomes
            };
        }
    });
    return dadosCidades;
};

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
};