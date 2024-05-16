const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function soma() {
  num1 = parseInt(prompt("Digite um número: "));
  num2 = parseInt(prompt("Digite um outro número: "));
  soma = num1 + num2

  console.log(`A soma entre ${num1} e ${num2} é igual a ${soma}`);
  readline.question('Digite Enter para sair ... ')
}

soma();