
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === 'M') {
    return true
    console.log('Pode ser adotado!')

  } return false
    console.log('Não pode ser adotado')
  }

function calcularConsumoDeRacao(nome, estoque, peso) {
  if(peso != 14.5){
    console.log(`O ${nome} irá comer apenas 3000 gramas hoje.`)
    return false
  } 
  console.log(`Com o peso de 14,5, o ${nome} poderá comer 4350 gramas hoje.`)
  return 4350
  }

  function decidirTipoDeAtividadePorPorte(porte){
    if(porte = 'pequeno'){
     return 'brincar dentro de casa'
    } false
  }
 
  async function buscarDadoAsync(nome){
  return 'Pipoca'
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
