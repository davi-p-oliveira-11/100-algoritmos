def know_your_salary():
    dias_trabalhados = int(input("Por quantos dias voce trabalhou no ultimo mes  ? "))
    dia_de_trabalho = 200
    salario = dias_trabalhados * dia_de_trabalho

    print(f'O trabalhador trabalhou por {dia_de_trabalho} dias e vai
    receber um salario de {salario} reais.')
    print("Pressione Enter para Sair ... ")


know_your_salary()