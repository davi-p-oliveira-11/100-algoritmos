/* Exercicio 01:
    Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
*/ 

public class Exercicio01 {

    public static void main(String[] args) {

        Message message = new Message("Olá mundo !");
        message.show();

    }

}

    class Message {

        private String content;
        
        public Message(String content) {
            this.content = content;
        }

        public void show() {
            System.out.print(content);
        }
    }


  

