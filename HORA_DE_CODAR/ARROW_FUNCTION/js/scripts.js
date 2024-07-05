const raizQuadrada = (x) => {
  return x * x;
};


console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(8));


const mutiplicate = (m, n) => {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  } else {
    console.log(`Olá ${name}`)
  }
};

console.log(greeting());
console.log(greeting("Fernando"));
console.log(mutiplicate(5));
console.log(mutiplicate(2, 10));

// Argumentos Default
const customGreenting = (nome, greet = "Olá") => {
  return `${greet}, ${nome}`;
};

console.log(customGreenting("Fernando"));
console.log(customGreenting("Fernando", "Bom dia"));

const reaptText = (text, repet = 3) => {
  for (let i = 0; i < repet; i++) {
    console.log(`${text}`);
  }
};

reaptText("Testando padrão");
reaptText("Repita 10 vezes", 10);