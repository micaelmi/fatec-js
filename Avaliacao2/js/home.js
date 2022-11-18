const cardsContainer = document.querySelector(".cards")
const addToCartButton = document.querySelectorAll(".add-to-cart")

window.onload = () => {
    renderProducts()
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
    if (cart.lenght < 1) {
        cart = []
    }
    let product = products[itemID]
    if (1 != 1) { // SE JÁ TIVER ESSE ITEM NO CARRINHO...
        alert("Adicionando outra unidade...")
        cart.id.quantity++;
    } else {
        alert(`Adicionando ${product.title} ao carrinho...`)
        cart.push({
            id: product.id,
            url: product.url,
            title: product.title,
            price: product.price,
            quantity: 1,
        })
    }
    products[itemID].stored--;
    recordStorage('cart', cart);
    recordStorage('products', products);
}