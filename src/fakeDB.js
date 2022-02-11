const addToDb = _id => {
    const stored_cart = getStoredCart();
    if (_id in stored_cart) {
        stored_cart.max = 10;
        stored_cart[_id] += 1;

    }
    else {
        stored_cart[_id] = 1;
    }
    updateDb(stored_cart);
}
const DecrementToDb = _id => {
    const stored_cart = getStoredCart();
    stored_cart.min = 1
    if (_id in stored_cart) {
        stored_cart[_id] -= 1;
    }
    else {
        stored_cart[_id] = 1
    }
    updateDb(stored_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');

const removeFromDb = _id => {
    const exist = getDb()
    if (!exist) {

    }
    else {
        const shopping_cart = JSON.parse(exist)
        delete shopping_cart[_id]
        updateDb(shopping_cart);
    }
}
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const getStoredCart = () => {
    const exist = getDb();
    return exist ? JSON.parse(exist) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}
export {
    addToDb,
    getStoredCart,
    removeFromDb,
    clearTheCart,
    DecrementToDb
}