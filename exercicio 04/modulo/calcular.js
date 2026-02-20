/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação (Somar, subtrair, multiplicar, dividir)
 * Data: 20/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/


//toLowerCase() -> Retorna a string minúsculo
//toUpperCas() -> Retorna a string maiusculo



// Modelo de função anônima
// álcular as 4 operações matemáticas
const calcular = function(numero1, numero2, operador){
    let valor1                  = Number(numero1)
    let valor2                  = Number(numero2)
    let resultado 
    let operadorMatematico      = String(operador).toUpperCase()
    
    //Condicionais para validar qual tipo de operação matemática
    //A ausencia da  {} na condicional é porque qualquer condicional que temha apenas que uma linha
    //de processamento a {} torna-se opcional

    
        // if(operadorMatematico == 'SOMAR'){
        //     resultado = valor1 + valor2
        // }else if(operadorMatematico == 'SUBTRAIR'){
        //    resultado = valor1 - valor2 
        // }else if(operadorMatematico == 'MULTIPLICAR'){
        //     resultado = valor1 * valor2
        // }else if(operadorMatematico == 'DIVIDIR'){
        //     resultado = valor1 / valor2
        // }
    switch (key) {
        case 'SOMAR':// if
            resultado = valor1 + valor2
            break;
        case 'SUBTRAIR':// else if
            resultado = valor1 - valor2
            break;
        case 'MULTIPLICAR':// else if
            resultado = valor1 * valor2
            break;
        case 'DIVIDIR':// else if
            resultado = valor1 / valor2
            break;

        default: // else
            break;
    }



        /*
    //Saída
    if(resultado != undefined)
        return Number(resultado).toFixed(2)
    else
        return false */
    return resultado
    
    
}

console.log(calcular(10,20, 'somar'))