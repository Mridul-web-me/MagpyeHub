import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/Product/useProduct';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';


const Cart = () => {

    const { totalQuantity, total, shipping, carts, handleRemove, } = useProduct({});

    return (
        <>
            <Header></Header>
            <Container fluid style={{
                margin: '50px 0'
            }}>
                {shipping ? <div className='py-5 bg-light'>
                    <table className='mx-auto'>
                        <tr className='border-1'>
                            <th className='border-1 p-2 '>Quantity</th>
                            <th className='border-1 py-2 px-4'>Product Image</th>
                            <th className='border-1 py-2 px-4'>Product Name</th>
                            <th className='border-1 py-2 px-5'>Price</th>
                            <th className='border-1 py-2 px-3'>Delivery</th>
                        </tr>
                        {
                            carts.map((cart) => {

                                const { _id, img, title, price, quantity } = cart;

                                return (
                                    <>
                                        <tr className='border-1'>
                                            {/* <td className='border-1 p-2' >{quantity}</td> */}
                                            <input type="number" name="" id="" value={quantity} />
                                            <td className='border-1 p-2' >
                                                <img className='' height={50} width={50} src={img} alt="" />
                                            </td>
                                            <td className='border-1 p-2' >{title}</td>
                                            <td className='border-1 p-2'>${price}</td>
                                            <td className='border-1 p-2'>${shipping}</td>
                                            <Button onClick={() => handleRemove(_id)}>Remove</Button>
                                        </tr>
                                    </>)
                            })
                        }
                        <tr className='border-1 p-2'>
                            <th colSpan="2" className='p-2 border-1' >SubTotal</th>
                            <th className='p-2' >Total Items {totalQuantity}</th>
                            <th className='border-1 p-2'>${total.toFixed(2)}</th>
                            <th></th>
                        </tr>
                    </table>
                    <Link to='/proceedToPayment'>
                        <Button>Proceed To Payment</Button>
                    </Link>
                </div> :
                    <div>
                        <h4>You currently have nothing in your Basket</h4>
                        <p>Why not have a look at some of our best offers we've selected for you below:</p>
                    </div>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Cart;


// {/* <h3>Order Summary</h3>
//                 <h5>Items Ordered: {totalQuantity}</h5>
//                 <br />
//                 <p className="fs-4">Total: ${total.toFixed(2)}</p>
//                 <p className="fs-4">Delivery: ${shipping}</p>
//                 <p className="fs-4">tax: ${tax.toFixed(2)}</p>
//                 <p className="fs-4">Grand Total: ${grandTotal.toFixed(2)}</p> */}