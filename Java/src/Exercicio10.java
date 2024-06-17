/*
 Exercicio 10
   Faça um algoritmo que leia a largura e la de uma parede, 
   calcule e mostre a área a ser pintada e a quantidade 
   de tinta necessária para o serviço, 
   sabendo que cada litro de tinta pinta uma área de 
   2metros quadrados.
 */

import java.util.Locale;
import java.util.Scanner;

public class Exercicio10 {

    public static void main(String[] args) {

        CalcularArea();

    }

    static void CalcularArea() {
       
      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite a altura da parede em metros: ");
      double altura = scanner.nextDouble();

      System.out.print("Digite a largura da parede em metros: ");
      double largura = scanner.nextDouble();

      double area = largura * altura;
      double tintaNecessaria =  area * 0.5;

      System.out.println("A area da parede a ser pintada equivale a " + area + " m² ");
      System.out.println("e a quantidade de tinta necessaria equivale a " + tintaNecessaria + " litros");
      scanner.close();
       
    }

  
}
