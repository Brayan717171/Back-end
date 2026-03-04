/***************************************************
 * Objetivo: Arquivo principal para cálculo de média e tratamento de exame
 * Data: 04/03/2026
 * Autor: Brayan
 * Versão: 1.2
 ***************************************************/

const calculos = require('./modulo/calculos');
const tratativa = require('./modulo/tratativa');
const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Início da coleta de dados (Callback Hell organizado)
entradaDeDados.question('Nome do Aluno: ', function(nome) {

    entradaDeDados.question('Nome do Professor: ', function(professor) {

        entradaDeDados.question('Sexo do Aluno [M/F]: ', function(sexoAl) {

            entradaDeDados.question('Sexo do Professor [M/F]: ', function(sexoPr) {

                entradaDeDados.question('Curso: ', function(nomeCurso) {

                    entradaDeDados.question('Disciplina: ', function(nomeDisciplina) {
                        
                        entradaDeDados.question('Nota 1: ', function(valor1) {

                            entradaDeDados.question('Nota 2: ', function(valor2) {

                                entradaDeDados.question('Nota 3: ', function(valor3) {

                                    entradaDeDados.question('Nota 4: ', function(valor4) {

                                        // 1. Validações Iniciais
                                        if (tratativa.validarNotas(valor1, valor2, valor3, valor4)) {
                                            
                                            // 2. Cálculo da Média Inicial
                                            let media = calculos.calcularMedia(valor1, valor2, valor3, valor4);
                                            
                                            // 3. Definição dos Artigos (O/A)
                                            let alunoArt = tratativa.definirArtigoAluno(sexoAl);
                                            let profesorArt = tratativa.definirArtigoProfessor(sexoPr);

                                            

                                            // APROVADO DIRETO
                                            if (media >= 70) {
                                                console.log('\nRelatório do aluno:');
                                                console.log(`${alunoArt} [ ${nome} ] foi [aprovado] na disciplina [ ${nomeDisciplina} ].`);
                                                console.log(`Curso: ${nomeCurso}`);
                                                console.log(`${profesorArt}: ${professor}`);
                                                console.log(`Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                                console.log(`Média Final: ${media}`);
                                                entradaDeDados.close();

                                            // 2. EXAME
                                            } else if (media >= 50 && media <= 69) {
                                                console.log(`\n${alunoArt} está de exame. Média: ${media}`);

                                                entradaDeDados.question('Digite a nota do exame: ', function(valorExame) {
                                                    let mediaExame = calculos.calcularMediaExame(media, valorExame);
                                                    let statusFinal;

                                                    if (mediaExame >= 60) {
                                                        statusFinal = 'aprovado';
                                                    } else {
                                                        statusFinal = 'reprovado';
                                                    }

                                                    console.log('\nRelatório do aluno:');
                                                    console.log(`${alunoArt} [ ${nome} ] foi [${statusFinal}] na disciplina [ ${nomeDisciplina} ].`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${profesorArt}: ${professor}`);
                                                    console.log(`Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${valorExame}`);
                                                    console.log(`Média Final: ${media}`);
                                                    console.log(`Média final do Exame: ${mediaExame}`);
                                                    
                                                    entradaDeDados.close();
                                                });

                                            // 3. REPROVADO DIRETO
                                            } else {
                                                console.log('\nRelatório do aluno:');
                                                console.log(`${alunoArt} [ ${nome} ] foi [reprovado] na disciplina [ ${nomeDisciplina} ].`);
                                                console.log(`Curso: ${nomeCurso}`);
                                                console.log(`${profesorArt}: ${professor}`);
                                                console.log(`Notas do aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                                console.log(`Média Final: ${media}`);
                                                entradaDeDados.close();
                                            }

                                        } else {
                                            entradaDeDados.close();
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});