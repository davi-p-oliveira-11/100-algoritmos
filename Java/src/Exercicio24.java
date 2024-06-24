/*
 24) Faça um algoritmo que pergunte a distância que um passageiro deseja
 percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
 viagens até 200Km e R$0.45 para viagens mais longas.
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio24 {

    public static void main(String[] args) {

       calcularPassagem();

    }

    static void calcularPassagem() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite a distacia percorrida: ");
      double distanciaPercorrida = scanner.nextInt();

      double precoPassagem1 = distanciaPercorrida * 0.5;
      double precoPassagem2 = distanciaPercorrida * 0.45;

      if (distanciaPercorrida < 200) {
        System.out.print("Voce deverá pagar " + precoPassagem1 + " reais.");
      } else {
        System.out.print("Voce deverá pagar " + precoPassagem2 + " reais.");     
      }


      scanner.close();

    }
  
}
