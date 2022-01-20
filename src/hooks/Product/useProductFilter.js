import { useEffect, useState } from 'react';

const useProductFilter = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./ProductData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const [filters, setFilters] = useState([]);
    
    const filterProduct = (categProduct) => {
		const updatedProduct = products.filter((curElem) => {
			return curElem.categorey === categProduct;
		});
		setFilters(updatedProduct);
	};
    
    
    const handleAddToCart = (product) => {
        console.log(product);
    }

    return {
        filters,
        filterProduct,
        handleAddToCart
    }
};

export default useProductFilter;