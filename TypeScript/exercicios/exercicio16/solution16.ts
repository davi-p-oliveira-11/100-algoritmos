/* 
16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution16() : void {

   function calcularDiasPerdidos() : void {

      let cigarrosDia : number;
      let anosFumando : number;
      let cigarrosFumadosTotal : number;
      let minutosPerdidos : number;
      let diasPerdidos : number;

      cigarrosDia = parseInt(prompt('Quantos cigarros voce fuma por dia ? '));
      anosFumando = parseInt(prompt('Há quantos anos você fuma ? '));
    
      cigarrosFumadosTotal = (cigarrosDia * 365) * anosFumando; // 1 ano = 365 dias
    
      minutosPerdidos = cigarrosFumadosTotal * 10; // tempo perdido por fumar 1 cigarro
    
      diasPerdidos =  minutosPerdidos / 1440; // minutos que cabem em um dia
    
      console.log(`Você perdeu já ${diasPerdidos.toFixed(1)} dias de vida`);

   }

   calcularDiasPerdidos();

}

solution16();
pressEnterToExit();

