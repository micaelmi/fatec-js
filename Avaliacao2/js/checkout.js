const cpf = document.getElementById('cpf')
const nome = document.getElementById('name')
const email = document.getElementById('email')

const cep = document.getElementById('cep')
const uf = document.getElementById('uf')
const cidade = document.getElementById('cidade')
const bairro = document.getElementById('bairro')
const logradouro = document.getElementById('logradouro')
const numero = document.getElementById('numero')

let productsInCart = document.getElementById('products')
const finishPurchaseButton = document.getElementById('finish-purchase')

window.onload = () => {
    showProductsInCart();
}

// MASCARA DE CPF NO INPUT
new Cleave('#cpf', {
    blocks: [3, 3, 3, 2],
    delimiters: ['.', '.', '-'],
    numericOnly: true
});

// MASCARA DE CEP NO INPUT
new Cleave('#cep', {
    blocks: [5, 3],
    delimiter: '-',
    numericOnly: true
});

function showProductsInCart() {
    let cart = readStorage('cart');
    cart.map((item) => {
        if (item.quantity > 0) {
            productsInCart.innerHTML +=
                `
            <p>${item.title} x${item.quantity}</p> <br />
            `
        }
    })
}

function formValidation() {
    if (
        cpf.value.length > 11 &&
        nome.value.length > 3 &&
        email.value.length > 8 &&
        cep.value.length > 7 &&
        uf.value.length > 1 &&
        cidade.value.length > 2 &&
        bairro.value.length > 2 &&
        numero.value > 0
    )
        return true;
    else
        return false;
}

function finishPurchase() {
    let cart = readStorage('cart');
    let orders = readStorage('orders');
    if (orders.length < 0) {
        orders = []
    }
    if (formValidation) {
        orders.push({
            cpf: cpf.value,
            nome: nome.value,
            email: email.value,
            cep: cep.value,
            uf: uf.value,
            cidade: cidade.value,
            bairro: bairro.value,
            logradouro: logradouro.value,
            numero: numero.value,
            produtos: cart,
        })
        recordStorage('orders', orders)
        iziToast.show({
            title: 'Compra Finalizada!',
            timeout: 2000,
            color: 'green',
        });
        console.log(orders)
        window.location.href = './completed-purchase.html';
    } else {
        iziToast.show({
            title: 'Preencha os campos corretamente',
            timeout: 2000,
            color: 'red',
        });
    }
}