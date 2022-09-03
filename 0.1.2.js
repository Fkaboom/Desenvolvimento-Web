console.log(desconto(100, true, true));
function desconto(compra, cartao, convenio) {
  let desconto = 0;
  let decontoPreco = null;
  if (cartao && convenio) {
    descontoPreco = compra * (desconto + 0.15);
  } else if (cartao || convenio) {
    descontoPreco = compra * (desconto + 0.1);
  }
  console.log('Desconto:');

  console.log(descontoPreco);
  console.log('____________________________________________________');
  console.log('Valor com desconto:');

  return compra - descontoPreco;
}
