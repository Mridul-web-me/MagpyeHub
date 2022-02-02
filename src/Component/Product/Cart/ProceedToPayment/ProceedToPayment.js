import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import Details from './Details';
import logo from '../../../../img/logo.jpg'



const ProceedToPayment = () => {
    const [addresses, setAddresses] = useState([])
    useEffect(() => {
        fetch('https://immense-spire-59977.herokuapp.com/addressBook')
            .then(res => res.json())
            .then(data => {
                setAddresses(data)
                // console.log(address)
            }
            )
    }, [])
    return <div>
        <Link to="/home" >
            <img src={logo} style={{
                margin: '15px 0'
            }} alt="" className='img-fluid' width="200px" height="200px" />
        </Link>
        <Container fluid style={{
            margin: '50px 0'
        }}>
            <Row>
                <Col xs={4}>
                    <h2>Delivery Address</h2>


                    {addresses.map(address => <Details
                        key={address._id}
                        address={address}
                    ></Details>
                    )}

                </Col>
                <Col xs={4}>
                    <h2>Billing Address</h2>
                    {addresses.map(address => <Details
                        key={address._id}
                        address={address}
                    ></Details>
                    )}
                    <Button>Update Address</Button>
                </Col>
                <Link to="/checkout">
                    <Button variant='outline-dark'>Checkout</Button>
                </Link>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
};

export default ProceedToPayment;
