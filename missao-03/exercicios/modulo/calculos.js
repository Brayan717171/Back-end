/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação 
 * Data: 27/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const validarDados = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7){

    valor1 = valor1.replace(',', '.');
    valor2 = valor2.replace(',', '.');

    if(valor1 == '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        console.log('ERRO: Não é possivel calcular com letras ou vazio')
        return false
    }else{
        
        return true
    }

}



const calcularImc = function(valorPeso, valorAltura){
    let peso = Number(valorPeso.replace(',', '.'));
    let altura = Number(valorAltura.replace(',', '.'));
    

    let imc = peso / (altura * altura);

    let resultado = imc

    return Number (resultado.toFixed(1))
    
}

const imc = function(resultado1){
    let resultado = Number(resultado1)


    if (resultado < 18.5) {

        console.log(`Magreza!! valor IMC: ${resultado}`);
        return false;
    
    } else if (resultado >= 18.5 && resultado <= 24.9) {
    
        console.log(`Normal!! valor IMC: ${resultado}`);
        return false;
    
    } else if (resultado >= 25 && resultado <= 29.9) {
    
        console.log(`Acima do peso (Sobrepeso)!! valor IMC: ${resultado}`);
        return false;
    
    } else if (resultado >= 30 && resultado <= 34.9) {
    
        console.log(`Obesidade I !! valor IMC: ${resultado}`);
        return false;
    
    } else if (resultado >= 35 && resultado <= 39.9) {
    
        console.log(`Obesidade II !! valor IMC: ${resultado}`);
        return false;
    
    } else if (resultado >= 40) {
    
        console.log(`Obesidade III !! valor IMC: ${resultado}`);
        return false;
    
    } else {
    
        console.log('ERRO no cálculo do IMC.');
        return false;
    }
}

const calcularMedia = function(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = nota1 + nota2 + nota3 + nota4 
    let resultado = media / 4
    
}





module.exports = {
    calcularImc,
    validarDados,
    imc,
    calcularMedia

}