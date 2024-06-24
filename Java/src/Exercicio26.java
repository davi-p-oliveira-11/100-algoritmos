/*
26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio26 {

    public static void main(String[] args) {

      compararNumeros();
      
    }

    static void compararNumeros() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite um número: ");
      int num1 = scanner.nextInt();

      System.out.print("Digite um outro número: ");
      int num2 = scanner.nextInt();

      if (num1 > num2) {
        System.out.println("O primeiro valor é o maior");
      } else if (num1 < num2) {
        System.out.println("O segundo valor é maior");
      } else if (num1 == num2) {
        System.out.println("Não existe valor maior, os dois são iguais");
      }

      scanner.close();

    }
  
}
