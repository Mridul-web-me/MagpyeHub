import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchResult from './SearchResult/SearchResult';

const SearchBox = () => {
    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/products?search=${searchProducts}`)
            // .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [searchProducts])

    const handleSearchField = e => {
        e.preventDefault()
        const searchText = e.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))

        return (matchedProducts)
    }
    return (
        <>
            <div>
                <form className="d-flex searchBox" onSubmit={handleSearchField}>
                    <input className="form-control me-2" placeholder="Search for Product & Brand..." aria-label="Search" onChange={(e) => setSearchProducts(e.target.value)} />
                    <Link to={`/${searchProducts}`}
                    >
                        <button type="submit" style={{
                            border: 'none',
                            position: 'relative',
                            right: '135%',
                            height: '38px',
                            margin: '2px 0'
                        }}> <i className="fas fa-search" /></button>

                    </Link>
                </form>
            </div>
        </>
    )
}

export default SearchBox;
