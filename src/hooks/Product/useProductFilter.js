import { useEffect, useState } from 'react';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./ProductData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    const handleAddToCart = (product) => {
        console.log(product);
    }

    return {
        products,
        handleAddToCart
    }
};

export default useProductFilter;