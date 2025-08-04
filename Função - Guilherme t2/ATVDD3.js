var prompt= require('prompt-sync')();

let anoAtual = new Date(). getFullYear();
let Ano = prompt("digite seu ano")

function calcularIdade(ano) {
  if (ano <= 1900 || ano >= 2026) {
    console.log("Sem registros")

  } else {
    console.log(anoAtual - Ano + " - Registro encontrado")
    
  }

}

calcularIdade();