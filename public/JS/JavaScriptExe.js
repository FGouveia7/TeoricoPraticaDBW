"use strict";

/**
 * @fileoverview Conjunto de funções de demonstração para aulas de JavaScript na unidade DBW:
 * literais de modelo, operadores de comparação, objeto {@link Date}, manipulação de arrays,
 * desestruturação, parâmetros rest e iteração sobre arrays de objetos. Inclui ainda a
 * rotina {@link atualizarFooter} para o ano letivo no rodapé.
 */

// Mensagem de confirmação de que o ficheiro JS está ligado ao HTML (útil nas DevTools → Consola).
console.log("conectado");

function logToPage(message) {
    const output = document.getElementById("output");
    if (output) {
        output.innerHTML += message + "<br>";
    }
}

/* ========== Ano Letivo (Footer) ==========
 * O ano letivo em Portugal segue o calendário do portal: Set–Jul.
 * Jan–Ago: ainda no ano anterior (ex: Fev 2026 → 2025-2026)
 * Set–Dez: novo ano letivo (ex: Out 2026 → 2026-2027)
 * getMonth() retorna 0-11 (Jan=0, Set=8, Out=9)
 */
function anoLetivo() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = agora.getMonth();
    // A partir de setembro (mês 8), inicia o novo ano letivo
    if (mes >= 8) {
        return `${ano}-${ano + 1}`;
    }
    return `${ano - 1}-${ano}`;
}

/** Atualiza o footer com o ano letivo correto. Deve ser chamada quando o DOM estiver pronto. */
function atualizarFooter() {
    const el = document.getElementById("anoLetivo");
    if (el) {
        el.textContent = anoLetivo();
    }
}

// Atualiza o footer ao carregar a página (quando o script está no final do body, o DOM já existe)
atualizarFooter();

/* ========== EXERCÍCIO 1: String Templates ==========
 * String Templates (template literals) usam crases ` e ${} para interpolar variáveis.
 * Permitem inserir expressões JavaScript diretamente numa string.
 */
function stringTemplate() {
    // Constantes com os valores a imprimir
    const nome = "Estudante";  // Altere para o seu nome
    const disciplina = "Bem-vindo a DBW!";

    // String Template: usa crases ` e ${variavel} para interpolar valores
    const mensagem = `Olá, ${nome}, ${disciplina}`;
    logToPage(mensagem);
}

/* ========== EXERCÍCIO 2: Operadores de Comparação ==========
 * ==  : igualdade (com conversão de tipo)
 * === : igualdade estrita (valor E tipo)
 * !=  : diferente (com conversão de tipo)
 * !== : diferente estrito (valor E tipo)
 * >   : maior que
 */
function comparacoes() {
    // true: 5 e "5" são iguais em valor (== faz conversão de tipo)
    const igualValor = 5 == "5";

    // true: 5 e 5 são iguais em valor E tipo (number)
    const igualEstrito = 5 === 5;

    // false: 5 e 10 são diferentes, logo 5 == 10 dá false
    const diferenteValor = 5 == 10;

    // true: 5 e "5" são diferentes em tipo (number vs string)
    const diferenteEstrito = 5 !== "5";

    // false: 3 não é maior que 10
    const maiorQue = 3 > 10;

    // Impressão usando String Templates
    logToPage(`Igualdade (==): ${igualValor}`);
    logToPage(`Igualdade estrita (===): ${igualEstrito}`);
    logToPage(`Diferente (!=): ${diferenteValor}`);
    logToPage(`Diferente estrito (!==): ${diferenteEstrito}`);
    logToPage(`Maior que (>): ${maiorQue}`);
}

/* ========== EXERCÍCIO 3: Objeto Date() e Horas do Dia ==========
 * Date() fornece a data/hora atual.
 * getHours() -> horas (0-23)
 * getMinutes() -> minutos (0-59)
 */
function horas() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();

    if (hora > 7 && hora < 12) {
        logToPage(`Bom dia! São ${hora} horas e ${minutos} minutos`);
    } else if (hora >= 12 && hora < 19) {
        logToPage(`Boa tarde! São ${hora} horas e ${minutos} minutos`);
    } else {
        logToPage("Boa noite!");
    }
}

/* ========== EXERCÍCIO 4: Manipulação de Arrays ==========
 * split(" ") divide a string por espaços, criando um array de palavras.
 * for: ciclo tradicional com índice.
 * forEach: método de array que executa uma função para cada elemento.
 */
function arrayManip() {
    // split(" ") divide a string em substrings separadas por espaço
    let palavras = "DBW é uma disciplina interessante".split(" ");

    // Ciclo for: imprime cada palavra com a sua posição (índice)
    for (let i = 0; i < palavras.length; i++) {
        logToPage(`Posição ${i}: ${palavras[i]}`);
    }

    // forEach: substitui "i" por "w" e converte para maiúsculas
    // replace(/i/g, "w") - o "g" significa global (todas as ocorrências)
    palavras.forEach((palavra, indice) => {
        const modificada = palavra.replace(/i/g, "w").toUpperCase();
        logToPage(`Posição ${indice}: ${modificada}`);
    });

    // alternativa ao replace(/i/g, "w")
    palavras.forEach((palavra, indice) => {
        const modificada = palavra.replaceAll("i", "w").toUpperCase();
        logToPage(`Posição ${indice}: ${modificada}`);
    });
}

/* ========== EXERCÍCIO 5: Soma com Desestruturação ==========
 * somaSimples recebe 3 parâmetros e retorna a soma.
 * Desestruturação [x, y, z] = array extrai os 3 primeiros elementos.
 */
function somaSimples(x, y, z) {
    return x + y + z;
}

function somaArrays() {
    const num = [1, 2, 3];

    // Desestruturação: extrai os 3 elementos do array para variáveis x, y, z
    // num[0]=1 -> x, num[1]=2 -> y, num[2]=3 -> z
    const [x, y, z] = num;

    const resultado = somaSimples(x, y, z); // ou somaSimples(...num)
    logToPage(`Soma do array [1, 2, 3] = ${resultado}`);
}

/* 
 * ========== EXERCÍCIO EXTRA: somaSimples2 ==========
 * somaSimples2 usa parâmetro rest (...numeros) para aceitar qualquer quantidade de números.
 * Soma todos os valores recebidos e retorna o total.
 */

function somaSimples2(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

/* ========== EXERCÍCIO 6: Array de Objetos - Fórmula 1 ==========
 * Ciclo for percorre o array de pilotos.
 * Nota: o exercício original usa "pioto" (typo) como propriedade.
 */
function pilotoFormulaUm() {
    const formulaUm = [
        { pioto: "Schumacher", equipa: "Ferrari", reformado: true },
        { pioto: "Verstappen", equipa: "Red Bull", reformado: false },
        { pioto: "Alonso", equipa: "Aston Martin", reformado: false }
    ];

    for (let i = 0; i < formulaUm.length; i++) {
        const piloto = formulaUm[i];
        if (piloto.reformado) {
            logToPage(`O piloto '${piloto.pioto}' está reformado!`);
        } else {
            logToPage(`O piloto '${piloto.pioto}' está na equipa '${piloto.equipa}'!`);
        }
    }
}
