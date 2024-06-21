/* 
  15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
  salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
  por hora trabalhada. 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio15 {

    public static void main(String[] args) {
        CalcularSalario();
    }

    static void CalcularSalario() {


       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Quantos dias voce trabalhou no ultimos mês ?");
       int DiasTrabalhados = scanner.nextInt();

       int DiaDeTrabalho = 8 * 25;
       int SalarioFuncionario = DiasTrabalhados * DiaDeTrabalho;

       System.out.println("O funcionário trabalhou " + DiasTrabalhados + " dias e receberá um salário de " + SalarioFuncionario + "reais.");
       scanner.close();
    
    }

}