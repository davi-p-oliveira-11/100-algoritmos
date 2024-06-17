import { prompt, pressEnterToExit } from "../../inputUtils";

function solution08() {

    function calculateMeasures() {

      let metros : number;

      metros = parseInt(prompt("Digite uma distancia em metros: "));

      const kilometros = metros / 1000
      const hectometro = metros /  100
      const decametros = metros /   10
      const decimetros = metros *   10
      const centimetros = metros * 100
      const milimetros = metros * 1000
  
      console.log(`A distancia ${metros}m equivale a
      ${kilometros}km
      ${hectometro}hm
      ${decametros}dam
      ${decimetros}dm
      ${centimetros}cm
      ${milimetros}mm`);

    }

    calculateMeasures();

}

solution08();
pressEnterToExit();