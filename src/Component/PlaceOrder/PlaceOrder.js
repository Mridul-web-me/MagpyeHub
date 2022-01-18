import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        console.log(product);
    }, [])
    // const onSubmit = data => {
    //     console.log(data)
    //     Axios.post('https://floating-oasis-79529.herokuapp.com/placeOrder', data)
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('Order Place successfully')
    //                 reset();
    //             }
    //         })
    // };
    return (
        <div>
            <Header></Header>
            <div className="placeOrder">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.img} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2>{product.title}</h2>
                            {/* <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("ProductName")} defaultValue={bikes.name} onBlur={handleOnBlur} />
                                <input {...register("name")} onBlur={handleOnBlur} placeholder="name" />
                                <input {...register("email")} onBlur={handleOnBlur} value={user.email} />
                                <input {...register("Phone")} onBlur={handleOnBlur} placeholder="Phone Number" />
                                <input {...register("price")} onBlur={handleOnBlur} defaultValue={bikes.price} />
                                <input type="submit" />
                            </form> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrder
