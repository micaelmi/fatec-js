const orderList = document.querySelector('.order-list')
let products = ``, amount = 0;

window.onload = () => {
  renderOrders()
}

function renderOrders() {
  let orders = readStorage('orders');

  if (orders.length < 1) {
    orderList.innerHTML =
      '<h2 class="center">Nenhuma compra foi realizada ainda</h2>' +
      '<p class="center">Corra para encher seu carrinho e ter um lindo natal!</p>';
    return;
  }


  orders.map((item) => {
    products = ``, amount = 0;
    item.produtos.map((prod) => {
      if (prod.quantity > 0) {
        products += `<p>${prod.quantity}x ${prod.title} = R$${prod.price} </p>`
        amount += prod.quantity * prod.price
      }
    })

    orderList.innerHTML +=
      `
                <div class="order">
                <div class="header">
                  <h2>${item.nome}</h2>
                  <h3>${item.date}</h3>
                </div>
                <div class="content">
                  <div class="client">
                    <h3>Dados</h3>
                    <p><strong>CPF:</strong> ${item.cpf}</p>
                    <p><strong>E-mail:</strong> ${item.email}</p>
                    <p><strong>Endereço:</strong> ${item.logradouro}, ${item.numero} - ${item.cep}</p>
                  </div>
                  <div class="products">
                    <h3>Produtos</h3>
                    <div class="order-products">
                      ${products}
                      <p>Total: R$ ${amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            `
  })
}