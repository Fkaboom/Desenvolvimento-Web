function desconto(compra, cartao, convenio, primeiraCompra) {
  let descontoPreco = 0;
  let novoUsuario = 0;
  if (primeiraCompra) {
    novoUsuario = 0.05;
    novo = false;
  }
  descontoPreco = compra * novoUsuario;
  if (cartao && convenio) {
    descontoPreco = compra * (0.15 + novoUsuario);
  } else if (cartao || convenio) {
    descontoPreco = compra * (0.1 + novoUsuario);
  }

  if (descontoPreco > 100) {
    descontoPreco = 100;
  }

  console.log('----------------------------------------------------');
  console.log('Desconto:');
  console.log(descontoPreco.toFixed(0));
  console.log('____________________________________________________');
  console.log('Valor com desconto:');
  return compra - descontoPreco;
}

console.log(desconto(100, true, false, true));
