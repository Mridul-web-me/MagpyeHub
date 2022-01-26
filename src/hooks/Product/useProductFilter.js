import { useEffect, useState } from 'react';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('./ProductData.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCart(newCart);
    }

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
        total,tax,shipping
    }
};

export default useProductFilter;