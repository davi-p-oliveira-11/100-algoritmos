import { prompt, pressEnterToExit } from "../../inputUtils";

function solution02() {

  function dizerOla() {

    let personName : string; 
    
    personName = prompt("Qual é o seu nome ? ") || '';

    console.log(`Olá ${personName} é um prazer te conhecer !`)
    
  }

  dizerOla();
}

solution02();
pressEnterToExit();