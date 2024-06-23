/* 
  15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
  salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
  por hora trabalhada. 
*/
import { prompt, pressEnterToExit } from "../../inputUtils";

function solution15() : void {

    function mostrarSalario() : void {

      let diasTrabalhados : number;
      let diaDeTrabalho : number;
      let salarioFuncionario : number;

      diasTrabalhados = parseInt(prompt('Quantos dias voce trabalhou no último mes ?'));
      diaDeTrabalho = 8 * 25;
      salarioFuncionario = diasTrabalhados * diaDeTrabalho;
      
      console.log(`O funcionário trabalhou ${diasTrabalhados} dias
      e vai receber um salario de ${salarioFuncionario} reais`);

    }
    
    mostrarSalario();

}

solution15();
pressEnterToExit();