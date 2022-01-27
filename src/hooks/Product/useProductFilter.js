import { useEffect, useState } from 'react';
import { addToDb } from '../../fakeDB';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('./ProductData.JSON')
            // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    // Cart Handler
    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCart(newCart);
        addToDb(product.id);
    }


    // Total Price
    let totalQuantity = 0;
    let total = 0;
    for (const product of carts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;


    return {
        products,
        handleAddToCart,
        carts,
        grandTotal,
        totalQuantity,
        total, tax, shipping
    }
};

export default useProductFilter;