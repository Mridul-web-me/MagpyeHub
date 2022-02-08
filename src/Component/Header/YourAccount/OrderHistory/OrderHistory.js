import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Header from '../../Header';
import Order from './Order';

const OrderHistory = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            // .then(res => res.json())
            .then(data => {
                setOrders(data.data)
                setLoading(false)
            });
    }, [user.email])

    return (
        <div>
            <Header></Header>
            <h2>You Have Placed {orders.length} order</h2>
            <ul>
                {loading ? <div>loading</div> :
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
