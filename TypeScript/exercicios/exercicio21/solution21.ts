/*
 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO. 
*/


import { prompt, pressEnterToExit } from "../../inputUtils";

function solution21() {

  
    function anoBissexto() {

      let ano : number;

      ano = parseInt(prompt('Digite um ano: '));
      
      if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        console.log(`O ano ${ano} é bissexto`);      
      } else {
        console.log(`O ano ${ano} não é bissexto`);     
      }

    }

    anoBissexto();

}


solution21();
pressEnterToExit();