/*
Create a program that reads two grades of a student in a subject and displays their average on the screen.
Example:
Grade 1: 4.5
Grade 2: 8.5
The average between 4.5 and 8.5 is 6.5
*/

function calculateAverage(test1: number, test2: number): number | string {
  return `The average between ${test1} and ${test2} is ${(test1 + test2) / 2}`;
}

console.log(calculateAverage(4.5, 8.5));
