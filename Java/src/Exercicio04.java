/*
Exercicio 04
Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.
 */


import java.util.Locale;
import java.util.Scanner;

public class Exercicio04 {
    
    public static void main(String[] args) {
        Soma();
    }

    static void Soma() {
       
       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite um número: " );
       int num1 = scanner.nextInt();

       System.out.print("Digite um outro número: " );
       int num2 = scanner.nextInt();

       int soma = num1 + num2;

       System.out.print("A soma entre " + num1 + " e " + num2 + " equivale a " + soma);

       scanner.close();
    }
  
}
