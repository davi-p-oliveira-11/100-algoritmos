'''
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0). 
'''

def main():
    def avaliar_nota():
        prova1 = float(input("Digite a nota da primeira prova: "))
        prova2 = float(input("Digite a nota da segunda prova: "))
        media = (prova1 + prova2) / 2

        print(f'A média das provas é: {media}')

        print("Aprovado !") if media >= 7 else print("Reprovado !") 

    avaliar_nota()


main()