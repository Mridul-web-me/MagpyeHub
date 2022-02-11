import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, DecrementToDb, removeFromDb } from '../../../fakeDB';
import useProduct from '../../../hooks/Product/useProduct';

const Carts = ({ cart }) => {
    const { handleRemove, setCart } = useProduct({});

    const { _id, img, title, price, quantity } = cart;
    const subtotalPrice = quantity * price;

    const handleIncrement = (_id) => {
        setCart(cart =>
            cart.map((carts) =>
                _id === carts._id ? { ...carts, quantity: carts.quantity + (carts.quantity < 10 ? 1 : 0) } : carts
            )
        );
        addToDb(_id);
    }
    const handleDecrement = (_id) => {


        setCart(cart =>
            cart.map((carts) =>
                _id === carts._id ? { ...carts, quantity: carts.quantity - (carts.quantity > 1 ? 1 : 0) } : carts
            )
        );
        DecrementToDb(_id);
        console.log("clicked", _id, _id)
        updateDb()
    }
    const updateDb = () => {
        if (_id === 0) {
            handleRemove(_id)
            removeFromDb(_id)
        }
    }
    return (
        <div>
            <Row style={{

                borderBottom: '1px solid rgb(159 159 159)',
                margin: '10px 0'
            }}>
                <Col xs={6} md={2}>
                    <img src={`data:image/jpg;base64,${img}`} alt="" width="100px" height="100px" />
                </Col>
                <Col xs={6} md={4} style={{
                    textAlign: 'start'
                }}>
                    <Link to={`/placeOrder/${_id}`}>
                        <h5>{title}</h5>
                    </Link>
                    <p>Product Code: {_id}</p>
                </Col>
                <Col xs={6} md={2}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <button style={{ width: '25px' }} onClick={() => { handleDecrement(_id) }}> - </button>
                        <input style={{ width: '50px' }} type="text" value={quantity} />
                        <button style={{ width: '25px' }} onClick={() => { handleIncrement(_id) }}> + </button>
                    </div>
                </Col>
                <Col xs={6} md={2}>
                    <p>£{price}</p>
                </Col>
                <Col xs={6} md={2}>

                    <i class="fa-solid fa-xmark"></i>
                    <p> £{subtotalPrice}
                        <svg style={{
                            color: 'red',
                            cursor: 'pointer'
                        }} onClick={() => handleRemove(_id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                    </p>


                </Col>
            </Row>
        </div>
    )
}

export default Carts