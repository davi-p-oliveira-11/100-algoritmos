
/*
 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution29() : void {
   

    function calcularAumento() : void {

      let nomeFuncionario : string;
      let salario : number;
      let anosTrabalhados : number;
      let reajuste3 : number;
      let reajuste12 : number;
      let reajuste20 : number;

      nomeFuncionario = prompt('Digite o nome do funcionário ');
      salario = parseFloat(prompt('Digite o valor do seu salário '));
      anosTrabalhados = parseInt(prompt('Digite a quantos anos você trabalha na empresa '));

      reajuste3 = salario * 0.03;
      reajuste12 = salario * 0.125;
      reajuste20 = salario * 0.20;

      if (anosTrabalhados < 3) {
        console.log(`O funcionário ${nomeFuncionario} tem ${anosTrabalhados} anos de empresa é receberá um reajuste de 3% e terá um salário de ${salario + reajuste3} reais`);
      } else if(anosTrabalhados >= 3 && anosTrabalhados < 10) {
        console.log(`O funcionário ${nomeFuncionario} tem ${anosTrabalhados} anos de empresa é receberá um reajuste de 12.5% e terá um salário de ${salario + reajuste12} reais`);
      } else {
        console.log(`O funcionário ${nomeFuncionario} tem ${anosTrabalhados} anos de empresa é receberá um reajuste de 20% e terá um salário de ${salario + reajuste20} reais`);
      }


    }


    calcularAumento();

}

solution29();
pressEnterToExit();