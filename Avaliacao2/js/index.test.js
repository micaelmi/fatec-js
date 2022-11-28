function addToCart2(itemID) {
    let products = readStorage('products');
    let cart = readStorage('cart');
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