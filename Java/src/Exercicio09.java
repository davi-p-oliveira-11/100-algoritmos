/*
 *Exercicio 09
Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere USD = 3.45
*/


import java.util.Locale;
import java.util.Scanner;

public class Exercicio09 {

    public static void main(String[] args) {

       ConverterMoedas();
       
    }

    static void ConverterMoedas() {

       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite quantos reais voce tem na carteira: " );
       double reais = scanner.nextDouble();

       double dolares = reais / 3.45;

       System.out.println("Voce pode comprar: " + dolares + " USD");
       scanner.close();

    }

}
