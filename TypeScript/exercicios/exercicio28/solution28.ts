/*
28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
*/

import { prompt, pressEnterToExit } from "../../inputUtils";


function solution28() : void {
    
    function calcularTerreno() : void {


       let largura : number;
       let comprimento : number;
       let area : number;

       largura = parseFloat(prompt("Qual a largura do terreno ? "));
       comprimento = parseFloat(prompt("Qual o comprimento do terreno ? "));

       area = largura * comprimento ;

       if (area < 100) {
          console.log(`O terreno mede ${area}m² então é um Terreno Popular`);
       } else if (area >= 100 && area <= 500) {
          console.log(`O terreno mede ${area}m² então é um Terreno Master`);
       } else {
          console.log(`O terreno mede ${area}m² então é um Terreno VIP`);
       }



    } 

    calcularTerreno();

}

solution28();
pressEnterToExit();
