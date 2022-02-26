import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Details from './Details';
import logo from '../../../../img/logo.jpg'
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import useProduct from '../../../../hooks/Product/useProduct';


const stripePromise = loadStripe('pk_test_51KUuQEJYFu4RGWvKjw2LK5rIC9EAnyTQHbmzGNgGnb0XcOvh36utplRWpUtsK2EJAJEw0YExvwQxLNSv7hY3qdPh00BNUN9m3S');
const ProceedToPayment = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { user } = useAuth()
    const { totalQuantity, total, carts, } = useProduct({});
    const [profile, setProfile] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/users?email=${user.email}`, {
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
                    {profile.map(address => <>
                        <Details
                            key={address._id}
                            address={address}
                        ></Details>
                        <Link to={`/updateDetails/${address._id}`}>
                            <Button>Update Address</Button>
                        </Link>
                    </>
                    )}

                </Col>

                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button> */}

                {/* <Link to="/checkout">
                    <Button variant='outline-dark'>Checkout</Button>
                </Link> */}
            </Row>
            <br />
            {/* <Button variant='outline-dark' data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout</Button> */}
            <Link to="/payment">
                <Button variant='outline-success'>Payment</Button>
            </Link>

            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Payment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {total && <Elements stripe={stripePromise}>
                                <Payment />
                            </Elements>}
                        </div>
                        <div className="modal-footer">
                            <Link to="/checkout">
                                <button type="button" className="btn btn-primary">Next</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Footer></Footer>
    </div>
};

export default ProceedToPayment;
