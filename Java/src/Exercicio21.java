/*
 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO. 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio21 {

   public static void main(String[] args) {
     
     bissextoOuNao();

   }
   
   static void bissextoOuNao() {
     
     Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

     System.out.print("Digite um ano: ");
     int ano = scanner.nextInt();

      if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
       System.out.print("O ano " + ano +  " é bissexto");      
     } else {
       System.out.print("O ano " + ano + " não é bissexto");     
     }
     
     scanner.close();

   }

}