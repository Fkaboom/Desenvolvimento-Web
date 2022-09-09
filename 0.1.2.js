function desconto(compra, cartao, convenio) {
  let descontoPreco = 0;
  if (cartao && convenio) {
    descontoPreco = compra * 0.15;
  } else if (cartao || convenio) {
    descontoPreco = compra * 0.1;
  }
  console.log('----------------------------------------------------');
  console.log('Desconto:');
  console.log(descontoPreco);
  console.log('____________________________________________________');
  console.log('Valor com desconto:');
  return compra - descontoPreco;
}
console.log(desconto(100, true, true));
