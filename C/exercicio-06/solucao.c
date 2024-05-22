#include <stdio.h>

void antecessorSucessor() {
  int num, antecessor, sucessor;

  printf("Digite um número: " );
  scanf("%d", &num);

  antecessor = num - 1;
  sucessor = num + 1;

  printf("O antecessor de %d é igual a %d \n", num, antecessor);
  printf("O sucessor de %d é igual a %d \n", num, sucessor);

}

int main() {
  antecessorSucessor();
  return 0;
}