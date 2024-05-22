const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {

  function antecessor_sucessor() {
    const numero = parseInt(prompt('Digite um número: ' ));
  
    const antecessor = numero - 1;
    const sucessor = numero + 1;
  
    console.log(`O antecessor de ${numero} é ${antecessor}`);
    console.log(`O sucessor de ${numero} é ${sucessor}`); 
  }
  
  antecessor_sucessor();

}

main();
readline.question("Digite Enter para sair ... ");

