import React from 'react'
import Brand from '../Product/Brand/Brand'
import FavouriteProduct from '../Product/FavouriteProduct/FavouriteProduct'
import Banner from './Banner/Banner'
// import HeaderNav from './HeaderNav/HeaderNav'
import HeaderTop from './HeaderTop/HeaderTop'
import Nav from './Nav/Nav'

const Header = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Nav></Nav>
            <Banner></Banner>
            <Brand></Brand>
            <FavouriteProduct></FavouriteProduct>
        </div>
    )
}

export default Header







