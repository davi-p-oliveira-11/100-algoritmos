def calcular_media():
    prova1 = int(input('Qual foi a nota da prova 1 ?'))
    prova2 = int(input('Qual foi a nota da prova 2 ?'))
    media = (prova1 + prova2) / 2
    print(f'A média entre {prova1} e {prova2} é {media}')
    input('Pressione Enter Para Sair...')


calcular_media()