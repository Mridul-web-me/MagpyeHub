import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchResult from './SearchResult/SearchResult';

const SearchBox = ({ history }) => {
    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState('')
    useEffect(() => {
        const url = `https://immense-spire-59977.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    // let history = useLocation();
    const handleSearchField = e => {
        e.preventDefault()
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
        // setSearchText(searchTextValue)
        console.log(matchedProducts);
        // if (searchProducts.trim()) {
        //     history.push(`/search/${searchProducts}`)
        // } else {
        //     history.push('/')
        // }
        return (matchedProducts)
    }
    return (
        <>
            <div>
                <form className="d-flex searchBox" onSubmit={handleSearchField}>
                    <input className="form-control me-2" placeholder="Search for Product & Brand..." aria-label="Search" onChange={(e) => setSearchProducts(e.target.value)} />
                    <Link to={`/search?${searchProducts}`}>
                        <button type="submit"> <i className="fas fa-search" /></button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default SearchBox;
