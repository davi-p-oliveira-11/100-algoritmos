// Bibliotecas

const prompt = require('prompt-sync')();
const readline = require('readline-sync');

function dizerOla() {
  let nomePessoa;

  while (true) {
    nomePessoa = prompt('Qual o seu nome ?');
    
    // Para me certificar que apenas letras serão digitadas
    if(/^[a-zA-Z]+$/.test(nomePessoa)) {
      break;
    } else {
      console.log('Por favor, insira apenas letras.');
    }
  }
   
   console.log(`Olá ${nomePessoa}, é um prazer te conhecer !`);  
   readline.question('Pressione Enter para sair');
}

dizerOla();