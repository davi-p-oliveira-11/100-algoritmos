/* 
### Exercicio 02:

Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas</br>
para ela:</br>
Ex:</br>
Qual é o seu nome? João da Silva</br>
Olá João da Silva, é um prazer te conhecer!</br>
*/


public class Exercicio02 {
   
    public static void main(String[] args) {

      InputManager inputManager = new InputManager();

      String name = inputManager.getStringInput("Digite seu nome: ");

      System.out.print("Olá " + name + " seja bem vindo !");
      
      inputManager.close();

    }

  }




