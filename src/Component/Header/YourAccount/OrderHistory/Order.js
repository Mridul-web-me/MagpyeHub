import React, { useEffect } from 'react';
import useProduct from '../../../../hooks/Product/useProduct';

const Order = ({ orders, savedProduct }) => {
    const { email, name, phone, title } = orders;
    // const { title } = savedProduct;
    console.log(orders)
    console.log(savedProduct)

    useEffect(() => {
        fetch('https://desolate-spire-57096.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => console.log(data.data))
    }, [])


    return <div>
        <p>{email}</p>
        <p>{title}</p>

    </div>
};

export default Order;
