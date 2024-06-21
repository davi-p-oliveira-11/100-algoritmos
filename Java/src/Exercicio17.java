/*
17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

import java.util.Locale;
import java.util.Scanner;

public class Exercicio17 {

    public static void main(String[] args) {
      monitorarVelocidade();
    }

    static void monitorarVelocidade() {
      
       Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

       System.out.print("Qual a velocidade atingida pelo carro ? ");
       int velocidadeCarro = scanner.nextInt();

       int velocidadeExcedente = velocidadeCarro - 80;
       int valorMulta = velocidadeExcedente * 5;

       String levouMulta = "O carro atingiu uma velocidade de " + velocidadeCarro + "  km/h excedendo " + velocidadeExcedente + " km/h da velocidade permitidao motorista deverá pagar uma multa de " + valorMulta + " reais.";
       String naoLevouMulta = " Voce não levou multa !";

       if (velocidadeCarro > 80) {
        System.out.print(levouMulta);
       } else {
        System.out.print(naoLevouMulta);
       }

       scanner.close();
    }
  
}
