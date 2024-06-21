import java.util.Locale;
import java.util.Scanner;

public class Exercicio16 {

    public static void main(String[] args) {
       pareDeFumar();
    }

    static void pareDeFumar() {

      Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

      System.out.print("Quantos cigarros voce fuma por dia ?");
      int cigarrosDia = scanner.nextInt();

      System.out.print("Há quantos anos voce fuma ?");
      int anosFumando = scanner.nextInt();

      int cigarrosFumadosTotal = (cigarrosDia * 365) * anosFumando; 
 
      int minutosPerdidos = cigarrosFumadosTotal * 10; 

      int diasPerdidos =  minutosPerdidos / 1440; 

      System.out.print("Voce ja perdeu " + diasPerdidos + " dias de vida !");

      scanner.close();

    }
  
}
