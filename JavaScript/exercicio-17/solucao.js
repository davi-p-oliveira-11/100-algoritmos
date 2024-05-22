const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {

  function multaOuNao() {

    const velocidadeCarro = parseInt(prompt("Digite a velocidade do carro: " ));
    const velocidadeExcedida = velocidadeCarro - 80
    const valorMulta = velocidadeExcedida * 5

    if (velocidadeCarro > 80) {
      console.log(`Você excedeu ${velocidadeExcedida}kms e vai pagar ${valorMulta} reais de multa.`)
    } else {
      console.log("Parabéns voce não foi multado !")
    }
  }

  multaOuNao();

}

main();
readline.question('Pressione Enter para sair ... ')