/* 
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
    dela e depois mostre se ela pode ou não votar. 
*/


import java.util.Locale;
import java.util.Scanner;

public class Exercicio18 {
    
    public static void main(String[] args) {

       podeVotarOuNao();

    }

    static void podeVotarOuNao() {

        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.print("Em qual ano voce nasceu ? ");
        int anoNascimento = scanner.nextInt();

        System.out.print("Em que ano estamos ?");
        int anoAtual = scanner.nextInt();

        int idadeUsuario = anoAtual - anoNascimento;

        if (idadeUsuario >= 16) {
          System.out.println("Você já pode votar");
        } else {
          System.out.println("Você ainda não tem idade suficiente para votar");
        }

        scanner.close();

    }

}
