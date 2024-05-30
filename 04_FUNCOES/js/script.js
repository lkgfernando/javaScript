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
