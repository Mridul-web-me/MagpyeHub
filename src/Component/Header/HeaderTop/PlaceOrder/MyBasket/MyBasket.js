import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../../hooks/Product/useProduct';
import Header from '../../Header/Header';
import Basket from './Basket/Basket';

const MyBasket = () => {
    const { cart } = useProduct([]);

    console.log(cart);
    // console.log(products);
    console.log(cart.title);
    return (
        <div>
            <Header></Header>
            {<Row xs={1} md={3} className="g-4">
                {
                    cart.map(product =>

                        <Basket
                            key={product.id}
                            cart={cart}
                        // handleRemove={handleRemove}
                        ></Basket>
                    )
                }
            </Row>}
        </div>
    )
};

export default MyBasket;
