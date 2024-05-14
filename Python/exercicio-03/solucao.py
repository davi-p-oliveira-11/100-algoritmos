def ola_funcionario():
    nome = input('Qual o nome do funcionario ? ')
    salario = int(input('Qual o valor do seu salario ? '))
    mes_trabalhado = input('Qual foi o ultimo mês trabalhado ?' )
    print(f'O funcionário {nome} tem um salario de {salario}R$ no mês de {mes_trabalhado}')
    input('Pressione Enter para sair ...')


ola_funcionario()