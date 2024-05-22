def main():
    def tinta_necessaria():
        altura = float(input('Digite a altura da parede em metros: ' ))
        largura = float(input('Digite a largura da parede em metros: ' ))

        area = largura * altura
        quantidade_necessaria = area * 0.5

        print(f'A area da parede a ser pintada equivale a {area} m²')
        print(f'e a quantidade de tinta necessaria equivale a {quantidade_necessaria} litros.')
    

    tinta_necessaria()

main()
input("Pressione o Enter para sair ... ")
