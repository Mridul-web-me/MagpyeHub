import React, { useState } from 'react'
import useProduct from '../../../../../hooks/Product/useProduct';
import CartPaymentProduct from '../../../../Product/Cart/ProceedToPayment/CartPaymentProduct/CartPaymentProduct'

const StepOne = () => {
    const { totalQuantity, total, carts, } = useProduct({});
    return (
        <div>
            <div class="col-25">
                <div class="container">
                    <h4>Cart
                        <span class="price" tyle={{
                            color: 'black'
                        }}>
                            <i class="fa fa-shopping-cart"></i>
                            <b>{totalQuantity}</b>
                        </span>
                    </h4>
                    {
                        carts.map(cart => <CartPaymentProduct
                            key={cart._id}
                            cart={cart}
                        >

                        </CartPaymentProduct>)
                    }
                    <p>Total <span class="price" style={{
                        color: 'black'
                    }}><b>{total}</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default StepOne