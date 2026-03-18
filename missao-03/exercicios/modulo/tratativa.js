/***************************************************
 * Objetivo: Árquivo responsável pelas enrtradas e saídas da aplicação TRATATIVA
 * Data: 04/03/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/



function formatar(valor) {
    return String(valor).replace(',', '.');
}


const validarDados = function(valor1, valor2, valor3, valor4){

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


const validarTabuada = function(valorMinimo, valorMaximo) {
    
   
    let tabuadaInicial = Number(formatar(valorMinimo));
    let tabuadaFinal = Number(formatar(valorMaximo));

    // Validação: Verifica se os valores estão fora do intervalo de 2 a 100
    if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('ERRO: As tabuadas devem ser entre 2 e 100.');
        return false;
    }

    // Validação extra: Verifica se o valor inicial é maior que o final
    if (tabuadaInicial > tabuadaFinal) {
        console.log('ERRO: A tabuada inicial não pode ser maior que a final.');
        return false;
    }

    return true;
};
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


// Função para validar os Contadores (Inicial e Final)
const validarContador = function(contInicial, contFinal) {
    let inicio = Number(formatar(contInicial));
    let fim = Number(formatar(contFinal));

    // Requisito: Entre 1 e 50
    if (inicio < 1 || inicio > 50 || fim < 1 || fim > 50) {
        console.log('ERRO: O valor do contador deverá ser entre 1 e 50.');
        return false;
    }

    // Verificação extra: inicial não pode ser maior que final
    if (inicio > fim) {
        console.log('ERRO: O contador inicial não pode ser maior que o contador final.');
        return false;
    }

    return true;
}

function validarFatorial(valor){

    let fatorial= Number(formatar(valor));

    if(fatorial === 0){
        console.log('ERRO: Não existe fatorial de 0')
        return false; 

    }else if(fatorial <= 1) {
        console.log('ERRO: Não é possivel calcular o fatorial, digite um número maior que 1')
        return false; 
    }
    return true; 
}
const validarNumeros2 = function(valor1, valor2) {
    let inicial = Number(valor1);
    let final = Number(valor2);

    // Regra: Impedir números iguais
    if (inicial === final) {
        console.log('ERRO: O número inicial não pode ser igual ao final.');
        return false;
    }

    return true;
}
function validarNumeros(valor1, valor2) {
    let inicial = Number(formatar(valor1));
    let final = Number(formatar(valor2));

    if (inicial < 0 || inicial > 500) {
        console.log("ERRO: O número inicial deve estar entre 0 e 500");
        return false;
    } 
    else if (final < 100 || final > 1000) {
        console.log("ERRO: O número final deve estar entre 100 e 1000");
        return false;
    } 
    else if (inicial >= final) { // Aqui já resolve a regra de "não podem ser iguais" e "não pode ser maior"
        console.log("ERRO: O número inicial não pode ser maior ou igual ao final.");
        return false;
    }
    
    return true; // Se não caiu em nenhum erro, retorna verdadeiro
}



module.exports = {
    formatar,
    validarDados,
    validarNotas,
    definirArtigoAluno,
    definirArtigoProfessor,
    imc,
    validarTabuada,
    validarContador, 
    validarFatorial, 
    validarNumeros,
    validarNumeros2,

    
};