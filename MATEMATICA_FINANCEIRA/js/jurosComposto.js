/*
Assim, nos juros composto temos que o montante e o juros pode ser calculado da
seguinte forma:

  M = C * (1 + i)^t
  J = M - C

  //

  VF = VP * (1 + i) ^ t
  VP = VF / (1 + i) ^ t



e
Onde:
M = montante;
C = capital inicial;
i = taxa de juros;
t = tempo da aplicação;
J = juros composto.
VF = Valor Futuro
VP = Valor Presente
*/

function arredondar(valor) {
  return Math.round(valor * 100) / 100
}

function montanteJurosComposto(valores) {

  for (let valor of valores) {
    valorMontante = valor.capitalInicial * Math.pow((1 + valor.taxa), valor.tempo);
  }

  return valorMontante
}



const calcJuros = [
  { capitalInicial: 1000, taxa: 0.10, tempo: 5 }
]

const montante = montanteJurosComposto(calcJuros);

console.log(arredondar(montante))

//Nos juros composto, uma taxa de 24%a.a. corresponde a que taxa por mês
console.log(Math.pow(12, 1 + 0.24 - 1))

console.log(`Taxa trimestral: ${arredondar(Math.pow(1 + 0.07, 4) - 1)}`)