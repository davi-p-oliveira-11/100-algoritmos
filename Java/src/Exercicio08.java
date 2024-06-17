/*
 * ### Exercicio 08

Desenvolva um programa que leia uma distância em metros e mostre os valores<br>
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72<
A distância de 85.7m corresponde a:
0.18572Km<
1.8572Hm<
18.572Dam
1857.2dm<b
18572.0cm
185720.0mm
 */


import java.util.Locale;
import java.util.Scanner;

public class Exercicio08 {

   public static void main(String[] args) {
      ConverterMedidas();
   }

   static void ConverterMedidas() {

    Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
    
    System.out.print("Digite uma distancia em metros: " );
    double metros = scanner.nextDouble();

    double kilometros = metros / 1000;
    double hectometro = metros /  100;
    double decametros = metros /   10;
    double decimetros = metros *   10;
    double centimetros = metros * 100;
    double milimetros = metros * 1000;

    String kmFormatado = String.format("%.2f", kilometros);
    String hmFormatado = String.format("%.2f", hectometro);
    String damFormatado = String.format("%.2f", decametros);
    String dmFormatado = String.format("%.2f", decimetros);
    String cmFormatado = String.format("%.2f", centimetros);
    String mmFormatado = String.format("%.2f", milimetros);

    System.out.println("A distancia em de " + metros + " equivale a\n" 
        + kmFormatado + " km\n"
        + hmFormatado + " hm\n"
        + damFormatado + " dam\n"
        + dmFormatado + " dm\n"
        + cmFormatado + " cm\n"
        + mmFormatado + " mm\n");
     scanner.close();

   }
  
}
