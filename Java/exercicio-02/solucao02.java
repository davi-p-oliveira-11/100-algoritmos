import java.util.Scanner;

public class solucao02 {

  public static void main(String[] args) {
    dizerOla();
  }

  static void dizerOla() {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite seu nome: ");
    String nome = scanner.nextLine();

    System.out.println("Ola " + nome + " é um prazer te conhecer !");

    scanner.close();
  }

}
