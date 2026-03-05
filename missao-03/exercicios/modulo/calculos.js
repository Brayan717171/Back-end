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
const gerarSequencia = function(valor1, valor2) {
    let inicial = Number(tratativa.formatar(valor1));
    let final = Number(tratativa.formatar(valor2));
    
    

    // Se o inicial for menor, a ordem natural é seguida
    if (inicial < final) {
        comeco = inicial;
        fim = final;
    } else {
        
        comeco = final;
        fim = inicial;
    }
    

        // Variáveis para contar as ocorrências
    let totalPares = 0;
    let totalImpares = 0;

    // --- Bloco de Pares ---
    console.log("\nLista de números Pares");
    for (let i = comeco; i <= fim; i++) {
        if (i % 2 === 0) {
            console.log(i);
            totalPares++; // Incrementa o contador
        }
    }
    console.log("Qtde de números encontrados: " + totalPares);

   
    console.log("\nLista de números Impares");
    for (let i = comeco; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            totalImpares++; // Incrementa o contador
        }
    }
    console.log("Qtde de números encontrados: " + totalImpares);
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
 * Função para calcular a Média Final (Exame)
 */
const calcularMediaExame = function(mediaAnterior, notaExame) {
    
    

    let nota = Number(tratativa.formatar(notaExame));
    let mediaAnt = Number(mediaAnterior);
    
    let resultadoExame = (mediaAnt + nota) / 2;
    
    return Number(resultadoExame.toFixed(1));
}


//Função para impromir tabuada
const gerarTabuada = function(inicial, final, contInicial1, contFinal2){
    let tabInicial = Number(inicial)
    let tabFinal = Number(final)
    let contInicial =  Number(contInicial1)
    let contFinal=  Number(contFinal2)

    let tabAtual = tabInicial

    while (tabAtual <= tabFinal) {
        console.log(`\nTabuada do [${tabAtual}]`);

        
        let cont = contInicial; 
        while (cont <= contFinal) {
            let resultado = tabAtual * cont;
            console.log(`${tabAtual} x ${cont} = ${resultado}`);
            
            cont++; // Incrementa o contador 
        }

        tabAtual++; 
    }
    

}
const calcularFatorial = function(valorNumero) {
    let numero = Number(valorNumero);
    
    let resultado = 1;
    let memoriaCalculo = ""; // Para exibir o exemplo (5x4x3x2x1)

    
    while (numero >= 1) {
        resultado = resultado * numero;
        
        // Monta a string do cálculo para o console
        memoriaCalculo += (numero === 1) ? `${numero}` : `${numero}x`;
        
        numero--; // Decrementa o número
    }

    console.log(`Fatorial de ${valorNumero} é ${memoriaCalculo} = ${resultado}`);
    return resultado;
};


// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    calcularImc,
    calcularMedia,
    calcularMediaExame, 
    gerarTabuada,
    calcularFatorial,
    gerarSequencia
    
};



