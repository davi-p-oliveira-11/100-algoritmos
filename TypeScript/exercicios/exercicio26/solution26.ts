/*
26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution26() : void {

    function compararNumeros() : void {

       let num1 : number;
       let num2 : number;

       num1 = parseInt(prompt('Digite um número inteiro'));
       num2 = parseInt(prompt('Digite um outro número inteiro'));

        if (num1 > num2) {
          console.log(`O primeiro valor é o maior`);
        } else if (num1 < num2) {
          console.log(`O segundo valor é maior`);
        } else if (num1 === num2) {
        console.log(`Não existe valor maior, os dois são iguais`);
        }

    }

    compararNumeros();
}

solution26();
pressEnterToExit();
