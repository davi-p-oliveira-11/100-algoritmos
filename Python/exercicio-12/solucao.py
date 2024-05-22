def main():
    def desconto_5():
        preco_produto = float(input('Digite o preco do produto '))

        desconto = preco_produto * 0.05
        preco_final = preco_produto - desconto

        print(f'O preço original do produto é {preco_produto} Reais')
        print(f'O preço com desconto é {preco_final} Reais')
    

    desconto_5()

main()
input("Pressione Enter para sair ... ")