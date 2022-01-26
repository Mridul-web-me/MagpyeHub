import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AllFavProduct from './AllFavProduct/AllFavProduct';
import useProduct from '../../../hooks/Product/useProduct';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./FavouriteProduct.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


// eslint-disable-next-line
import "swiper/css/bundle";



const FavouriteProduct = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const { products, handleAddToCart } = useProduct();

    const FilterProduct = products.filter((curElem) => {
        return (curElem.category === ('Laptop'))
    });
    // let appendNumber = 4;
    // let prependNumber = 1;

    // const prepend2 = () => {
    //     swiperRef.prependSlide([
    //         '<div className="swiper-slide">Slide ' + (--prependNumber) + '</div>',
    //         '<div className="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    //     ]);
    // }

    // const prepend = () => {
    //     swiperRef.prependSlide('<div className="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    // }

    // const append = () => {
    //     swiperRef.appendSlide('<div className="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    // }

    // const append2 = () => {
    //     swiperRef.appendSlide([
    //         '<div className="swiper-slide">Slide ' + (++appendNumber) + '</div>',
    //         '<div className="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    //     ]);
    // }
    return (
        <Container fluid>
            <h2>Our Favourites <i className="fas fa-heart"></i></h2>
            <Swiper style={{
                height: '600px'
            }}
                breakpoints={{
                    "0": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "540": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "640": {
                        "slidesPerView": 3,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                    }
                }
                } onSwiper={setSwiperRef} slidesPerView={3} loop={true} centeredSlides={true} spaceBetween={30}
                navigation={true} className="mySwiper">

                {<SwiperSlide>

                    {FilterProduct.map(product =>
                        <AllFavProduct
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></AllFavProduct>

                    )
                    }

                </SwiperSlide>}
            </Swiper>
        </Container>
    )
}

export default FavouriteProduct
