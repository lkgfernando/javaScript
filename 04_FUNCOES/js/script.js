function myFunction() {
  console.log("Hello Word, My first role!");
}

myFunction();

const myFunctionInVariable = function () {
  console.log("Function in variable!");
};

myFunctionInVariable();

function functionWithParameter(text) {
  console.log(`Print Out: ${text}`);
}

const myText = "Hello, Whats your name?";
functionWithParameter(myText);

// Return

const a = 10
const b = 20
const c = 30
const d = 40

function sumValues(n1, n2) {
  return n1 + n2;
}

const result = sumValues(a, b);

console.log(result);
console.log(sumValues(d, c));
console.log("Lemão Galego");

//Função em escopo

let y = 20;

function testing() {
  let y = 10;
  return console.log(`Y dentro da function: ${y}`);
}

console.log(`Y Fora da function: ${y} `);

testing();

//Escopo aninhado
console.log("*************** ESCOPO ANINHADO ********************");
let x = 20;

function nestedScope() {
  let x = 30;

  if (true) {
    let x = 40;
    console.log(`Primeiro IF: ${x}`);

    if (true) {
      let x = 50;
      console.log(`Segundo IF: ${x}`);
    }

  }
  console.log(`Escopo da função: ${x}`);
}

nestedScope();

console.log(`Escopo global: ${x}`);



