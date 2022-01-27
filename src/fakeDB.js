const addToDb = id => {
    const stored_cart = getStoredCart();
    if (id in stored_cart) {
        stored_cart[id] = stored_cart[id] + 1;
    }
    else {
        stored_cart[id] = 1;
    }
    updateDb(stored_cart);
}
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const getStoredCart = () => {
    const exist = localStorage.getItem('shopping_cart');
    return exist ? JSON.parse(exist) : {};
}

export {
    addToDb,
    getStoredCart
}