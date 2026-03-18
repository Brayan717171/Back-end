/***************************************************
 * Testes Unitários — Projeto Brayan (módulos reais)
 * Executar: node testes.js
 ***************************************************/

const calculos  = require('./modulo/calculos');
const tratativa = require('./modulo/tratativa');

// ─── Mini Framework de Testes ───────────────────────────────────────────────
let total = 0, passou = 0, falhou = 0;
const resultados = [];

function teste(descricao, fn) {
    total++;
    try {
        fn();
        passou++;
        resultados.push({ status: '✅ PASSOU', descricao });
    } catch (e) {
        falhou++;
        resultados.push({ status: '❌ FALHOU', descricao, erro: e.message });
    }
}

function esperar(valor, esperado, msg) {
    if (valor !== esperado) {
        throw new Error(`${msg || ''} → Esperado: ${JSON.stringify(esperado)}, Recebido: ${JSON.stringify(valor)}`);
    }
}

const logOriginal = console.log;
console.log = () => {};

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.formatar
// ═══════════════════════════════════════════════════════════════════════════
teste('formatar: substitui vírgula por ponto', () => {
    esperar(tratativa.formatar('1,75'), '1.75');
});
teste('formatar: valor sem vírgula permanece igual', () => {
    esperar(tratativa.formatar('70'), '70');
});
teste('formatar: número vira string', () => {
    esperar(tratativa.formatar(70), '70');
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarDados
// ═══════════════════════════════════════════════════════════════════════════
teste('validarDados: dois números válidos retorna true', () => {
    esperar(tratativa.validarDados('70', '1.75'), true);
});
teste('validarDados: primeiro campo vazio retorna false', () => {
    esperar(tratativa.validarDados('', '1.75'), false);
});
teste('validarDados: segundo campo com letra retorna false', () => {
    esperar(tratativa.validarDados('70', 'abc'), false);
});
teste('validarDados: aceita vírgula como separador decimal', () => {
    esperar(tratativa.validarDados('70', '1,75'), true);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarNotas
// ═══════════════════════════════════════════════════════════════════════════
teste('validarNotas: todas entre 0 e 100 retorna true', () => {
    esperar(tratativa.validarNotas('70', '80', '90', '60'), true);
});
teste('validarNotas: nota 0 é válida', () => {
    esperar(tratativa.validarNotas('0', '0', '0', '0'), true);
});
teste('validarNotas: nota 100 é válida', () => {
    esperar(tratativa.validarNotas('100', '100', '100', '100'), true);
});
teste('validarNotas: nota acima de 100 retorna false', () => {
    esperar(tratativa.validarNotas('101', '80', '90', '60'), false);
});
teste('validarNotas: nota negativa retorna false', () => {
    esperar(tratativa.validarNotas('-1', '80', '90', '60'), false);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarFatorial — BUG CORRIGIDO ✅
// ═══════════════════════════════════════════════════════════════════════════
teste('validarFatorial: número válido (>1) retorna true', () => {
    esperar(tratativa.validarFatorial('5'), true);
});
teste('validarFatorial: zero retorna false (corrigido)', () => {
    esperar(tratativa.validarFatorial('0'), false);
});
teste('validarFatorial: 1 retorna false (corrigido)', () => {
    esperar(tratativa.validarFatorial('1'), false);
});
teste('validarFatorial: negativo retorna false (corrigido)', () => {
    esperar(tratativa.validarFatorial('-3'), false);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarNumeros
// ═══════════════════════════════════════════════════════════════════════════
teste('validarNumeros: 100 a 500 é válido', () => {
    esperar(tratativa.validarNumeros('100', '500'), true);
});
teste('validarNumeros: inicial negativo retorna false', () => {
    esperar(tratativa.validarNumeros('-1', '500'), false);
});
teste('validarNumeros: inicial acima de 500 retorna false', () => {
    esperar(tratativa.validarNumeros('501', '600'), false);
});
teste('validarNumeros: final abaixo de 100 retorna false', () => {
    esperar(tratativa.validarNumeros('10', '50'), false);
});
teste('validarNumeros: final acima de 1000 retorna false', () => {
    esperar(tratativa.validarNumeros('100', '1001'), false);
});
teste('validarNumeros: inicial igual ao final retorna false', () => {
    esperar(tratativa.validarNumeros('200', '200'), false);
});
teste('validarNumeros: inicial maior que final retorna false', () => {
    esperar(tratativa.validarNumeros('300', '200'), false);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarNumeros2
// ═══════════════════════════════════════════════════════════════════════════
teste('validarNumeros2: valores diferentes retorna true', () => {
    esperar(tratativa.validarNumeros2('100', '500'), true);
});
teste('validarNumeros2: valores iguais retorna false', () => {
    esperar(tratativa.validarNumeros2('200', '200'), false);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarTabuada
//  BUG CORRIGIDO: agora tem return true ✅
// ═══════════════════════════════════════════════════════════════════════════
teste('validarTabuada: faixa inválida (1) retorna false', () => {
    esperar(tratativa.validarTabuada('1', '10'), false);
});
teste('validarTabuada: acima de 100 retorna false', () => {
    esperar(tratativa.validarTabuada('2', '101'), false);
});
teste('validarTabuada: inicial maior que final retorna false', () => {
    esperar(tratativa.validarTabuada('10', '5'), false);
});
teste('validarTabuada: válida retorna true (BUG CORRIGIDO ✅)', () => {
    esperar(tratativa.validarTabuada('2', '10'), true);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.validarContador
// ═══════════════════════════════════════════════════════════════════════════
teste('validarContador: 1 a 10 retorna true', () => {
    esperar(tratativa.validarContador('1', '10'), true);
});
teste('validarContador: 0 retorna false', () => {
    esperar(tratativa.validarContador('0', '10'), false);
});
teste('validarContador: acima de 50 retorna false', () => {
    esperar(tratativa.validarContador('1', '51'), false);
});
teste('validarContador: inicial maior que final retorna false', () => {
    esperar(tratativa.validarContador('20', '5'), false);
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.definirArtigoAluno
// ═══════════════════════════════════════════════════════════════════════════
teste('Artigo aluno M = "O Aluno"', () => {
    esperar(tratativa.definirArtigoAluno('M'), 'O Aluno');
});
teste('Artigo aluno F = "A Aluna"', () => {
    esperar(tratativa.definirArtigoAluno('F'), 'A Aluna');
});
teste('Artigo aluno minúsculo "m" = "O Aluno"', () => {
    esperar(tratativa.definirArtigoAluno('m'), 'O Aluno');
});
teste('Artigo aluno inválido = "O(a) Aluno(a)"', () => {
    esperar(tratativa.definirArtigoAluno('X'), 'O(a) Aluno(a)');
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.definirArtigoProfessor
// ═══════════════════════════════════════════════════════════════════════════
teste('Artigo professor M = "Professor"', () => {
    esperar(tratativa.definirArtigoProfessor('M'), 'Professor');
});
teste('Artigo professor F = "Professora"', () => {
    esperar(tratativa.definirArtigoProfessor('F'), 'Professora');
});
teste('Artigo professor inválido = "Professor(a)"', () => {
    esperar(tratativa.definirArtigoProfessor('X'), 'Professor(a)');
});

// ═══════════════════════════════════════════════════════════════════════════
//  tratativa.imc — sempre retorna false no código real
// ═══════════════════════════════════════════════════════════════════════════
teste('imc(17): magreza retorna false', () => {
    esperar(tratativa.imc(17), false);
});
teste('imc(22): normal retorna false', () => {
    esperar(tratativa.imc(22), false);
});
teste('imc(27): sobrepeso retorna false', () => {
    esperar(tratativa.imc(27), false);
});
teste('imc(32): obesidade I retorna false', () => {
    esperar(tratativa.imc(32), false);
});
teste('imc(37): obesidade II retorna false', () => {
    esperar(tratativa.imc(37), false);
});
teste('imc(42): obesidade III retorna false', () => {
    esperar(tratativa.imc(42), false);
}); 

// ═══════════════════════════════════════════════════════════════════════════
//  calculos.calcularImc
// ═══════════════════════════════════════════════════════════════════════════
teste('calcularImc: 70kg / 1.75m = 22.9', () => {
    esperar(calculos.calcularImc('70', '1.75'), 22.9);
});
teste('calcularImc: 90kg / 1.60m = 35.2', () => {
    esperar(calculos.calcularImc('90', '1.60'), 35.2);
});
teste('calcularImc: aceita vírgula decimal', () => {
    esperar(calculos.calcularImc('70', '1,75'), 22.9);
});

// ═══════════════════════════════════════════════════════════════════════════
//  calculos.calcularMedia
// ═══════════════════════════════════════════════════════════════════════════
teste('calcularMedia: 80+90+70+60 = 75.0', () => {
    esperar(calculos.calcularMedia('80', '90', '70', '60'), 75.0);
});
teste('calcularMedia: 100+100+100+100 = 100.0', () => {
    esperar(calculos.calcularMedia('100', '100', '100', '100'), 100.0);
});
teste('calcularMedia: 0+0+0+0 = 0.0', () => {
    esperar(calculos.calcularMedia('0', '0', '0', '0'), 0.0);
});
teste('calcularMedia: 55+65+72+68 = 65.0', () => {
    esperar(calculos.calcularMedia('55', '65', '72', '68'), 65.0);
});

// ═══════════════════════════════════════════════════════════════════════════
//  calculos.calcularMediaExame
// ═══════════════════════════════════════════════════════════════════════════
teste('calcularMediaExame: (60 + 80) / 2 = 70.0', () => {
    esperar(calculos.calcularMediaExame(60, '80'), 70.0);
});
teste('calcularMediaExame: (55 + 65) / 2 = 60.0', () => {
    esperar(calculos.calcularMediaExame(55, '65'), 60.0);
});
teste('calcularMediaExame: aceita vírgula no exame', () => {
    esperar(calculos.calcularMediaExame(60, '80,0'), 70.0);
});

// ═══════════════════════════════════════════════════════════════════════════
//  calculos.calcularFatorial
// ═══════════════════════════════════════════════════════════════════════════
teste('calcularFatorial: 5! = 120', () => {
    esperar(calculos.calcularFatorial('5'), 120);
});
teste('calcularFatorial: 10! = 3628800', () => {
    esperar(calculos.calcularFatorial('10'), 3628800);
});
teste('calcularFatorial: 1! = 1', () => {
    esperar(calculos.calcularFatorial('1'), 1);
});
teste('calcularFatorial: 0! = 1 (while não executa, retorna valor inicial)', () => {
    esperar(calculos.calcularFatorial('0'), 1);
});

// ─── Relatório Final ────────────────────────────────────────────────────────
console.log = logOriginal;

const linha = '─'.repeat(65);
console.log('\n' + linha);
console.log('  RELATÓRIO DE TESTES — Projeto Brayan (módulos reais)');
console.log(linha);

resultados.forEach(r => {
    if (r.erro) {
        console.log(`${r.status}  ${r.descricao}`);
        console.log(`         ↳ ${r.erro}`);
    } else {
        console.log(`${r.status}  ${r.descricao}`);
    }
});

console.log(linha);
console.log(`\n  Total: ${total}  |  ✅ Passou: ${passou}  |  ❌ Falhou: ${falhou}`);
console.log(linha + '\n');

process.exit(falhou > 0 ? 1 : 0);
