class Lancamento {

  constructor(categoria, tipo, valor) {
    if (tipo !== "Receita" && tipo !== "Despesa") {
      throw new Error("Lançamento inválido: Tipo deve ser Receita ou Despesa");
    }
    if (valor <= 0) {
      throw new Error("Lançamento inválido: Valor deve ser maior que Zero");
    }
    if (categoria === "") {
      throw new Error("Lançamento inválido: Categoria não pode ser vazia!");
    }
    this.categoria = categoria;
    this.tipo = tipo;
    this.valor = valor;
  }

}