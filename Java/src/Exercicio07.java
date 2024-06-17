/*
 Exercicio 07
 Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
 Ex:
 Digite um número: 3.5
 O dobro de 3.5 é 7.0
 A terça parte de 3.5 é 1.16666
 */


import java.util.Locale;
import java.util.Scanner;

public class Exercicio07 {
    public static void main(String[] args) {
      DobroTercaParte();
    }  

    static void DobroTercaParte() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite um número: " );
      double numero = scanner.nextDouble();

      double dobro = numero * 2;
      double tercaParte = numero / 3;

      System.out.println("O dobro de " + numero + " é igual a " + dobro);
      System.out.println("A terça parte " + numero + " é igual a " + String.format("%.2f", tercaParte));
      scanner.close();

    }

}
