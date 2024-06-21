/* 
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0). 
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio19 {

    public static void main(String[] args) {

       calcularMedia();

    }

    static void calcularMedia() {

       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Digite a nota da prova 1: ");
       double prova1 = scanner.nextDouble();

       System.out.print("Digite a nota da prova 2: ");
       double prova2 = scanner.nextDouble();

       double media = (prova1 + prova2) / 2;

       System.out.println("A média das provas equivale a " + media);

       if (media >= 7) {
         System.out.print("Parabéns voce foi aprovado !");
       } else {
         System.out.print("Sinto muito voce foi reprovado ! ");
       }

       scanner.close();

    }
    
}
