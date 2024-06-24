/* 
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio22 {

    public static void main(String[] args) {

       podeSeAlistar();
      
    }

    static void podeSeAlistar() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Qual foi o ano do seu nascimento ? ");
      int anoNascimento = scanner.nextInt();

      System.out.print("Digite o ano atual: ");
      int anoAtual = scanner.nextInt();

      int idade = anoAtual - anoNascimento;

      // Calcula os anos restantes para o alistamento
      /* a função Math.max com o valor 0, 18 e a variável
        idade, garante que os anos restantes nunca terão um valor
        negativo caso tenham o valor será igual a 0 */
      int anosRestantes = Math.max(0, 18 - idade);

      int anoQueCompleta18 = anoNascimento + 18;

      int anosPassados = anoAtual - anoQueCompleta18;

      if (idade < 18) {
        System.out.println("Você ainda não pode se alistar ainda faltam " + anosRestantes + " anos para o alistamento !");
      } else if (idade == 18) {
        System.out.println("Você está no ano certo para se alistar !");
      } else if (idade > 18){
        System.out.println("Já se passaram " + anosPassados + " anos do seu ano certo de alistamento.");
      }

      scanner.close();

    }
  
}
