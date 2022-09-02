const Calculadora = require('./src/calculadora');
const prompt = require("prompt-sync")()

let num1, num2, op, resp;

num1 = prompt("Digite o primeiro número: ");
num2 = prompt("\nDigite o segundo número: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

console.log("\nConsiderando os números ", num1, " e ", num2, ", escolha uma das seguintes operações:\n");

op = prompt("+ (adição), - (subtração), / (divisão), ^ (potenciação) ou * (multiplicação): ");

resp = Calculadora.resultado(num1, num2, op);

console.log("Resposta: ", resp);