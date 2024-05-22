const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {
  
  function olaFuncionario() {

    const nomeFuncionario = prompt("Qual o seu nome ?");
    const mesTrabalhado = prompt("Qual foi o ultimo mês trabalhado ?");
    const valorSalario = parseFloat(prompt("Qual o valor do seu salário ?"));
  
    console.log(`O funcionário ${nomeFuncionario} tem um salario de ${valorSalario.toFixed(2)} reais em ${mesTrabalhado}`);
  
  }
  
  olaFuncionario();

}

main();
readline.question('Pressione Enter para sair ... ');

