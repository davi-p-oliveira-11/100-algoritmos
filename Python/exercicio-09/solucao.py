def converter_moedas():
     reais_disponiveis = float(input('Digite o valor em reais que voce tem na sua carteira: '));
     valor_dolar = reais_disponiveis / 3.45; 

     print(f'Voce pode comprar {valor_dolar:.2f} USD')
     input("Digite Enter para sair ... ")


converter_moedas()
