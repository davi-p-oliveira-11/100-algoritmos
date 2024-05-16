def valor_aluguel():
    distancia_viajada = int(input("Quantos kilometros foram viajados com o carro ? "))
    dias_alugados = int(input("Por quantos dias o carro foi alugado ? "))

    custo_por_dia = dias_alugados * 90
    custo_pela_distancia = distancia_viajada * 0.2
    custo_total = custo_por_dia + custo_pela_distancia

    print(f'''
     O cliente viajou {distancia_viajada} km com o carro, 
alugou o carro por {dias_alugados} dias, que vai custar {custo_por_dia} reais
pelos dias alugados, e {custo_pela_distancia:.2f} reais pelos kilometros viajados
O custo total que o cliente deve pagar é {custo_total:.2f} reais.
''')
    input("Press Enter to Exit ... ")


valor_aluguel()