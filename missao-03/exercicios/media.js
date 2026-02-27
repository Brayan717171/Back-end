/***************************************************
 * Objetivo: Fazer Média dos alunos
 * Data: 27/02/2026
 * Autor: Brayan
 * Versão: 1.0
 ***************************************************/

const calculos = require ('./modulo/calculos')

const readline = require('readline')

// Cria uma interface para entrada e saída de dados pelo terminal
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o nome do aluno: ', function (valorNome) {
    let nome = valorNome

    entradaDeDados.question('Digite o nome do professor: ', function (valorProfessor) {
        let professor = valorProfessor

        entradaDeDados.question('Digite o sexo do aluno: ',function(valorSexoAl){
            let sexoAluno = valorSexoAl

            entradaDeDados.question('Digite o sexo do Professor: ',function(valorSexoPR){
                let sexoProfessor = valorSexoPR

                entradaDeDados.question('Digite o Nome do curso: ',function(curso){
                    let nomeCurso = curso
        
                    entradaDeDados.question('Digite o Nome da diciplina: ',function(diciplina){
                        let nomediciplina = diciplina
            
                        entradaDeDados.question('Digite a primeira nota: ',function(valor1){
                            let nota1 = valor1
                
                            entradaDeDados.question('Digite a segunda nota: ',function(valor2){
                                let nota2 = valor2
                    
                                entradaDeDados.question('Digite a terceira nota: ',function(valor3){
                                    let nota3 = valor3
                        
                                    entradaDeDados.question('Digite a quarta nota: ',function(valor4){
                                        let nota4 = valor4
                                        

                                        let validarmedia = calculos.validarDados(nota1, nota2, nota3, nota4)
                                        
                                        

                                        let resultadoCalculo = calculos.calcularMedia(nota1, nota2, nota3, nota4)
                                                
                                        let resultado =console.log(resultadoCalculo)

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})