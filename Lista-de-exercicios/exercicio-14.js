// Exercicio 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
let fatorial = 1;

if (numero < 0) {
  console.log("Não existe fatorial de número negativo.");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
