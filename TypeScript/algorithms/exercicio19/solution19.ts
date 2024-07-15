/* 
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0). 
*/

import { prompt, pressEnterToExit } from "../../inputUtils";

function solution19() : void {


    function avaliarNotas() : void {

       let prova1 : number;
       let prova2 : number;
       let media : number;

       prova1 = parseFloat(prompt('Digite a nota da prova1'));
       prova2 = parseFloat(prompt('Digite a nota da prova2'));
       media = (prova1 + prova2) / 2;

       console.log(`A média das provas equivale a ${media.toFixed(1)}`);

       media >= 7 ? console.log("Aluno Aprovado !") : console.log("Aluno Reprovado !");
 
    }

    avaliarNotas();

}

solution19();
pressEnterToExit();

