import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';

const AllFavProduct = ({ product, handleAddToCart }) => {
    const { _id, title, img, category, price } = product;
    return (
        <SwiperSlide>
            <div className="card">
                <img src={img} className="card-img-top" fluid alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>${price} </p>
                </div>
                <div className="card-footer">
                    <Button onClick={() => handleAddToCart(product)} type='button' >Buy</Button>
                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant="outline-primary">View</Button>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default AllFavProduct;
