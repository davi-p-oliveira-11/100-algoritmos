/* 
### Exercicio 02:

Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas</br>
para ela:</br>
Ex:</br>
Qual é o seu nome? João da Silva</br>
Olá João da Silva, é um prazer te conhecer!</br>
*/

import java.util.Scanner;
import java.util.Locale;

public class Exercicio02 {
   
    public static void main(String[] args) {
      
        DizerOla();

    }

    static void DizerOla() {
      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite seu nome: ");
      String nome = scanner.next();

      System.out.println("Olá " + nome + ", é um prazer te conhecer!");
      scanner.close();
  }

}
