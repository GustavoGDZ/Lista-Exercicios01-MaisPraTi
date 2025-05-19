// Exercicio 6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

const A = parseFloat(prompt("Digite o lado A do triângulo: "));
const B = parseFloat(prompt("Digite o lado B do triângulo: "));
const C = parseFloat(prompt("Digite o lado C do triângulo: "));

if (A < B + C && B < A + C && C < A + B) {
  console.log("Os lados formam um triângulo.");

  if (A === B && B === C) {
    console.log("Tipo: Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Tipo: Isósceles");
  } else if (A !== B && B !== C && A !== C) {
    console.log("Tipo: Escaleno");
  }
} else {
  console.log("Os lados NÃO formam um triângulo.");
}

