import { prompt, pressEnterToExit } from "../../inputUtils";

function solution05() {

    function calculate() {

      let test1 : number;
      let test2 : number;
      let average : number;

      test1 = parseFloat(prompt("Digite a nota da primeira prova: " ));
      test2 = parseFloat(prompt("Digite a nota da segunda prova: "));
      average = (test1 + test2) / 2;

      console.log(`A média entre ${test1} e ${test2} é igual a ${average.toFixed(1)}`);

    }

    calculate();

}

solution05();
pressEnterToExit();