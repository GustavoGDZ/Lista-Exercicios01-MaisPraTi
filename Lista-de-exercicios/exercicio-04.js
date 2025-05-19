// Exercicio 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("Menu de opções:");
console.log("1 - Mostrar a hora atual");
console.log("2 - Mostrar a data atual");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

switch (opcao) {
  case '1':
    const agora = new Date();
    console.log("Hora atual:", agora.toLocaleTimeString());
    break;
  case '2':
    const hoje = new Date();
    console.log("Data atual:", hoje.toLocaleDateString());
    break;
  case '3':
    console.log("Saindo... Até mais!");
    break;
  default:
    console.log("Opção inválida! Tente novamente.");
}


