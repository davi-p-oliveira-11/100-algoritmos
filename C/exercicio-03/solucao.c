#include <stdio.h>
#include <string.h>

void olaFuncionario() {
  char nome[20], mes[20];
  int salario;

  printf("Qual o seu nome ? \n");
  fgets(nome, sizeof(nome), stdin);

  nome[strcspn(nome, "\n")] = '\0';

  printf("Qual foi o ultimo mes tranalhado ? \n");
  fgets(mes, sizeof(mes), stdin);

  mes[strcspn(mes, "\n")] = '\0';

  printf("Digite o valor do seu salario: ");
  scanf("%d", &salario);

  printf("O funcionário %s tem um salario %d no mês %s", nome, salario, mes);

}

int main() {
  olaFuncionario();
  return 0;
}