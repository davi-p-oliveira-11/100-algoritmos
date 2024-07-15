/*
### Exercicio 13

Faça um algoritmo que leia o salário de um funcionário,<br> calcule e mostre o
seu novo salário, com 15% de aumento.
*/
import { prompt, pressEnterToExit } from "../../inputUtils";

function solution13() : void {
   
    function aumentoSalario() : void {
       
      let valorSalario : number;
      let calcularAumento : number;
      let novoSalario : number;

      valorSalario = parseFloat(prompt('Qual o valor do seu salário ?'));

      calcularAumento = valorSalario * 0.15;
      novoSalario = valorSalario + calcularAumento;

      console.log(`O seu novo salário com 15% de aumento equivale a ${novoSalario}`);
 
    }

    aumentoSalario();
}

solution13();
pressEnterToExit();
