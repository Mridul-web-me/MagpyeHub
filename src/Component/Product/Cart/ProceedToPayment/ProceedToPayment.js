import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';

const ProceedToPayment = () => {
    return <div>
        <Header></Header>
        <Container fluid style={{
            margin: '50px 0'
        }}>
            <Row>
                <Col xs={6}>
                    <h2>Delivery Address</h2>
                </Col>
                <Col xs={6}>
                    <h2>Billing Address</h2>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
};

export default ProceedToPayment;
