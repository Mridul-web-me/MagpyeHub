import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./Brand.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Autoplay]);



const Brand = () => {

    return (
        <>
            <Container fluid>
                <Swiper style={{
                    height: '30%',
                }} slidesPerView={1} spaceBetween={10}
                    autoplay={{
                        "delay": 1500,
                        "disableOnInteraction": false
                    }}
                    breakpoints={{
                        "640": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 6,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 8,
                            "spaceBetween": 50
                        }
                    }} className="mySwiper">
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                    <SwiperSlide className="brandSlider">
                        <Link to="/">
                            Brands will be added</Link>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    )
}

export default Brand
