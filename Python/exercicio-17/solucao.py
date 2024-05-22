def main():
  def multa_ou_nao():
    velocidade_carro = int(input('Digite a velocidade do carro: ' ))
    velocidade_excedida = velocidade_carro - 80
    valor_multa = velocidade_excedida * 5
    if velocidade_carro > 80:
      print(f'Você excedeu {velocidade_excedida}kms e vai pagar {valor_multa} reais de multa.')
    else:
      print("Parabéns voce não foi multado !")

  multa_ou_nao()

      
main()

  