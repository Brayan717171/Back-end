/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação (Somar, subtrair, multiplicar, dividir)
 * Data: 20/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/


//toLowerCase() -> Retorna a string minúsculo
//toUpperCas() -> Retorna a string maiusculo

const validarDados = function(valor1, valor2, operador){

    if(valor1 == '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        
        return false
    }else{
        
        return true
    }

}

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
    switch (operadorMatematico) {
        case 'SOMAR':// if
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR':// else if
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR':// else if
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR':// else if
            resultado = dividir(valor1, valor2)
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

//Exemplo de funções em SETA (Arrow function)
///Funções pra realizar as operações matemática
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)

const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)

const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)

const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)



module.exports = {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir,
    validarDados
}
