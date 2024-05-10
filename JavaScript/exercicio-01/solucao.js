const readline = require('readline-sync');

function olaMundo() {
  const message = 'Olá Mundo';

  console.log(message);
  readline.question('Pressione Enter para sair ... ');
}

olaMundo();