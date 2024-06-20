/*
 24) Faça um algoritmo que pergunte a distância que um passageiro deseja
 percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
 viagens até 200Km e R$0.45 para viagens mais longas.
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution24() {

   function calcularPassagem() {
      let distanciaPercorrida : number;
      let precoPassagem1 : number;
      let precoPassagem2 : number;

      distanciaPercorrida = parseInt(prompt("Quantos kilometros você percorrerá ?"));

      precoPassagem1 = distanciaPercorrida * 0.5;
      precoPassagem2 = distanciaPercorrida * 0.45;
    
      if (distanciaPercorrida < 200) {
        console.log(`Voce deverá pagar ${precoPassagem1} reais ` );
      } else {
        console.log(`Voce deverá pagar ${precoPassagem2} reais `);     
      }

     }

     calcularPassagem();

}

solution24()
pressEnterToExit();