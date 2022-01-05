import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./FavouriteProduct.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


const FavouriteProduct = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    // let appendNumber = 4;
    // let prependNumber = 1;

    // const prepend2 = () => {
    //     swiperRef.prependSlide([
    //         '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
    //         '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    //     ]);
    // }

    // const prepend = () => {
    //     swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    // }

    // const append = () => {
    //     swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    // }

    // const append2 = () => {
    //     swiperRef.appendSlide([
    //         '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
    //         '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    //     ]);
    // }
    return (
        <div>
            <>

                <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
                    "type": "fraction"
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

export default FavouriteProduct
