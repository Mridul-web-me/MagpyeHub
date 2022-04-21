import { useEffect, useState } from 'react';
import { addToDb, getStoredCart, removeFromDb } from '../../fakeDB';

const useProductFilter = () => {

    const [AllProducts, setAllProducts] = useState([]);
    const [filters, setFilters] = useState([])
    const [carts, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)
    // const size = 5;
    useEffect(() => {
        fetch('./ProductData.JSON')
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data.products)
                setLoading(false)
                setFilters(data.products)
            });
    }, []);


    const filterProduct = (catProduct) => {
        const updatedProduct = AllProducts.filter((curElem) => {
            return curElem.category === catProduct;
        });
        setFilters(updatedProduct);
    };

    // Get Stored Cart
    useEffect(() => {
        if (AllProducts.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            setLoading(false)
            for (const _id in savedCart) {
                const AddedProduct = AllProducts.find(product => product._id === _id);
                if (AddedProduct) {
                    const quantity = savedCart[_id];
                    AddedProduct.quantity = quantity;
                    // console.log(quantity);
                    storedCart.push(AddedProduct);
                }
            }
            setCart(storedCart);
            setLoading(false)
        }
    }, [AllProducts])

    useEffect(() => {
        if (AllProducts.length) {
            const savedWishList = getStoredCart();
            const storedWishList = [];
            setLoading(false)
            for (const _id in savedWishList) {
                const AddedProduct = AllProducts.find(product => product._id === _id);
                if (AddedProduct) {
                    const quantity = savedWishList[_id];
                    AddedProduct.quantity = quantity;
                    // console.log(quantity);
                    storedWishList.push(AddedProduct);
                }
            }
            setWishList(storedWishList);
            setLoading(false)
        }
    }, [AllProducts])

    // Cart Handler
    const handleAddToCart = (products) => {
        const newCart = [...carts, products];
        setCart(newCart);
        addToDb(products._id);
        // console.log('clicked', products._id);
    }

    const handleRemove = _id => {
        const removeCart = carts.filter(product => product._id !== _id)
        setCart(removeCart)
        removeFromDb(_id);
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
        AllProducts,
        handleAddToCart,
        carts,
        grandTotal,
        totalQuantity,
        total, tax, shipping,
        pageCount,
        page,
        setPage,
        handleRemove,
        loading,
        setFilters,
        filters,
        setCart,
        filterProduct,
        wishList
    }
};

export default useProductFilter;