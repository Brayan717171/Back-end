/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação TRATATIVA
 * Data: 04/03/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/



function formatar(valor) {
    return String(valor).replace(',', '.');
}



const validarDados = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7){

    valor1 = formatar(valor1)
    valor2 = formatar(valor2)
    valor3 = formatar(valor3)
    valor4 = formatar(valor4)

    if(valor1 == '' || isNaN(valor1) || valor2 === '' || isNaN(valor2)){
        console.log('ERRO: Não é possivel calcular com letras ou vazio')
        return false
    }else{
        
        return true
    }

}
const validarNotas = function(valor1, valor2, valor3, valor4){
    // 1. Primeiro formatamos a STRING (troca , por .)
    // 2. Depois convertemos para NUMBER
    let nota1 = Number(formatar(valor1))
    let nota2 = Number(formatar(valor2))
    let nota3 = Number(formatar(valor3))
    let nota4 = Number(formatar(valor4))
    
    // Agora as validações funcionam, pois nota1, nota2... são números.
    if(nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0){
        console.log('ERRO: as notas devem ser entre 0 e 100')
        return false
    }
    return true
}
const definirArtigoAluno = function(sexo) {
    let genero = String(sexo).toUpperCase();
    if (genero === 'M') {
        return 'O Aluno';
    } else if (genero === 'F') {
        return 'A Aluna';
    } else {
        return 'O(a) Aluno(a)';
    }
};

/**
 * Define o artigo correto para o professor com base no sexo
 */
const definirArtigoProfessor = function(sexo) {
    let genero = String(sexo).toUpperCase();
    if (genero === 'M') {
        return 'Professor';
    } else if (genero === 'F') {
        return 'Professora';
    } else {
        return 'Professor(a)';
    }
};

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




module.exports = {
    formatar,
    validarDados,
    validarNotas,
    definirArtigoAluno,
    definirArtigoProfessor,
    imc
};