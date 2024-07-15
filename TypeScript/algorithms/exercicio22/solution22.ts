/* 
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/


import { prompt, pressEnterToExit } from "../../inputUtils";

function solution22() : void {


    function podeOuNao() : void {
       
      let anoNascimento : number;
      let anoAtual : number;
      let idade : number;
      let anosRestantes : number;
      let anoQueCompleta18 : number;
      let anosPassados : number;
      
      anoNascimento = parseInt(prompt('Qual foi o seu ano de nascimento ? '));
      anoAtual = parseInt(prompt('Digite o ano atual ? '));
    
      // Calcula a idade do usuário
      idade = anoAtual - anoNascimento;
    
     // Calcula os anos restantes para o alistamento
     /* a função Math.max com o valor 0, 18 e a variável
        idade, garante que os anos restantes nunca terão um valor
        negativo caso tenham o valor será igual a 0 */
      anosRestantes = Math.max(0, 18 - idade);
    
      // Calcula qual o ano a pessoa completou 18 anos
      anoQueCompleta18 = anoNascimento + 18;
    
      // Calcula os anos que já se passaram do alistamento
      anosPassados = anoAtual - anoQueCompleta18;

      if (idade < 18) {
      console.log(`Voce ainda não pode se alistar, faltam ${anosRestantes} anos para o alistamento !`);
     } else if(idade === 18) {
      console.log(`Você está no ano certo para se alistar`);
     } else if (idade > 18) {
      console.log(`Já se passaram ${anosPassados} do seu ano certo de alistamento`);}
    }

    podeOuNao();
}

solution22();
pressEnterToExit();