
import java.util.Scanner;

public class InputManager {

  private Scanner scanner;

  public InputManager() {
    this.scanner = new Scanner(System.in);
  }

  public String getStringInput(String prompt) {

    System.out.print(prompt);
    String input = scanner.nextLine().trim(); // ler a entrada e tirar espaços em branco

    while(!input.matches("[a-zA-Z]+")) {
      System.out.println("Digite apenas letras !");
      System.out.print(prompt);
      input = scanner.nextLine().trim();
    }

    return input;

  }

  public void close() {
     scanner.close();
  }

}