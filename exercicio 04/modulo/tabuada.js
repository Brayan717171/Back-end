/***************************************************
 * Objetivo: Arquivo responsável pr gerar tabuada de um numero
 * Data: 25/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

//Import da biblioteca de calculos matemáticos
const calculosMatematicos = require('./calcular')


//Função para impromir tabuada usando While
const gerarTabuada = function(tabuada){
    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)

    let cont = 0
    let resultado

    //Repetição para gerar a tabuada ate 10
    while (cont <= 100) {
        //Chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        //cont = cont + 1
        //cont +=1
        cont++

    }
    

}
//Função para impromir tabuada usando While
const gerarTabuadaFor = function(tabuada){
    //Recebe a tabuada a ser gerada
    let tab = Number(tabuada)

    //let cont = 0
    let resultado

    for (let cont = 0; cont <=10; cont++) {
        //Chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        
    }

}

gerarTabuadaFor(24)
