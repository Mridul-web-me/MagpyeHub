import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
import Order from './Order';

const OrderHistory = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data) });
    }, [])
    // {
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('idToken')}`
    //     }
    // }
    return (
        <div>
            <Header></Header>
            <h2>You Have Placed {orders.length} order</h2>
            <ul>
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>

                    )
                }
            </ul>
            <Footer></Footer>
        </div>
    )
};

export default OrderHistory;
