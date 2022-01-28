import React from 'react';
import useProduct from '../../../hooks/Product/useProduct';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';


const Cart = () => {

    const { totalQuantity, total, shipping, carts } = useProduct({});

    return (
        <>
            <Header></Header>
            {shipping ? <div className='py-5 bg-light'>
                <table className='mx-auto'>
                    <tr className='border-1'>
                        <th className='border-1 p-2 '>No</th>
                        <th className='border-1 py-2 px-4'>Product Image</th>
                        <th className='border-1 py-2 px-4'>Product Name</th>
                        <th className='border-1 py-2 px-5'>Price</th>
                        <th className='border-1 py-2 px-3'>Delivery</th>
                    </tr>
                    {
                        carts.map((cart) => {

                            const { img, title, price, quantity } = cart;

                            return (
                                <>
                                    <tr className='border-1'>
                                        <td className='border-1 p-2' >{1}</td>
                                        <td className='border-1 p-2' >
                                            <img className='' height={50} width={50} src={img} alt="" />
                                        </td>
                                        <td className='border-1 p-2' >{title}</td>
                                        <td className='border-1 p-2'>${price}</td>
                                        <td className='border-1 p-2'>${shipping}</td>
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
            </div> :
                <div>
                    <h4>You currently have nothing in your Basket</h4>
                    <p>Why not have a look at some of our best offers we've selected for you below:</p>
                </div>
            }
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