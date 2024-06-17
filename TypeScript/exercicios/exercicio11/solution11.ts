import { prompt, pressEnterToExit } from "../../inputUtils";

function solution11() {

   function calcularDelta() {

    let valorA : number;
    let valorB : number;
    let valorC : number;
    let delta : number;

    valorA = parseInt(prompt("Digite o valor de A"));
    valorB = parseInt(prompt("Digite o valor de B"));
    valorC = parseInt(prompt("Digite o valor de C"));
    
    /* formula de bhaskara:  delta = b² - 4ac */
    delta = (valorB ** 2) - 4 * (valorA * valorC);

    console.log(`O valor de delta é igual a: ${delta}`);

   }

   calcularDelta();
   
}

solution11();
pressEnterToExit();