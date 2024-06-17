import { prompt, pressEnterToExit } from "../../inputUtils";

function solution12() {

    function calcularDesconto() {

      let precoProduto : number;
      let desconto : number;
      let precoFinal : number;

      precoProduto = parseFloat(prompt('Qual o valor do produto ? '));
      desconto = precoProduto * 0.05;
      precoFinal = precoProduto - desconto;

      console.log(`O preço do produto é: ${precoProduto}, 
        e o preço promocional do produto é ${precoFinal}`);
    }

    calcularDesconto();

}

solution12();
pressEnterToExit();