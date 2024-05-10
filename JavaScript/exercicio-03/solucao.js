const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function olaFuncionario() {
  let nomeFuncionario;
  let valorSalario;
  let mesTrabalhado;

  while (true) {
    nomeFuncionario = prompt("Qual o seu nome ?");

    // Para me certificar que apenas letras serão digitadas
    if (/^[a-zA-Z]+$/.test(nomeFuncionario)) {
      break;
    } else {
      console.log("Por favor, insira apenas letras.");
    }
  }

  while (true) {
    valorSalario = prompt("Qual o seu nome ?");

    // Para me certificar que apenas numeros
    if (/^\d+$/.test(valorSalario)) {
      break;
    } else {
      console.log("Por favor, insira apenas letras.");
    }
  }

  while (true) {
    nomeFuncionario = prompt("Qual o seu nome ?");

    // Para me certificar que apenas letras serão digitadas
    if (/^[a-zA-Z]+$/.test(nomeFuncionario)) {
      break;
    } else {
      console.log("Por favor, insira apenas letras.");
    }
  }

  console.log(
    `O funcionário ${nomeFuncionario} tem um salario de ${valorSalario.toFixed(
      2
    )} reais em ${mesTrabalhado}`
  );
  readline.question("Pressione Enter para sair");
}

olaFuncionario();
