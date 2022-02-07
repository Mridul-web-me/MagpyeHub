import React from 'react';

const Order = ({ order }) => {
    const { email } = order
    return <div>
        <p>{email}</p>

    </div>
};

export default Order;
