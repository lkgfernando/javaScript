/*
Paulo vai investir 10.000 reias a uma taxa de juros simples de 10% a.a., quanto ele terá dqui a 5 anos

calculo do juros simples

j = C * i * t

onde:
j = juros simples
c = capital inicial
i = taxa de juros
t = tempo da aplicação

//Calculo do montande Jutos simples

M = C * ( 1 +  i * t)

Tabela
Tempo(ano) | Juros | Montante
*/

function arrendondar(valor) {
  return Math.round(valor * 100) / 100
}



function jurosSimples(value) {
  let acumulado;
  for (valor of value) {

    acumulado = valor.montante * (1 + valor.taxa * valor.tempo);


  }
  return acumulado;
}

const simulador = [
  { tempo: 12, taxa: 0.10, montante: 1000 },
  { tempo: 5, taxa: 0.05, montante: 10000 }
]

console.log(jurosSimples(simulador));

