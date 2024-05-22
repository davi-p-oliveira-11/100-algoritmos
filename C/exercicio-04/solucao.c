#include <stdio.h>

void somar() {
  int num1, num2, soma;

  printf("Digite um número: " );
  scanf("%d", &num1);

  printf("Digite um outro número: " );
  scanf("%d", &num2);

  soma = num1 + num2;

  printf("A soma de %d e %d é igual a %d", num1, num2, soma);
}

int main() {
  somar();
  return 0;
}