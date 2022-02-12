import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import Footer from '../../../Footer/Footer';
import AllProduct from '../../../Product/AllProduct/AllProduct';
import Header from '../../Header';

const SearchResult = () => {
    // const { _id, title, img, category, price } = props.product;
    const { searchText } = useParams()
    const { handleAddToCart } = useProduct()
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products?search=${searchText}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // console.log(product);
    }, [searchText])

    return <div>
        <Header></Header>
        <Container>
            {!product.length ? <div>No Product Found</div> : <Row xs={1} md={4} className="g-4">
                {
                    product.map(product =>

                        <AllProduct
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        // pageCount={pageCount}
                        ></AllProduct>
                    )
                }
            </Row>}
        </Container>
        <Footer></Footer>
    </div>
};

export default SearchResult;
