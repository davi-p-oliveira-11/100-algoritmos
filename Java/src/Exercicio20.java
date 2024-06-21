/*
20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio20 {

    public static void main(String[] args) {
       parOuImpar();
    }

    static void parOuImpar() {
       
       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite um número: ");
       int numero = scanner.nextInt();

       if (numero % 2 == 0) {
         System.out.println("O numero é par");
       } else {
         System.out.println("O numero é impar");
       }

       scanner.close();
    }
  
}
