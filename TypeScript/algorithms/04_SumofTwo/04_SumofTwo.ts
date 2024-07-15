/* 
Develop an algorithm that reads two integers and displays the sum between them.
Example:
Enter a value: 8
Enter another value: 5
The sum of 8 and 5 is equal to 13.
*/

function sumOfTwo(num1: number, num2: number): number | string {
  return `The sum between ${num1} and ${num2} is equal to ${num1 + num2} `;
}

console.log(sumOfTwo(2, 2));
console.log(sumOfTwo(3, 12));
console.log(sumOfTwo(8, 5));
