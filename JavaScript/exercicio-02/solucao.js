// Bibliotecas
const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {
  
  function dizerOla() {

    const nomePessoa = prompt("Qual é o seu nome ? ");
    console.log(`Olá ${nomePessoa}, é um prazer te conhecer !`);
    
  }
  
  dizerOla();
}


main();
readline.question('Pressione Enter para sair ... ');
