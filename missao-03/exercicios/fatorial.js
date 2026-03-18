/***************************************************
 * Objetivo: Arquivo principal para cálculo de Fatorial
 * Data: 04/03/2026
 * Autor: Brayan
 ***************************************************/

const calculos = require('./modulo/calculos');
const tratativa = require('./modulo/tratativa');
const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite um número para calcular o fatorial: ', function(valorDigitado) {
    
    // 1 Validar a entrada (vazio, caracteres, 0 e 1)
    if (tratativa.validarFatorial(valorDigitado) || tratativa.validarDados(valorDigitado)) {
        
        // 2 Se for válido, chamar a função que faz o cálculo
        calculos.calcularFatorial(valorDigitado);
    }

    // Fecha a entrada de dados
    entradaDeDados.close();
});