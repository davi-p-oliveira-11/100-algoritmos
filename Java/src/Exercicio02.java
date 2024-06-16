/* 
### Exercicio 02:

Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas</br>
para ela:</br>
Ex:</br>
Qual é o seu nome? João da Silva</br>
Olá João da Silva, é um prazer te conhecer!</br>
*/


import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.Locale;

public class Exercicio02 {
   
    public static void main(String[] args) {
      
        DizerOla();

    }

    static void DizerOla() {
      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      String nome = "";
      boolean entradaValida = false;

      while (!entradaValida) {
          try {
              System.out.print("Digite seu nome: ");
              nome = scanner.next();
         
              if (!nome.matches("[a-zA-Z]+")) {
                  throw new InputMismatchException("Entrada inválida. Por favor, digite apenas letras.");
              }
              entradaValida = true; 
          } catch (InputMismatchException e) {
              System.out.println("Entrada inválida. Por favor, digite apenas letras.");
              scanner.next(); 
          }
      }

      System.out.println("Olá " + nome + ", é um prazer te conhecer!");
      scanner.close();
  }

}
