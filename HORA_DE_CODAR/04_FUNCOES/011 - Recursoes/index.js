const untilTen = (n, m) => {
  if (n < 10) {
    console.log("a função parou de executar");
  } else {
    const x = n - m;
    console.log(x);
    untilTen(x, m);
  }

};

untilTen(100, 7);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 3;
const result = factorial(num);

console.log(`O fatorial de ${num} é ${result}`);