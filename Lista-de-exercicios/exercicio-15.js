// Exercicio 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')();

let a = 0, b = 1, proximo;

console.log("Os 10 primeiros números da sequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(a);
  proximo = a + b;
  a = b;
  b = proximo;
}
