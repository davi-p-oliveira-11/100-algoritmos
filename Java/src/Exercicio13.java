/*
### Exercicio 13

Faça um algoritmo que leia o salário de um funcionário,<br> calcule e mostre o
seu novo salário, com 15% de aumento.
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio13 {

   public static void main(String[] args) {

       LerSalario();

   }

   static void LerSalario() {

       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite o valor do seu salário: ");
       double valorSalario = scanner.nextDouble();

       double calcularAumento = valorSalario * 0.15;
       double novoSalario = valorSalario + calcularAumento;

       System.out.println("`O seu novo salário com 15% de aumento equivale a " + novoSalario);
       scanner.close();

   }

}