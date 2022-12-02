const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', function () {
    menu.classList.add('open')
})

closeMenu.addEventListener('click', function () {
    menu.classList.remove('open')
})

function readStorage(key) {
    if (window.localStorage) {
        let aux = JSON.parse(localStorage.getItem(key));
        let dados;
        if (aux != null) {
            dados = aux;
        }
        else {
            dados = [];
        }
        return dados;
    }
    else {
        alert("Operação não disponível");
    }
    return false;
}

function recordStorage(key, value) {
    if (window.localStorage) {
        localStorage.setItem(key, JSON.stringify(value))
    } else {
        alert("Local Storage não suportado")
    }
}

// ===+===+===+===+===+===+===+===+===+===+===+===+===+===+===+===+===+===+===

function setInitialProducts() {
    const products = [
        {
            id: 0,
            url: "./img/product1.png",
            title: "Mini árvore decorada",
            description: "Uma pequena árvore com 50cm, iluminada e com bonecos para decorar o entorno. Ideal para lugares pequenos.",
            price: 51.00,
            stored: 4,
        },
        {
            id: 1,
            url: "./img/product2.png",
            title: "Bonequinhos Natalinos",
            description: "Miniaturas dos principais personagens do Natal, Papai Noel, Boneco de Neve e Rena. Decore qualquer móvel com eles.",
            price: 27.00,
            stored: 8,
        },
        {
            id: 2,
            url: "./img/product3.png",
            title: "Pisca-pisca amarelo",
            description: "Fio de pisca-pisca LED com 15m, 127v. Para pendurar na casa e instalar o clima natalino.",
            price: 78.00,
            stored: 3,
        },
        {
            id: 3,
            url: "./img/product4.png",
            title: "Bolas iluminadas",
            description: "Varal de bolas iluminadas com papais noeis dentro, contém 8 unidades. Brinde de uma bola reserva.",
            price: 65.00,
            stored: 5,
        }
    ]


    const cart = [
        {
            id: 0,
            url: "./img/product1.png",
            title: "Mini árvore decorada",
            description: "Uma pequena árvore com 50cm, iluminada e com bonecos para decorar o entorno. Ideal para lugares pequenos.",
            price: 51.00,
            quantity: 0,
        },
        {
            id: 1,
            url: "./img/product2.png",
            title: "Bonequinhos Natalinos",
            description: "Miniaturas dos principais personagens do Natal, Papai Noel, Boneco de Neve e Rena. Decore qualquer móvel com eles.",
            price: 27.00,
            quantity: 0,
        },
        {
            id: 2,
            url: "./img/product3.png",
            title: "Pisca-pisca amarelo",
            description: "Fio de pisca-pisca LED com 15m, 127v. Para pendurar na casa e instalar o clima natalino.",
            price: 78.00,
            quantity: 0,
        },
        {
            id: 3,
            url: "./img/product4.png",
            title: "Bolas iluminadas",
            description: "Varal de bolas iluminadas com papais noeis dentro, contém 8 unidades. Brinde de uma bola reserva.",
            price: 65.00,
            quantity: 0,
        }
    ]

    recordStorage('products', products)
    recordStorage('cart', cart)
}

function startProducts() {
    let storedProducts = readStorage('products');
    let storedcart = readStorage('cart');
    if (storedProducts.length < 1 || storedcart.length < 1) {
        setInitialProducts()
        console.log("Novos produtos cadastrados")
    } else {
        console.log("Os produtos já estavam cadastrados")
    }
}


function changeStorage(operation, id) {
    let products = readStorage('products');
    let cart = readStorage('cart');
    let product, cartItem

    let index = 0;
    let selectedItems = false;
    do {
        if (products[index].id === id) {
            product = products[index];
            cartItem = cart[index];
            selectedItems = true;
        } else {
            index++;
        }
    } while (selectedItems == false)

    let i = 0;
    let updated = false;
    do {
        if (products[i].id === id) {
            if (operation === "sub") {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                    product.stored++;
                } else {
                    cartItem.quantity = 0;
                    product.stored++;
                    iziToast.show({
                        title: 'Produto removido do carrinho',
                        timeout: 2000,
                        color: 'red',
                    });
                }
            }
            if (operation === "sum") {
                if (product.stored > 0) {
                    cartItem.quantity++;
                    product.stored--;

                    iziToast.show({
                        title: 'Item adicionado',
                        message: 'quantidade: ' + cartItem.quantity,
                        timeout: 2000,
                        color: 'green'
                    });
                } else {
                    iziToast.show({
                        title: 'Você já adicionou todo o estoque desse produto',
                        timeout: 2000,
                        color: 'yellow',
                    });
                }
            }
            if (operation === "delete") {
                product.stored += cartItem.quantity;
                cartItem.quantity = 0;
                iziToast.show({
                    title: 'Produto excluído do carrinho',
                    timeout: 2000,
                    color: 'red',
                });
            }

            recordStorage('cart', cart);
            recordStorage('products', products);
            updated = true;
        } else {
            i++;
        }
    } while (updated == false)
}

const audio = document.getElementById("music");
audio.volume = 0.2;