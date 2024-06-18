/* 
 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
 um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
 quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
 sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio14 {

    public static void main(String[] args) {

      calcularAluguel();
      
    }

    static void calcularAluguel() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Quantos Km foram percorridos com o carro alugado ? ");
      double kmPercorridos = scanner.nextDouble();

      System.out.print("Por quantos dias o carro foi alugado ? ");
      double diasAlugados = scanner.nextDouble();

      double custoDias = diasAlugados * 90;
      double custoKm = kmPercorridos * 0.20;

      double custoTotal = custoDias + custoKm;

      System.out.println("O cliente percorreu " + kmPercorridos + "km com o carro\r\n" + //
                "      alugou o carro por " + diasAlugados + " dias que custou\r\n" + custoDias +
                "       reais pelos dias alugados e \r\n" + custoKm + //
                "       reais pelos Km rodados,\r\n" + //
                "       o custo total que o cliente deve pagar é: " + custoTotal + " reais");
                scanner.close();
     }
     
  
}
