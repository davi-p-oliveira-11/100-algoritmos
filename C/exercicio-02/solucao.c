#include <stdio.h>
#include <string.h>

void olaUsuario() {
  char nome[20];

  printf("Qual o seu nome ? \n");
  fgets(nome, sizeof(nome), stdin);

  nome[strcspn(nome, "\n")] = '\0';

  printf("Ola %s seja bem vindo !", nome);
}

int main() {
  olaUsuario();
  return 0;
}