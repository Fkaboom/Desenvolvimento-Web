console.log(desconto(100, false, false));
function desconto(compra, cartao, convenio) {
  let desconto = 0;
  let descontoPreco = 0;
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
