const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function converterMoeda() {
  const reaisDisponiveis = parseFloat(prompt('Digite o valor em reais que voce tem na sua carteira: '));
  const valorDolar = reaisDisponiveis / 3.45; 

  console.log(`Voce pode comprar ${valorDolar.toFixed(2)}USD`);
  readline.question('Digite Enter para continuar ... ');
}

converterMoeda();