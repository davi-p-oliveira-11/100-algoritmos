def main():
    def calcular_area():
        valor_a = int(input('Qual o valor de A '))
        valor_b = int(input('Qual o valor de B '))
        valor_c = int(input('Qual o valor de C '))

        # bhaskara:  delta = b² - 4ac
        valor_delta = (valor_b ** 2) - 4 * (valor_a * valor_c)
        print(f'O valor de delta é igual a {valor_delta}')
    

    calcular_area()

main()
input("Pressione Enter para sair ... ")
    
