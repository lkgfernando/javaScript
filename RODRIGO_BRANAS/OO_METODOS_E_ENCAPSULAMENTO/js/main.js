const saldoInicial = 0;
const janeiro = new Mes("janeiro", saldoInicial);
janeiro.adicionarLancamento(new Lancamento("Sálario", "Receita", 3600));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "Despesa", 754));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "Despesa", 110));
janeiro.adicionarLancamento(new Lancamento("Conta de Agua", "Despesa", 93));
janeiro.adicionarLancamento(new Lancamento("Internet", "Despesa", 99));
janeiro.adicionarLancamento(new Lancamento("Transporte", "Despesa", 35));
janeiro.adicionarLancamento(new Lancamento("Lazer", "Despesa", 424));
janeiro.adicionarLancamento(new Lancamento("Alimentacao", "Despesa", 1500));
janeiro.adicionarLancamento(new Lancamento("Condominio", "Despesa", 110));
janeiro.adicionarLancamento(new Lancamento("Farmacia", "Despesa", 110));
janeiro.adicionarLancamento(new Lancamento("Cartao Crédito", "Despesa", 330));

janeiro.calculaSaldo(janeiro);
console.log(janeiro);

const fevereiro = new Mes("fevereiro", janeiro.totalizador.saldo);
fevereiro.adicionarLancamento(new Lancamento("Sálario", "Receita", 4500));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "Despesa", 1000));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "Despesa", 150));
fevereiro.adicionarLancamento(new Lancamento("Conta de Agua", "Despesa", 153));
fevereiro.adicionarLancamento(new Lancamento("Internet", "Despesa", 99));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "Despesa", 35));
fevereiro.adicionarLancamento(new Lancamento("Lazer", "Despesa", 569));
fevereiro.adicionarLancamento(new Lancamento("Alimentacao", "Despesa", 2000));
fevereiro.adicionarLancamento(new Lancamento("Condominio", "Despesa", 110));
fevereiro.adicionarLancamento(new Lancamento("Farmacia", "Despesa", 110));
fevereiro.adicionarLancamento(new Lancamento("Cartao Crédito", "Despesa", 330));
fevereiro.calculaSaldo();
console.log(fevereiro);


const marco = new Mes("março", fevereiro.totalizador.saldo);
marco.adicionarLancamento(new Lancamento("Sálario", "Receita", 4500));
marco.adicionarLancamento(new Lancamento("Aluguel", "Despesa", 800));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "Despesa", 150));
marco.adicionarLancamento(new Lancamento("Conta de Agua", "Despesa", 153));
marco.adicionarLancamento(new Lancamento("Internet", "Despesa", 99));
marco.adicionarLancamento(new Lancamento("Transporte", "Despesa", 35));
marco.adicionarLancamento(new Lancamento("Lazer", "Despesa", 569));
marco.adicionarLancamento(new Lancamento("Alimentacao", "Despesa", 1500));
marco.adicionarLancamento(new Lancamento("Condominio", "Despesa", 110));
marco.adicionarLancamento(new Lancamento("Farmacia", "Despesa", 110));
marco.adicionarLancamento(new Lancamento("Cartao Crédito", "Despesa", 330));
marco.calculaSaldo()
console.log(marco);
