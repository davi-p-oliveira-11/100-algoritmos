import { prompt, pressEnterToExit } from "../../inputUtils";

function solution03() {

    function helloEmployee() {

      let name : string;
      let salary : number;
      let month : string;

      name = prompt("Digite o nome do funcionário: " );
      salary = parseInt(prompt("Digite o valor do salário do funcionario: " ));
      month = prompt("Digite o ultimo mes trabalhado: " );

      console.log(`O funcionário ${name} tem um salario de ${salary.toFixed(2)} reais em ${month}`);
        
    }

  helloEmployee();

}

solution03();
pressEnterToExit();