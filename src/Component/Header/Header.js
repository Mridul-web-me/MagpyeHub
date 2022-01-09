import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import Nav from './Nav/Nav'
import './Header.css'

const Header = () => {
    return (
        <div className="menu sticky-top">
            <HeaderTop></HeaderTop>
            <Nav></Nav>
        </div>
    )
}

export default Header







