import { useEffect, useState } from 'react';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./ProductData.json')
            // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [filters, setFilters] = useState([]);

    const filterProduct = (categProduct) => {
        const updatedProduct = products.filter((curElem) => {
            return curElem.category === categProduct;
        });
        setFilters(updatedProduct);
    };


    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return {
        filters,
        filterProduct,
        handleAddToCart,
        cart
    }
};

export default useProductFilter;