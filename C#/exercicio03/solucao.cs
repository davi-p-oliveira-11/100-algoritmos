using System;

public class Program
{
    public static void Main()
    {
        OlaFuncionario();
    }

    static void OlaFuncionario()
    {
        Console.WriteLine("Digite o seu nome: ");
        string nome = Console.ReadLine(); 

        Console.WriteLine("Digite o valor do seu salario:" );
        string input = Console.ReadLine();
        int salario = int.Parse(input);

        Console.WriteLine($"O funcionario {nome}, tem um salario de {salario}");

        Console.WriteLine("Pressione Enter para sair...");
        Console.ReadLine();
    }
}
