// 2 - Criar objeto livro e função para exibir
const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899
};

function exibirLivro(livro) {
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano: ${livro.ano}`);
}

exibirLivro(livro);
