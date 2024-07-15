/* 
Create a program that reads the name and salary of an employee, showing a message at the end. Example:
Employee Name: Jane doe
Salary: 1850.45
The employee Jane Doe has a salary of R$1850.45 in June.
*/

function helloEmployee(
  name: string,
  salary: number,
  month: string
): number | string {
  return `The employee ${name} has a salary of ${salary.toFixed(
    2
  )} USD in ${month}`;
}

console.log(helloEmployee("Jane", 2000, "December"));
console.log(helloEmployee("John", 2500, "June"));
console.log(helloEmployee("Paul", 22000, "January"));
