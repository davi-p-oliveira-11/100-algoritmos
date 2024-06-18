/*
17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution17() {

    function monitorarVelocidade() {

      let velocidadeCarro : number;
      let velocidadeExcedente : number;
      let valorMulta : number;
      let levouMulta : string;
      let naoLevouMulta : string;

      velocidadeCarro = parseInt(prompt('Qual a velocidade atingida pelo carro ? '));

      velocidadeExcedente = velocidadeCarro - 80;
      valorMulta = velocidadeExcedente * 5;
      

      levouMulta = `O carro atingiu uma velocidade de ${velocidadeCarro}km/h
       excedendo ${velocidadeExcedente}km/h da velocidade permitida
       o motorista deverá pagar uma multa de ${valorMulta} reais`;

      naoLevouMulta = `O motorista não excedeu o limite de velocidade, logo não pagará multa`;

      velocidadeCarro > 80 ? console.log(levouMulta) : console.log(naoLevouMulta);
     
    }

    monitorarVelocidade();

}

solution17();
pressEnterToExit();