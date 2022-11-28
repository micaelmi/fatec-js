const cardsContainer = document.querySelector(".cards")
const itemsQuantity = document.querySelector("#items")


window.onload = () => {
    startProducts();
    renderProducts();
    showQuantityInCart()
}

function renderProducts() {
    let products = readStorage('products');
    products.map((item) => {
        cardsContainer.innerHTML +=
            `
            <div class="card">
                <img src="${item.url}" alt="${item.title}" />
                <div class="content">
                    <h3>${item.title}</h3>
                    <p class="description">
                        ${item.description}
                    </p>
                    <div class="flex">
                        <h3>R$${item.price}</h3>
                        <button class="add-to-cart" onclick="addToCart(${item.id})">
                        <img
                            src="./img/add-to-cart.svg"
                            alt="Adicionar ao carrinho"
                        />
                        <p>Adicionar ao carrinho</p>
                        </button>
                    </div>
                </div>
            </div>
            `
    })
}

function addToCart(itemID) {
    changeStorage("sum", itemID)
    showQuantityInCart()
}

function showQuantityInCart() {
    let itemsInCart = 0
    let cart = readStorage('cart');
    for (let i = 0; i < cart.length; i++) {
        itemsInCart += cart[i].quantity;
    }
    itemsQuantity.textContent = itemsInCart
}