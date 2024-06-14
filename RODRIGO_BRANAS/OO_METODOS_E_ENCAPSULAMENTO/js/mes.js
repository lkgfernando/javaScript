class Mes {
  constructor(nome, saldoInicial) {
    if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório");
    this.nome = nome;
    this.saldoInicial = saldoInicial;
    this.totalizador = { saldo: 0, saldoInicial, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesa: [] };
    this.lancamentos = []
  }

  adicionarLancamento(lancamento) {
    this.lancamentos.push(lancamento);
  }

  calculaSaldo() {
    this.totalizador.saldo = this.saldoInicial;
    this.apurarReceitas()
    this.apurarDespesas();
    this.distribuirDespesa();
    this.apurarJuros();
    this.apurarRendimentos();

  }
  apurarReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "Receita") {
        this.totalizador.saldo += lancamento.valor;
        this.totalizador.receitas += lancamento.valor;
      }
    }
  }
  apurarDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "Despesa") {
        this.totalizador.saldo -= lancamento.valor;
        this.totalizador.despesas += lancamento.valor;
      }

    }
  }
  distribuirDespesa() {
    const distribuicaoDeDespesa = [];
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "Despesa") {
        const percentual = arredondar((lancamento.valor / this.totalizador.despesas) * 100);
        distribuicaoDeDespesa.push({ categoria: lancamento.categoria, percentual });
      }
    }

    return this.totalizador.distribuicaoDeDespesa = distribuicaoDeDespesa;
  }
  apurarJuros() {
    if (this.totalizador.saldo < 0) {
      this.totalizador.juros = this.calcularJuros(this.totalizador.saldo);
      this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.juros);
    }
  }

  apurarRendimentos() {
    if (this.totalizador.saldo > 0) {
      this.totalizador.rendimentos = this.calculaRendimentos(this.totalizador.saldo);
      this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.rendimentos);
    }
  }

  calcularJuros(valor) {
    const juros = arredondar(valor * 0.1);
    return juros;
  }

  calculaRendimentos(valor) {
    const rendimentos = arredondar(valor * 0.005);
    return rendimentos;
  }

}