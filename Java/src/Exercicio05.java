/* 
  Exercicio 05

Faça um programa que leia as duas notas de um aluno em uma matéria e mostre  
na tela a sua média na disciplina. 
Ex: 
Nota 1: 4.5 
Nota 2: 8.5  
A média entre 4.5 e 8.5 é igual a 6.5 <
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio05 {

    public static void main(String[] args) {

      CalcularMedia();

    }

    static void CalcularMedia() {
       
      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite a nota da primeira prova " );
      double prova1 = scanner.nextDouble();

      System.out.print("Digite um outro número: " );
      double prova2 = scanner.nextDouble();

      double media = (prova1 + prova2) / 2 ;

      System.out.println("A média entre " + prova1 + " e " + prova2 + " é: " + media);
      scanner.close();

    }
  
}
