class CalculadoraJuros {
  constructor(capital, taxa, tempo) {
    this.capital = capital;
    this.taxa = taxa;
    this.tempo = tempo;
  }

  calculaJuros() {
    this.calculaJurosSimples();
  }


  calculaJurosSimples() {
    let montante = 0;

    return montante = this.capital * (1 + this.taxa * this.tempo);


  }
}

const calculadora = new CalculadoraJuros(1000, 10 / 100, 5);

console.log(calculadora.calculaJurosSimples());