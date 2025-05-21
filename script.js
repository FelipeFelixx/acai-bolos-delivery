function enviarPedido() {
  const acai = document.getElementById("acai");
  const doce = document.getElementById("doce");
  const trufa = document.getElementById("trufa");
  const endereco = document.getElementById("endereco").value;
  const troco = document.getElementById("troco").value;

  let pedido = "";
  let total = 0;

  if (acai.value > 0) {
    pedido += `Açaí: ${acai.options[acai.selectedIndex].text}\n`;
    total += parseFloat(acai.value);
  }

  if (doce.value > 0) {
    pedido += `Doce: ${doce.options[doce.selectedIndex].text}\n`;
    total += parseFloat(doce.value);
  }

  if (trufa.value > 0) {
    pedido += `Trufa: ${trufa.options[trufa.selectedIndex].text}\n`;
    total += parseFloat(trufa.value);
  }

  if (!endereco) {
    alert("Por favor, insira o endereço de entrega.");
    return;
  }

  pedido += `\nEndereço: ${endereco}`;
  if (troco) pedido += `\nTroco para: R$${troco}`;
  pedido += `\nTotal: R$${total}`;

  document.getElementById("resumo-pedido").innerText = pedido;
  document.getElementById("total").innerText = `Total: R$ ${total}`;

  const mensagem = encodeURIComponent(pedido);
  const url = `https://wa.me/55SEUNUMERO?text=${mensagem}`;
  window.open(url, "_blank");
}
