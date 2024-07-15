/* 
 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
 um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
 quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
 sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. 
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution14() : void {
  
    function calcularAluguel() : void {

      let kmPercorridos : number;
      let diasAlugado : number;
      let custoDias : number;
      let custoKm : number;
      let custoTotal : number;

      kmPercorridos = parseInt(prompt('Quantos Km foram percorridos com o carro alugado ?'));
      diasAlugado = parseInt(prompt("Por quantos dias o carro foi alugado ?"));

      custoDias = diasAlugado * 90;
      custoKm = kmPercorridos * 0.20;

      custoTotal = custoDias + custoKm;

      /* method .toFixed(2) formata os valores para terem apenas 2 decimais 
         que é o formato adequado para valores monetários*/

      console.log(`O cliente percorreu ${kmPercorridos}km com o carro
      alugou o carro por ${diasAlugado} dias que custou
      ${custoDias.toFixed(2)} reais pelos dias alugados e
      ${custoKm.toFixed(2)} reais pelos Km rodados,
      o custo total que o cliente deve pagar é: ${custoTotal.toFixed(2)} reais`);


    }

    calcularAluguel();

}

solution14();
pressEnterToExit();
