/*
Exercicio 11

Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta.
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio11 {

    public static void main(String[] args) {

       CalcularDelta();
      
    }

    static void CalcularDelta() {
       
      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.println("Digite o valor de A: " );
      int valorA = scanner.nextInt();

      System.out.println("Digite o valor de B: " );
      int valorB = scanner.nextInt();

      System.out.println("Digite o valor de C: " );
      int valorC = scanner.nextInt();

      int delta = (valorB * valorB) - 4 * (valorA * valorC);

      System.out.println("O valor de delta é igual a: " + delta);
      scanner.close();

    }


}
