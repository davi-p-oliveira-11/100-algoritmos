def main():
    def votar_ou_nao():
        idade = int(input("Digite a sua idade: "))
        if idade >= 16:
            print("Voce já pode votar !")
        else:
            print("Voce ainda não pode votar !")

    votar_ou_nao()
    input("Pressione Enter para sair ... ")


main()