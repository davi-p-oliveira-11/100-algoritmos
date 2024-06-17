/* 
Exercicio 06

Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio06 {

    public static void main(String[] args) {

      AntecessorSucessor();

    }

    static void AntecessorSucessor() {
       
       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite um número: " );
       int numero = scanner.nextInt();

       int antecessor = numero - 1;
       int sucessor = numero + 1;

       System.out.println("O antecessor de " + numero + " é " + antecessor);
       System.out.println("O sucessor de " + numero + " é " + sucessor);

       scanner.close();
       
    }
  
}
