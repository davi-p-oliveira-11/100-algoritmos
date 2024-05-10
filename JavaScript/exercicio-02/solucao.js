// Bibliotecas
const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function dizerOla() {
  const nomePessoa = prompt("Qual é o seu nome ?");

  console.log(`Olá ${nomePessoa}, é um prazer te conhecer !`);
  readline.question('Pressione Enter para sair');
}

dizerOla();
