let hello = 'Hello Word!!!';

console.log(hello);

const para = document.querySelector("p");

para.addEventListener("click", atualizaNome);

function atualizaNome() {
  let nome = prompt("Insira um novo nome");
  para.textContent = "Jogador 1: " + nome;
}