import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProduct from '../../../../hooks/Product/useProduct';
import Footer from '../../../Footer/Footer';
import Newsletter from '../../../Newsletter/Newsletter';
import AllProduct from '../../../Product/AllProduct/AllProduct';
import PromoUnit from '../../../PromoUnit/PromoUnit';
import Header from '../../Header';

const SearchResult = () => {
    // const { _id, title, img, category, price } = props.product;
    const { searchText } = useParams()
    const { handleAddToCart } = useProduct()
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-spire-57096.herokuapp.com/products?search=${searchText}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // console.log(product);
    }, [searchText])

    return <div>
        <Header></Header>
        <PromoUnit></PromoUnit>
        <Container>
            {!product.length ? <div style={{ margin: '100px' }}> <h2 style={{ color: '#606060', fontWeight: '700' }}>No Product Found</h2> </div> : <Row xs={1} md={4} className="g-4">
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
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
};

export default SearchResult;
