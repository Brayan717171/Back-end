/*********************************************************************************************
 * Objetivo: Arquivo responável pelas funções de Calculos para este projeto
 * Data: 11/02/2026
 * Autor: Brayan
 * Versão: 1.0
 *********************************************************************************************/
//Criando uma função ara calcular o valor da compra parcelado
//Método tradicional de criar uma função

function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variaveis locais
    //As variáveis (valor, taxa, tempo são numéricas por conta da conversão)
    //Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda serão String)
    let valor = Number(valorCompra)
    let taxa =Number (taxaJuros)
    let tempo = Number (tempoPagto)


    //valídação para enradas vazias ou de caracteres inválidos
    if(valorCompra == '' || isNaN(valorCompra || tempoPagto == '' || isNaN(tempoPagto))){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')
        return false
    }else{
        //chama a função para converter o numero em percentual
    let percentual = calcularPercentual(taxa)

    //Válidação para o erro do percentual na função calcularPercentual()
    if(percentual){
        let montante = valor * ((1+percentual)**tempo)
        return Number (montante.toFixed(2))
    }else{
        console.log('ERRO: Valor da taxa está incorreto.')
        return false
    }
    
    }
}

function calcularPercentual(numero){
    let numeroPercentual = Number(numero)


    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false // não pode processar
    }else{
        //Procedimento do calculo do perentual
        let percentual = numeroPercentual / 100
        return  Number(percentual.toFixed(2))
    }

    
}


// Tornando as duas funções publicas para esse projeto
module.exports = {
    calcularJurosCompostos,
     calcularPercentual
}