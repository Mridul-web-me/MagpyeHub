import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../../../../Footer/Footer'
import Header from '../../../../Header/Header'
import HeaderTop from '../../../../Header/HeaderTop/HeaderTop'
import AllProduct from '../../../AllProduct/AllProduct'

const Bedding = () => {
    const [products, setProducts] = useState([]);
    // const [filters, setFilters] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

                // setFilters(data);
                console.log(data);

            })
    }, [])
    // const filter = products.map(product => product.category);
    // console.log(filter);
    // const filterProduct = (categProduct) => {
    //     const updatedProduct = products.filter((curElem) => {
    //         return curElem.category === categProduct;
    //     });
    //     setFilters(updatedProduct);
    // };
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div>
            {/* <HeaderTop cart={cart}></HeaderTop> */}
            <Header cart={cart}></Header>
            <Container fluid>
                {<Row xs={1} md={3} className="g-4">
                    {
                        products.map(product =>
                            <AllProduct
                                key={product._id}
                                product={product}
                                // filterProduct={filterProduct}
                                handleAddToCart={handleAddToCart}
                            ></AllProduct>
                        )
                    }
                </Row>}
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Bedding
