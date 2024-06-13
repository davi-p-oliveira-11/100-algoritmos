const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {

  function calcularArea() {

    const altura = parseFloat(prompt('Digite a altura da parede em metros: ' ));
    const largura = parseFloat(prompt('Digite a largura da parede em metros: ' ));

    const area = largura * altura
    const tintaNecessaria =  area * 0.5

    console.log(`A area da parede a ser pintada equivale a ${area} m²`)
    console.log(`e a quantidade de tinta necessaria equivale a ${tintaNecessaria} litros.`)

  }

  calcularArea();

}

main();
readline.question('Pressione Enter para sair ... ')