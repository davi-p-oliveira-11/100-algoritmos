def calcular_medidas():
    metros = float(input('Digite uma medida em metros: '))
    kilometros = metros / 1000
    hectometros = metros / 100
    decametros = metros / 10
    decimetros = metros * 10
    centimetros = metros * 100
    milimetros = metros * 1000
    print(f'A distancia de {metros}m corresponde a: \n {kilometros}Km \n {hectometros}Hm \n {decametros}Dam \n {decimetros}dm \n {centimetros}cm \n {milimetros}mm')
    print('Pressione Enter para sair')


calcular_medidas()