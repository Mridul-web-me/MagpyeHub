import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Details from './Details';
import logo from '../../../../img/logo.jpg'
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';



const ProceedToPayment = () => {
    const { user } = useAuth()
    const [profile, setProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/addressBook?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setProfile(data.data)
            });
    }, [user.email])
    return <div>
        <Link to="/home" >
            <img src={logo} style={{
                margin: '15px 0'
            }} alt="" className='img-fluid' width="200px" height="200px" />
        </Link>
        <Container style={{
            margin: '50px 0'
        }}>
            <Row>
                <Col xs={4}>
                    <h2>Delivery Address</h2>


                    {profile.map(address => <Details
                        key={address._id}
                        address={address}
                    ></Details>
                    )}

                </Col>
                <Col xs={4}>
                    <h2>Billing Address</h2>
                    {profile.map(address => <Details
                        key={address._id}
                        address={address}
                    ></Details>
                    )}
                    <Link to='/updateDetails'>
                        <Button>Update Address</Button>
                    </Link>
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
