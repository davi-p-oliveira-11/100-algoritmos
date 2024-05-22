const prompt = require("prompt-sync")();
const readline = require("readline-sync");

function main() {

   function tercaParte_dobro() {

      const numero = parseFloat(prompt("Digite um número: " ));
      const dobro = numero * 2;
      const tercaParte = numero / 3;
      
      console.log(`O Dobro de ${numero} é ${dobro} e a terca parte de ${numero} é ${tercaParte.toFixed(2)}`);
          
   }
   
   tercaParte_dobro();

}

main();
readline.question('Pressione Enter para sair ...');

