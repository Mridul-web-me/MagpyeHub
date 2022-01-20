import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        console.log(product);
    }, [])
    // const onSubmit = data => {
    //     console.log(data)
    //     Axios.post('https://floating-oasis-79529.herokuapp.com/placeOrder', data)
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('Order Place successfully')
    //                 reset();
    //             }
    //         })
    // };
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
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default PlaceOrder
