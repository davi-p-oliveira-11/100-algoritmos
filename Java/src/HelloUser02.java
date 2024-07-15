/*
Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello John, it's a pleasure to meet you!
*/

public class HelloUser02 {

  public static String HelloUser(String name) {
     return "Hello " + name + "it's a pleasure to meet you !";
  }

  public static void main(String[] args) {
    System.out.println(HelloUser("John"));
  }
  
}
