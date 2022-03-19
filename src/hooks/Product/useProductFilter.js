import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakeDB';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch('./ProductData.JSON')
        // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                const count = data;
                const pageNumber = Math.ceil(count / 2);
                setPageCount(pageNumber)
                console.log(data);
            });
    }, []);

    // Get Stored Cart
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                console.log(_id);
                const AddedProduct = products.find(product => product._id === _id);
                if (AddedProduct) {
                    const quantity = savedCart[_id];
                    AddedProduct.quantity = quantity;
                    console.log(quantity);
                    storedCart.push(AddedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    // Cart Handler
    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCart(newCart);
        addToDb(product._id);
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
        total, tax, shipping,
        pageCount
    }
};

export default useProductFilter;