const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

window.onload = () => {
    startProducts();
    renderProducts();
}

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

function startProducts() {
    let storedProducts = readStorage('products');
    // alert(storedProducts[0].price)
    if (storedProducts.length < 1) {
        recordStorage('products', products)
        console.log("Novos produtos cadastrados")
    } else {
        console.log("Os produtos já estavam cadastrados")
    }
}