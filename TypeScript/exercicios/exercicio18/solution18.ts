/* 
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
    dela e depois mostre se ela pode ou não votar. 
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution18() : void {

    
   function avaliarIdade() : void {

      let anoNascimento : number;
      let anoAtual : number;
      let idadeUsuario : number;

      anoNascimento = parseInt(prompt('Qual o ano do seu nascimento ?'));
      anoAtual = parseInt(prompt('Em que ano estamos ?'));
      idadeUsuario = anoAtual - anoNascimento;

      idadeUsuario >= 16 
         ? console.log('Você já pode votar')
         : console.log('Você ainda não tem idade suficiente para votar');

   }

   avaliarIdade();

}

solution18();
pressEnterToExit();


/*
const anoNascimento = parseInt(prompt('Qual o ano do seu nascimento ?'));
const anoAtual = parseInt(prompt('Em que ano estamos ?'));
const idadeUsuario = anoAtual - anoNascimento;
 
 if (idadeUsuario >= 16) {
   console.log('Você já pode votar');
   readline.question();
 } else {
   console.log('Você ainda não tem idade suficiente para votar');
   readline.question();
 }

*/