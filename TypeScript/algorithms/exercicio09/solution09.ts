import { prompt, pressEnterToExit } from "../../inputUtils";

function solution09() : void {

    function converterMoeda() : void {

      let reaisDisponiveis : number;
      let valorDolar : number;

      reaisDisponiveis = parseFloat(prompt('Digite o valor em reais que voce tem na sua carteira: '));
      valorDolar = reaisDisponiveis / 3.45; 
  
      console.log(`Voce pode comprar ${valorDolar.toFixed(2)}USD`);

    }
  
    converterMoeda();
 
}

solution09();
pressEnterToExit();