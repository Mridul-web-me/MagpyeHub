import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Banner from '../Header/Banner/Banner'
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter'
import Brand from '../Product/Brand/Brand'
import FavouriteProduct from '../Product/FavouriteProduct/FavouriteProduct'
import Product from '../Product/Product'
import Sponsor from '../Sponsor/Sponsor'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
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
