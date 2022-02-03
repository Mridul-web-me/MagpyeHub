import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/Product/useProduct';
// import { useParams } from 'react-router-dom';
import Header from '../Header/Header'

const PlaceOrder = () => {
    const { handleAddToCart } = useProduct()
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://immense-spire-59977.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        // console.log(product);
    }, [])
    return (
        <>
            <Header></Header>
            <Container fluid style={{
                margin: '20px 0'
            }}>
                <Row>
                    <Col xs={6}>
                        <img src={product.img} alt="" fluid style={{
                            width: '500px',
                            height: '500px'
                        }} />
                    </Col>
                    <Col xs={6} style={{
                        textAlign: 'start'
                    }}>
                        <h4>{product.title}</h4>
                        <h5>Code: {product.productCode}</h5>
                        <h5>${product.price}</h5>
                        <Button variant="outline-primary" type='button' onClick={() => handleAddToCart(product)}>Add To Basket</Button>
                    </Col>


                </Row>
            </Container>
        </>

    )
}

export default PlaceOrder
