const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {

  function soma() {

    const num1 = parseInt(prompt("Digite um número: "));
    const num2 = parseInt(prompt("Digite um outro número: "));
    const soma = num1 + num2
  
    console.log(`A soma entre ${num1} e ${num2} é igual a ${soma}`);
  }
  
  soma();

}

main();
readline.question('Digite Enter para sair ... ');

