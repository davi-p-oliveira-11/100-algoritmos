/*
Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello John, it's a pleasure to meet you!
*/

function greeting(name: string): string {
  return `Hello ${name} it's a pleasure to meet you !`;
}

console.log(greeting("John"));
