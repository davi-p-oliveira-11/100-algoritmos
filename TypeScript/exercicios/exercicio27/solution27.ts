/*
27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/

import { prompt, pressEnterToExit } from "../../inputUtils";


function solution27() : void {

     function avaliarNota() : void {

        let prova1 : number 
        let prova2 : number;
        let media : number;

        prova1 = parseFloat(prompt('Digite a nota da prova 1 '));
        prova2 = parseFloat(prompt('Digite a nota da prova 2 '));

        media = (prova1 + prova2) / 2 ;

        if (media <= 4.9) {
          console.log(`O aluno obteve uma média de ${media.toFixed(1)} e foi REPROVADO !`);
        } else if (media >= 5 && media <= 6.9) {
          console.log(`O aluno obteve uma média de ${media.toFixed(1)} e vai para RECUPERAÇÃO !`);
        } else {
          console.log(`O aluno obteve uma média de ${media.toFixed(1)} e foi APROVADO !`);
        }

     }

     avaliarNota();
}

solution27();
pressEnterToExit();