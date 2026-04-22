//Calculator 

function add (a: number, b:number): number {
    return a + b;

}

function sub (a: number, b:number): number {
    return a - b;

}

function mul (a: number, b:number): number {
    return a * b;

}

function div (a: number, b:number): number {
    return a/b;

}

let num1: number = 10
let num2: number = 20

console.log("addition : ", add(num1,num2));
console.log("subtraction : ", sub(num1,num2));
console.log("multiplication : ", mul(num1,num2));
console.log("division : ", div(num1,num2));
// first npm install -g typescript
// then tsc EXP02.ts to compile the TypeScript code to JavaScript   
// then node EXP02.js to run the compiled JavaScript code