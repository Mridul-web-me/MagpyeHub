import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';

const OrderHistory = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    fetch(`https://immense-spire-59977.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    return (
        <div>
            <Header></Header>
            <h2>You Have Placed {orders.length} order</h2>
            <ul>
                {
                    orders.map(order => <>
                        <li key={order._id}>{order.email}</li>
                        <li key={order._id}>{order.fullName}</li>
                    </>)
                }
            </ul>
            <Footer></Footer>
        </div>
    )
};

export default OrderHistory;
