class CalcControler {

  constructor() {
    this._displayCalc = "0";
    this._dataAtual;
  }

  get displayCalc() {
    return this._displayCalc;
  }
  get dataAtual() {
    return this._dataAtual;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }
  set dataAtual(valor) {
    this._dataAtual = valor;
  }
}