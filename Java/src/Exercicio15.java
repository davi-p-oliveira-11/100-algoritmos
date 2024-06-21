/* 
  15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
  salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
  por hora trabalhada. 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio15 {

    public static void main(String[] args) {
        calcularSalario();
    }

    static void calcularSalario() {


       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Quantos dias voce trabalhou no ultimos mês ?");
       int diasTrabalhados = scanner.nextInt();

       int diaDeTrabalho = 8 * 25;
       int salarioFuncionario = diasTrabalhados * diaDeTrabalho;

       System.out.println("O funcionário trabalhou " + diasTrabalhados + " dias e receberá um salário de " + salarioFuncionario + "reais.");
       scanner.close();
    
    }

}