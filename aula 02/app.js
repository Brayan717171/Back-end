/***************************************************
 * Objetivo: Calcula médias ecolares
 * Data? 29/01/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

/*
    Existem 3 formas de criações de variáveis

    var -> Permite a criação de um espaço na memória do tipo variável.
            Foi utilizado muito em projetos antigos.
            Recomendação: Caso você queira utilizar,
            recomenda-sse na criação de variáveis globais
            (Inicio do código)

    let ->Permite a criação de um espaço na memória 
            do tipo variável. A utilização deste padrão é 
            para a criação dentro de blocos de programação { }.
            Essa variável nasce e morre dentro deste bloco.
            Não é recomendado a sua utilização em escopo global.

     const -> Permite a criação de um espaço memória
                onde não sofrerá alteração durante o código.
                A const poser sere utilizada dentro e fora do bloco {}.
                Dica: Caso você queira diferenciar uma const, um var ou lat.
                A const você pode criar com letras  maiusucias .


*/  
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada do nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno que foi digitado
    let nomeAluno = nome
    //Entrada da nota1
    entradaDeDados.question('digite a nota 1: ', function(valor1){
        let nota1 = valor1
        //Entrada da nota2
        entradaDeDados.question('digite a nota 2: ', function(valor2){
            let nota2 = valor2
            //Entrada da nota3
            entradaDeDados.question('digite a nota 3: ', function(valor3){
                let nota3 = valor3
                //Entrada da nota4
                entradaDeDados.question('digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    /*
                        Operadores de Comparação 

                        ==  -> Permite comparar a igualdade de duas variáveis
                        <   -> Permite comparar valores menores
                        >   -> Permite comparar valores maiores
                        >=  -> Permite comparar valores maiores ou iguais
                        <=  -> Permite comparar valores menores ou iguais
                        !=  -> Permite comparar a diferença entre conteúdos
                        === -> Permite comparar a igualdade de conteúdos e a tipagem de dados
                        !== -> Permite comparar a diferença de conteúdos e a igualdade de dados
                        ==! -> Permite comparar a igualdade de conteúdos e a diferança de tipos de dados
                        !=! -> Permite comparar a diferença de conteúdos e a diferença de tipo de dados

                        Operadores Lógicos
                        
                        E   -> AND -> &&
                        OU  -> OR  -> ||
                        NÃO -> NOT -> !

                    */
                   //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 ==''|| nota2 ==''||  nota3 ==''||  nota4 ==''){
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')
                    }else if(nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0){
                        console.log('ERRO: as notas devem ser entre 0 e 100')

                    //Validação para entradade letras nas notas
                    //isNan() -> permite validar se o conteúdo da
                    //Variável tem algum caracter ao invés de número

                    }else if(isNaN(nota1)  || isNaN(nota2)  || isNaN(nota3) || isNaN(nota4)){

                        console.log('ERRO: Não é possivel calcular a média com as letras nas notas dos alumo!!"!')

                    }else{
                        /*
                            Conversão de tipos de dados
                            parseInt() - > Permite converter uma String para numero Inteiro
                            parseFloat() - > Permite converter uma String para numero Decimal
                            Number() - > Permite converter uma String para Numero (INTEIRO OU FLOAT)
                            String() -> Permite converter um conteudo para STRING
                            Boolean() -> Permite converter um conteudo para BOOLEAN 
                            Typeof() -> permite verificar o tipo de dados de uma variável
                        */

                        let soma = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)
                        let media = soma / 4
                        console.log(`O Aluno(a) ${nomeAluno} ficou com a nota ${media.toFixed(2)}`)
                    }
                    


                })//Fecha a nota4
            })//Fecha a nota3
        })//Fecha a nota2
    })//Fecha a nota1
})//Fecha o nome