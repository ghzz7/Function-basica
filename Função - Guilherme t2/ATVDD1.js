// 1 - Função para validar senha
function validaSenha(senha) {
  if (senha === "Daxcode10") {
    return "Acesso autorizado";
  } else {
    return "Acesso negado";
  }
}

console.log(validaSenha("Daxcode10"));