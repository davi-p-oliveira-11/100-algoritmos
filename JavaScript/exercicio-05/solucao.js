const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function media() {
  const prova1 = parseFloat(prompt('Digite a nota da prova 1 '));
  const prova2 = parseFloat(prompt('Digite a nota da prova 2 '));
  const media = (prova1 + prova2) / 2

  console.log(`A média entre ${prova1} e ${prova2} é ${media}`)
  readline.question('Digite enter para sair ... ')
}

media();