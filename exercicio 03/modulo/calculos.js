/*********************************************************************************************
 * Objetivo: Arquivo responável pelas funções de Calculos para este projeto
 * Data: 13/02/2026
 * Autor: Brayan
 * Versão: 1.0
 *********************************************************************************************/

function calcularSoma(soma1, soma2){
    

    let valor1 = Number(soma1)
    let valor2 =Number (soma2)
    
    let somar = valor1 + valor2
    

    //valídação para enradas vazias ou de caracteres inválidos
   
    if(valor1 === '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        console.log('ERRO: Valores da soma estão incorretos')
        return false
    }else{
        return Number (somar.toFixed(2))
    }
}
function calcularSubtracao(subtrair1, subtrair2){
    
    let valor1 = Number(subtrair1)
    let valor2 =Number (subtrair2)
    
    let subtrair = valor1 - valor2
    

    //valídação para enradas vazias ou de caracteres inválidos
    if(valor1 == '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        console.log('ERRO: Valores da subtração estão incorretos')
        return false
    }else{
        
        return Number (subtrair.toFixed(2))
    }
}

function calcularDivisao(dividido1, dividido2){

    let valor1 = Number(dividido1)
    let valor2 =Number (dividido2)
    
    let dividir = valor1 / valor2
    

    //valídação para enradas vazias ou de caracteres inválidos
    // Na divisão, além do vazio e do NaN, verificamos se o divisor é zero 
    // pois não existe divisão por zero na matemática.
    if (dividido1 === '' || isNaN(valor1) || dividido2 === '' || isNaN(valor2)) {
        console.log('ERRO: Valores da Divisão estão incorretos')
        return false
    } else if (valor2 == 0) {
        console.log('ERRO: Não é possível dividir por zero.')
        return false
    } else {
        return Number(dividir.toFixed(2))
    }
}

function calcularMultiplicacao(multiplicado1, multiplicado2){
    
    let valor1 = Number(multiplicado1)
    let valor2 = Number(multiplicado2)

    let multiplicar = valor1 * valor2

    //valídação para enradas vazias ou de caracteres inválidos
    // A validação com === '' (comparação estrita)
    // Ela diferencia o caractere "nada" do número 0.
    if(valor1 === '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        console.log('ERRO: Valores da Multiplicação estão incorretos')
        return false
    }else{
        
        return Number (multiplicar.toFixed(2))
    }

}




// Exportando as funções para serem usadas em outros arquivos 
module.exports = {
    calcularSoma,
    calcularSubtracao,
    calcularDivisao,
    calcularMultiplicacao
}

