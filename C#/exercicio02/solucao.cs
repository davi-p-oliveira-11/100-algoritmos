using System;

public class Program
{
    public static void Main()
    {
        DizerOla();
    }

    static void DizerOla()
    {
        Console.WriteLine("Digite o seu nome: ");
        string nome = Console.ReadLine(); 

        Console.WriteLine($"Olá {nome}, seja bem vindo!");

        Console.WriteLine("Pressione Enter para sair...");
        Console.ReadLine();
    }
}
