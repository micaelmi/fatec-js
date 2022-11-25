const itemsCart = document.querySelector('#items-cart')
const amount = document.querySelector("#amount")
const showCart = document.querySelector("#show-cart")
const emptyCart = document.querySelector("#empty-cart")



window.onload = () => {
    let cart = readStorage('cart');
    startProducts();
    if (cart.length > 0) {
        showCartOrEmptyMessage(true);
        renderCart();
    } else {
        showCartOrEmptyMessage(false);
    }
}

function renderCart() {
    let cart = readStorage('cart');
    let purchaseAmount = 0;
    cart.map((item) => {
        itemsCart.innerHTML +=
            `
            <tr>
            <th>
                <img
                src="${item.url}"
                alt="${item.title}"
                width="40"
                />
            </th>
            <th>${item.title}</th>
            <th>R$${item.price}</th>
            <th>
                <div class="quantity">
                    <button onclick="updateCart('sum', ${item.id})">
                        <img src="./img/PlusCircle.png" alt="Adicionar" />
                    </button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCart('sub', ${item.id})">
                        <img src="./img/MinusCircle.png" alt="Remover" />
                    </button>
                    <button onclick="updateCart('delete', ${item.id})">
                        <img src="./img/Trash.png" alt="Excluir" />
                    </button>
                </div>
            </th>
            <th>R$${item.price * item.quantity}</th>
            </tr>
            `
        purchaseAmount += (item.price * item.quantity)
    })

    amount.textContent = purchaseAmount
}

function updateCart(operation, id) {
    let cart = readStorage('cart');
    changeStorage(operation, id)
    if (cart.length > 0) {
        showCartOrEmptyMessage(true);
        itemsCart.innerHTML = ''
        renderCart()
    } else {
        showCartOrEmptyMessage(false);
    }
}

function showCartOrEmptyMessage(filled) {
    if (filled) {
        showCart.style.display = 'block'
        emptyCart.style.display = 'none'
    } else {
        showCart.style.display = 'none'
        emptyCart.style.display = 'block'
    }
}