import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav>
                <div class="wrapper">
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul class="nav-links">
                        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item1">Home & Garden <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega1" />
                            <label for="showMega1" class="mobile-item1">Home & Garden</label>
                            <div class="mega-box1">
                                <div class="content">
                                    <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div class="row">
                                        <header>Design Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Graphics</Link></li>
                                            <li><Link to="/">Vectors</Link></li>
                                            <li><Link to="/">Business cards</Link></li>
                                            <li><Link to="/">Custom logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Personal Email</Link></li>
                                            <li><Link to="/">Business Email</Link></li>
                                            <li><Link to="/">Mobile Email</Link></li>
                                            <li><Link to="/">Web Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Site Seal</Link></li>
                                            <li><Link to="/">VPS Hosting</Link></li>
                                            <li><Link to="/">Privacy Seal</Link></li>
                                            <li><Link to="/">Website design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item2">Women <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega2" />
                            <label for="showMega2" class="mobile-item2">Women</label>
                            <div class="mega-box2">
                                <div class="content">
                                    <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div class="row">
                                        <header>Design Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Graphics</Link></li>
                                            <li><Link to="/">Vectors</Link></li>
                                            <li><Link to="/">Business cards</Link></li>
                                            <li><Link to="/">Custom logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Personal Email</Link></li>
                                            <li><Link to="/">Business Email</Link></li>
                                            <li><Link to="/">Mobile Email</Link></li>
                                            <li><Link to="/">Web Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Site Seal</Link></li>
                                            <li><Link to="/">VPS Hosting</Link></li>
                                            <li><Link to="/">Privacy Seal</Link></li>
                                            <li><Link to="/">Website design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item3">Men <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega3" />
                            <label for="showMega3" class="mobile-item3">Men</label>
                            <div class="mega-box3">
                                <div class="content">
                                    <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div class="row">
                                        <header>Design Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Graphics</Link></li>
                                            <li><Link to="/">Vectors</Link></li>
                                            <li><Link to="/">Business cards</Link></li>
                                            <li><Link to="/">Custom logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Personal Email</Link></li>
                                            <li><Link to="/">Business Email</Link></li>
                                            <li><Link to="/">Mobile Email</Link></li>
                                            <li><Link to="/">Web Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Site Seal</Link></li>
                                            <li><Link to="/">VPS Hosting</Link></li>
                                            <li><Link to="/">Privacy Seal</Link></li>
                                            <li><Link to="/">Website design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item4">Beauty <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega4" />
                            <label for="showMega4" class="mobile-item4">Beauty</label>
                            <div class="mega-box4">
                                <div class="content">
                                    <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div class="row">
                                        <header>Design Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Graphics</Link></li>
                                            <li><Link to="/">Vectors</Link></li>
                                            <li><Link to="/">Business cards</Link></li>
                                            <li><Link to="/">Custom logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Personal Email</Link></li>
                                            <li><Link to="/">Business Email</Link></li>
                                            <li><Link to="/">Mobile Email</Link></li>
                                            <li><Link to="/">Web Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Site Seal</Link></li>
                                            <li><Link to="/">VPS Hosting</Link></li>
                                            <li><Link to="/">Privacy Seal</Link></li>
                                            <li><Link to="/">Website design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item5">Baby & Child <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega5" />
                            <label for="showMega5" class="mobile-item5">Baby & Child</label>
                            <div class="mega-box5">
                                <div class="content">
                                    <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div>
                                    <div class="row">
                                        <header>Design Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Graphics</Link></li>
                                            <li><Link to="/">Vectors</Link></li>
                                            <li><Link to="/">Business cards</Link></li>
                                            <li><Link to="/">Custom logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Personal Email</Link></li>
                                            <li><Link to="/">Business Email</Link></li>
                                            <li><Link to="/">Mobile Email</Link></li>
                                            <li><Link to="/">Web Marketing</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/">Site Seal</Link></li>
                                            <li><Link to="/">VPS Hosting</Link></li>
                                            <li><Link to="/">Privacy Seal</Link></li>
                                            <li><Link to="/">Website design</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                </div>
            </nav>
        </div>
    )
}

export default Nav
