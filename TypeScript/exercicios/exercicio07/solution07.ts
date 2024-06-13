import { prompt, pressEnterToExit } from "../../inputUtils";

function solution07() {

    function calculate() {

      let number : number;
      let double : number;
      let third : number;

      number = parseInt(prompt("Digite um número: " ));
      double = number * 2;
      third = number / 3;

      console.log(`O dobro de ${number} é ${double}`);
      console.log(`A terça parte de ${number} é ${third}`);

    }

    calculate();

}

solution07();
pressEnterToExit();