import { prompt, pressEnterToExit } from "../../inputUtils";

function solution06() : void {

    function antecessorSucessor() : void {

      let number : number;
      let antecessor : number;
      let sucessor : number;

      number = parseInt(prompt("Digite um número: " ));
      antecessor = number - 1;
      sucessor = number + 1;

      console.log(`O antecessor de ${number} é ${antecessor} O sucessor de ${number} é ${sucessor}`);

    }

    antecessorSucessor();

}

solution06();
pressEnterToExit();