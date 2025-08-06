// 1) CUMPRIMENTAR :
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

console.log(cumprimentar("Gui")); // "Olá, Gui!"

// 2) IDADE :
function idadeEmDias(idade) {
  return idade * 365;
}

console.log(idadeEmDias(10));

// 3) MAIOR OU IGUAL :
function maiorIgual(a, b) {
  return a >= b;
}

console.log(maiorIgual(0, 0));

// 4)  MULTIPLICAÇÃO SEM OPERADOR :
function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
  }
  return resultado;
}

console.log(multiplicar(4, 3));

// 5) REPETIR ELEMENTO :
function repetir(elemento, vezes) {
  let resultado = [];
  for (let i = 0; i < vezes; i++) {
    resultado.push(elemento);
  }
  return resultado;
}

console.log(repetir("code", 3)); // ["code", "code", "code"]

// 6) PRIMEIRO E ULTIMO ARRAY :
function firstLast(array) {
  return [array[0], array[array.length - 1]];
}

console.log(firstLast([1, 2, 3])); // [1, 3]

// 7) CÓPIA DE OBJETO :
function copiarObjeto(obj) {
  return { ...obj };
}

let original = { nome: "Gui", idade: 30 };
let copia = copiarObjeto(original);
console.log(copia); // { nome: "Gui", idade: 30 }

// 8) FILTRAR NÚMEROS PARES COM ÍNDICES :
function tudoPar(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] % 2 === 0) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

console.log(tudoPar([1, 2, 3, 4])); // []
console.log(tudoPar([10, 70, 22, 45])); // [10, 22]

// 9) CALCULAR TOTAL DE DESPESAS (SOMA DOS PREÇOS DOS PRODUTOS) :
function totalDespesas(produtos) {
  let total = 0;
  for (let produto of produtos) {
    total += produto.preco;
  }
  return total;
}

let produtos = [
  { nome: "Caneta", categoria: "Papelaria", preco: 2 },
  { nome: "Livro", categoria: "Educação", preco: 20 }
];
console.log(totalDespesas(produtos)); // 22

// 10) CALCULAR O FATORIAL DE UM NÚMERO :
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5)); // 120

// 11) RETORNAR ALUNO COM MAIOR COM MÉDIA DE NOTAS :
function vemMedia(alunos) {
  let melhorAluno = null;
  let maiorMedia = -1;

  for (let aluno of alunos) {
    let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / aluno.notas.length;

    if (media > maiorMedia) {
      maiorMedia = media;
      melhorAluno = aluno.nome;
    }
  }

  return { nome: melhorAluno, media: maiorMedia };
}

console.log(vemMedia([
  { nome: "Gui", sobrenome: "Araujo", idade: 18, notas: [10, 10, 10, 10] },
  { nome: "Gh", sobrenome: "Santos", idade: 17, notas: [0, 5, 9, 7] }]));
  // { nome: "Gui", media: 10 }