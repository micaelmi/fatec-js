// const register = document.getElementById('register')
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

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

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

    if (cpf.value.length < 11) {
        iziToast.show({
            title: 'Preencha o campo "CPF" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (nome.value.length < 3) {
        iziToast.show({
            title: 'Preencha o campo "Nome" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (validateEmail(email.value) === null) {
        iziToast.show({
            title: 'Preencha o campo "Email" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (cep.value.length < 7) {
        iziToast.show({
            title: 'Use um CEP válido',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (uf.value.length < 1) {
        iziToast.show({
            title: 'Preencha o campo "Estado" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (cidade.value.length < 2) {
        iziToast.show({
            title: 'Preencha o campo "Cidade" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (bairro.value.length < 2) {
        iziToast.show({
            title: 'Preencha o campo "Bairro" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }
    if (numero.value < 1) {
        iziToast.show({
            title: 'Preencha o campo "Número" corretamente',
            timeout: 2000,
            color: 'yellow',
        });
    }

    if (
        cpf.value.length > 11 &&
        nome.value.length > 3 &&
        validateEmail(email.value) != null &&
        cep.value.length > 7 &&
        uf.value.length > 1 &&
        cidade.value.length > 2 &&
        bairro.value.length > 2 &&
        numero.value > 0
    ) return true;
    else return false;
}

function finishPurchase() {
    let cart = readStorage('cart');
    let orders = readStorage('orders');
    if (formValidation() === true) {
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
            date: today,
        })
        recordStorage('orders', orders)
        setInitialProducts() // REINICIA OS PRODUTOS E O CARRINHO
        iziToast.show({
            title: 'Compra Finalizada!',
            timeout: 2000,
            color: 'green',
        });
        setInterval(() => {
            window.location.href = '/completed-purchase.html';
        }, 1000)
    } else {
        iziToast.show({
            title: 'Preencha os campos corretamente',
            timeout: 2000,
            color: 'red',
        });
    }

}

function verifyIfUserExists(content) {
    let orders = readStorage('orders');
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].cpf === content) {
            nome.value = orders[i].nome
            email.value = orders[i].email
            cep.value = orders[i].cep
            uf.value = orders[i].uf
            cidade.value = orders[i].cidade
            bairro.value = orders[i].bairro
            logradouro.value = orders[i].logradouro
            numero.value = orders[i].numero
            return;
        }
    }
}

finishPurchaseButton.addEventListener('click', finishPurchase)