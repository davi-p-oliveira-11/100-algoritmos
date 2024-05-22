def main():
    def aumento_salario():
        salario_atual = float(input("Digite o valor do seu salario:  " ))
        aumento = salario_atual * 0.15
        salario_com_aumento = salario_atual + aumento

        print(f'O seu novo salario com aumento de 15% é: {salario_com_aumento} Reais')
    

    aumento_salario()

main()
input('Pressione Enter para sair ...')