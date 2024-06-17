/*
 Exercicio 03

Crie um programa que leia o nome e o salário de um funcionário, mostrando no 
final uma mensagem. Ex: Nome do Funcionário: Maria do Carmo 
Salário: 1850,45 
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho. 
*/

import java.util.Scanner;
import java.util.Locale;

public class Exercicio03 {

    public static void main(String[] args) {
        OlaFuncionario();
    }

    static void OlaFuncionario() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Digite o nome do funcionário: ");
      String funcionario = scanner.next();

      System.out.print("Digite o valor do salario: " );
      int salario = scanner.nextInt();

      System.out.print("Digite o ultimo mes trabalhado: " );
      String mesTrabalhado = scanner.next();

      System.out.println("O funcionario " + funcionario + " recebeu um salario de " + salario + " reais em " + mesTrabalhado);
      scanner.close();
      
    }
  
}
