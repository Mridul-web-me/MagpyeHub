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
import { Link } from 'react-router-dom';

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
                <h2>Our Favourites <i class="fas fa-heart"></i></h2>
                <Swiper style={{
                    height: '600px'
                }} onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={30}
                    navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <div class="card">
                            <img src="https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/1580339598324-G49E5BI5FDO2ISPLJNPE/20-0129_DEMO.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BABYSTYLE
                                    OYSTER ZERO CARRYCOT ADAPTORS</h5>
                                <p>$15 </p>
                            </div>
                            <div class="card-footer">
                                <Link to="#">
                                    <button className='btn btn-primary px-4 mx-4'>BUY</button>

                                </Link>
                                <Link to="#">
                                    <button className='btn btn-success px-4'>VIEW</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div class="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/1580339598324-G49E5BI5FDO2ISPLJNPE/20-0129_DEMO.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BABYSTYLE
                                OYSTER ZERO CARRYCOT ADAPTORS</h5>
                            <p>$15 </p>
                        </div>
                        <div class="card-footer">
                            <Link to="#">
                                <button className='btn btn-primary px-4 mx-4'>BUY</button>

                            </Link>
                            <Link to="#">
                                <button className='btn btn-success px-4'>VIEW</button>
                            </Link>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/1580339598324-G49E5BI5FDO2ISPLJNPE/20-0129_DEMO.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BABYSTYLE
                                OYSTER ZERO CARRYCOT ADAPTORS</h5>
                            <p>$15 </p>
                        </div>
                        <div class="card-footer">
                            <Link to="#">
                                <button className='btn btn-primary px-4 mx-4'>BUY</button>

                            </Link>
                            <Link to="#">
                                <button className='btn btn-success px-4'>VIEW</button>
                            </Link>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/1580339598324-G49E5BI5FDO2ISPLJNPE/20-0129_DEMO.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BABYSTYLE
                                OYSTER ZERO CARRYCOT ADAPTORS</h5>
                            <p>$15 </p>
                        </div>
                        <div class="card-footer">
                            <Link to="#">
                                <button className='btn btn-primary px-4 mx-4'>BUY</button>

                            </Link>
                            <Link to="#">
                                <button className='btn btn-success px-4'>VIEW</button>
                            </Link>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide> <div class="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/5d7dafb4eabf16592a823ca0/1580339598324-G49E5BI5FDO2ISPLJNPE/20-0129_DEMO.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BABYSTYLE
                                OYSTER ZERO CARRYCOT ADAPTORS</h5>
                            <p>$15 </p>
                        </div>
                        <div class="card-footer">
                            <Link to="#">
                                <button className='btn btn-primary px-4 mx-4'>BUY</button>

                            </Link>
                            <Link to="#">
                                <button className='btn btn-success px-4'>VIEW</button>
                            </Link>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </>
        </div >
    )
}

export default FavouriteProduct
