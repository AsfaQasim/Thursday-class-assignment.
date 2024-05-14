// Assignment 01
// Miles to Kilometers Converter(Operator)
// import inquirer from "inquirer";
// let miles: number = 5
// let convert_into_km: number = miles * 1.60934
// let kilometers = convert_into_km
// console.log(`The distance of ${kilometers} kilometers is equal to ${miles} miles `);
// Assignment 02
// Evaluating number game
// import inquirer from "inquirer";
// let dynamicNum = Math.floor(Math.random() * 5 +1)
// let userNum = await inquirer.prompt
// (
//     [
//         {
//             name: "name",
//             type: "number",
//             message: "Enter the number..."
//         }
//     ]
// )
// let {name} = userNum
// if(name === dynamicNum){
//   console.log(`Your guessed is equal to dynamic value.`);
// }
// else if(name > dynamicNum){
//     console.log(`Your guessed is greater than dynamic value.`);
// }
// else
// {
//     console.log(`Your guessed is less than dynamic value`);
// }
// Assignment 03
// Friend Checker Game
// import inquirer from "inquirer";
// let user:{name: string} = await inquirer.prompt([
//   {
//     name: "name",
//     type: "input",
//     message: "Enter your name",
//   },
// ]);
// let  {name } = user;
// let userName = name.toLowerCase();
// switch (userName) {
//   case "asfa": console.log("You're known");
//   break;
//   case"jaweriya": console.log("You're known");
//   break;
//   case "misbah":console.log("You're known");
//   break;
//     case "mutaiba" :console.log("You're known");
//  break;
//  case "areeba":
//  console.log("You're known");
//   break;
//   default:
// console.log("Default response");
// }
// Assignment 04
// Functions
// let num1 : number = 2
// let num2 : number =  4
// function num(num1 : number, num2 : number): void {
//   console.log(num1+ num2);
// }
// // Passing an argument through by using variable
// num(2,5)
// // passing an argument through number
// num(3,5)
// Assignment 05
// Calculator Project Using Function
// import inquirer from "inquirer";
// const user = await inquirer.prompt([
//   {
//     name: "firstNumber",
//     type: "number",
//     message: "Enter first number",
//   },
//   {
//     name: "secondNumber",
//     type: "number",
//     message: "Enter second number",
//   },
//   {
//     name: "operator",
//     type: "list",
//     message: "Select one of the operator to perform operation",
//     choices: ["Addition", "Subtraction"],
//   },
// ]);
// let { firstNumber, secondNumber, operator } = user;
// function num(num1: number, num2: number, operation: string) {
//   switch (operation) {
//     case "Addition":
//       return `The sum of ${num1} && ${num2} is ${num1 + num2}`;
//       break;
//     case "Subtraction":
//       return `The difference  of ${num1} && ${num2} is ${num1 - num2}`;
//       break;
//     default: {
//       console.log("Please select a valid number");
//     }
//   }
// }
// let response = num(firstNumber, secondNumber, operator);
// console.log(response);
// Assignment 06
// Anonymous Function
// function expression assigned to a variable
const func1 = function (str) {
    console.log(str);
};
// Passing an argument into the function
func1("Hello World");
// Normal function declaration
function func2(str) {
    console.log(str);
}
// Passing an argument into the normal function declaration
func2("Hello Asifa");
export {};
