import { prompt, pressEnterToExit } from "../../inputUtils";

function solution10() : void {

    function calcularArea() : void {

      let altura : number;
      let largura : number;
      let area : number;
      let tintaNecessaria : number;

      altura = parseFloat(prompt('Digite a altura da parede em metros: ' ));
      largura = parseFloat(prompt('Digite a largura da parede em metros: ' ));
  
      area = largura * altura;
      tintaNecessaria =  area * 0.5;
  
      console.log(`A area da parede a ser pintada equivale a ${area} m²`);
      console.log(`e a quantidade de tinta necessaria equivale a ${tintaNecessaria} litros.`);

    }

    calcularArea();

}

solution10();
pressEnterToExit();
