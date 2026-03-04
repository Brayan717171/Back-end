/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação CALCULOS
 * Data: 27/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const tratativa = require('./tratativa')


const calcularImc = function(valorPeso, valorAltura){
    let peso = Number(tratativa.formatar(valorPeso));
    let altura = Number(tratativa.formatar(valorAltura));
    

    let imc = peso / (altura * altura);

    let resultado = imc

    return Number (resultado.toFixed(1))
    
}


const calcularMedia = function(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    return Number(media.toFixed(1));
    
    

   
}
/**
 * Função para calcular a Média Final (Pós Exame)
 */
const calcularMediaExame = function(mediaAnterior, notaExame) {
    
    

    let nota = Number(tratativa.formatar(notaExame));
    let mediaAnt = Number(mediaAnterior);
    
    let resultadoExame = (mediaAnt + nota) / 2;
    
    return Number(resultadoExame.toFixed(1));
};

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    calcularImc,
    calcularMedia,
    calcularMediaExame
};



