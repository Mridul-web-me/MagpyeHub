import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Banner from '../Header/Banner/Banner'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'
import PaymentOption from '../PaymentOption/PaymentOption'
import Brand from '../Product/Brand/Brand'
import FavouriteProduct from '../Product/FavouriteProduct/FavouriteProduct'
import Product from '../Product/Product'
import Sponsor from '../Sponsor/Sponsor'
import './Home.css'
import PromoUnit from '../PromoUnit/PromoUnit'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    MagpyehubOnline | Home
                </title>
                <meta name="description" content="This is Magpyehub Online Shop" />
            </Helmet>
            <Header></Header>
            <PromoUnit></PromoUnit>
            <Banner></Banner>
            <PaymentOption></PaymentOption>
            <Product></Product>
            <Brand></Brand>
            <FavouriteProduct></FavouriteProduct>
            <About></About>
            <Sponsor></Sponsor>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    )
}

export default Home
