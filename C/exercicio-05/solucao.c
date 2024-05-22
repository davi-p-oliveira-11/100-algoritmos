#include <stdio.h>

void calcularMedia() {
  float prova1, prova2, media;

  printf("Digite a nova da prova 1: " );
  scanf("%f", &prova1);

  printf("Digite a nova da prova 2: " );
  scanf("%f", &prova2);

  media = (prova1 + prova2) / 2;

  printf("A nota da %f com a %f equivale a %f", prova1, prova2, media);

}

int main() {
  calcularMedia();
  return 0;
}