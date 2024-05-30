// let nome = "Fernando";

// console.log(nome);

// nome = "Fernando Rodrigues";

// console.log(nome);

// const idade = 31;

// console.log(idade);

// console.log(typeof nome);

// console.log(typeof idade);

//Prompt

// const user = prompt("Infome seu nome");
// const age = prompt("Informe seu nome");

// console.log(`Olá ${user} como você está? Sua idade é ${age} anos`);

//Alert

// const z = 10;
// console.log(`O número digitado foi ${z}`);

// 5 - Math

// console.log(Math.max(5, 2, 3, 25, 10, 15, 18)); // Localiza o maio numero

// console.log(Math.floor(10.48)); //Arredondamento para baixo

// console.log(Math.ceil(15.05));

// console.log(Math.abs("-1"));
// console.log(Math.abs(-2));
// console.log(Math.abs(null));
// console.log(Math.abs());

// const userP = "Fernando";
// const userName = "Rodrigues";

// if (userP === "Fernando" && userName === "José") {
//   console.log(`Seja bem vindo ${userP}!`);
// } else {
//   console.log("User name inválido favor tente novamente");
// }


// let p = 0;

// while (p < 5) {
//   p++;
//   console.log(`Replicando o valor de p: ${p}`);
// }

// let x = 0;
// do {
//   console.log(`valor de x: ${x}`);
//   x++
// } while (x < 10);

// for (let t = 0; t < 10; t++) {
//   console.log(`O valor de t: ${t}`);
// };


// for (let y = 10; y > 4; y--) {
//   console.log(`O valor de y: ${y}`);
//   if (y === 5) {
//     break;
//   };
// };

for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(`O número ${j} é par:`);

  } else {
    console.log(`O número ${j} é impar`);
  };
};

const job = "Pedreiro"

switch (job) {
  case "Programador":
    console.log("Olá " + job);
    break;
  case "Advogado":
    console.log("Olá " + job);
    break;
  case "Engenheiro":
    console.log("Olá " + job);
    break;
  default:
    console.log("Profissão não localizada");
};
