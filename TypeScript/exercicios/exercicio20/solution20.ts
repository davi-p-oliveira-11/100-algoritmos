/*
 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR 
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution20() {


    function parOuImpar() {

      let number : number;

      number = parseInt(prompt("Digite um número: "));

      number % 2 === 0 ? console.log("Número par") : console.log("Numero impar");

    }


    parOuImpar();

}

solution20();
pressEnterToExit();