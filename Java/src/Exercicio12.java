/*
 ### Exercicio 12

Crie um programa que leia o preço de um produto,<br> calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.
 */

import java.util.Locale;
import java.util.Scanner;

public class Exercicio12 {

    public static void main(String[] args) {
       CalcularDesconto();
    }

    static void CalcularDesconto() {

       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite o valor do produto: ");
       double precoProduto = scanner.nextDouble();

       double desconto = precoProduto * 0.05;
       double precoFinal = precoProduto - desconto;

       System.out.println("O preço do produto com desconto é: " + precoFinal);         
       scanner.close();

    }
  
}
