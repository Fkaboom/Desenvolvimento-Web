function desconto(compra, cartao, convenio, primeiraCompra) {
  let descontoPreco = 0;
  let novoUsuario = 0;
  if (primeiraCompra) {
    novoUsuario = 0.05;
    novo = false;
  }
  if (cartao && convenio) {
    descontoPreco = compra * (0.15 + novoUsuario);
  } else if (cartao || convenio) {
    descontoPreco = compra * (0.1 + novoUsuario);
  } else {
    descontoPreco = compra * novoUsuario;
  }
  if (descontoPreco > 100) {
    descontoPreco = 100;
  }

  console.log('----------------------------------------------------');
  console.log('Desconto:');
  console.log(descontoPreco);
  console.log('____________________________________________________');
  console.log('Valor com desconto:');
  return compra - descontoPreco;
}

console.log(desconto(100000, true, true, true));
console.log(desconto(100, true, true, true));
console.log(desconto(100, true, true, false));
