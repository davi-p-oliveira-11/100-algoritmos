/*
 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution33() : void {
   
   function aprovarEmprestimo() : void {
   
   let valorCasa : number;
   let salario : number;
   let anosPagando : number;
   let meses : number;
   let prestacao : number;

    
   valorCasa = parseFloat(prompt('Digite o valor da casa '));
   salario = parseFloat(prompt('Digite o valor do seu salário ? '));
   anosPagando = parseInt(prompt('Em quantos anos voce pretende pagar o valor da casa ?'));

   // Converter o valor de anos para meses
   meses = anosPagando * 12;
   // Calcular o preço das prestações
   prestacao = valorCasa / meses;

   if ( prestacao > salario * 0.3) {
    console.log('Infelizmente não poderemos lhe conceder o empréstimo');
   } else {
    console.log('Parabéns, Seu emprestímo foi aprovado !');
   }


   }

   aprovarEmprestimo();

}

solution33();
pressEnterToExit();