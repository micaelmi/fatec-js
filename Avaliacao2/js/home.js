const cardsContainer = document.querySelector(".cards")
const itemsQuantity = document.querySelector("#items")

window.onload = () => {
    startProducts();
    renderProducts();
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
    let products = readStorage('products');
    let cart = readStorage('cart');
    if (cart.length < 1) {
        cart = []
    }
    let product = products[itemID]
    let itemFound = []
    itemFound = cart.find(({ id }) => id === itemID)
    if (itemFound !== undefined) {
        changeStorage("sum", itemID)
    } else {
        cart.push({
            id: product.id,
            url: product.url,
            title: product.title,
            price: product.price,
            quantity: 1,
        })
        product.stored--;
        recordStorage('cart', cart);
        recordStorage('products', products);

        iziToast.show({
            title: product.title + ' adicionado(a) com sucesso!',
            timeout: 2000,
            color: 'green',
            balloon: true,
        });
    }
    itemsQuantity.textContent = cart.length
}
