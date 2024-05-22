#include <stdio.h>

void dobroTercaParte() {
  float num, dobro, tercaParte;

  printf("Digite um número: ");
  scanf("%f", &num);

  dobro = num * 2;
  tercaParte = num / 3;

  printf("O dobro de %f é igual a %f", num, dobro);
  printf("A terca parte de %f é igual a %f", num, tercaParte);

}

int main() {
  dobroTercaParte();
  return 0;
}