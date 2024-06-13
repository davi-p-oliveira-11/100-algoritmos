import { prompt, pressEnterToExit } from "../../inputUtils";

function solution04() {

    function soma() {

      let num1 : number;
      let num2 : number;
      let soma : number;

      num1 = parseInt(prompt("Digite um número: " ));
      num2 = parseInt(prompt("Digite um outro numero: " ));
      soma = num1 + num2;

      console.log(`A soma entre ${num1} e ${num2} é igual a ${soma}`);

    }

    soma();

}

solution04();
pressEnterToExit();