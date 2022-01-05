import React from 'react'
import { Link } from 'react-router-dom'
// import { Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import "./HeaderNav.css"

const HeaderNav = () => {
    return (
        <div>
            {/* <div class="wrapper">
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <li>
                        <a href="#" class="desktop-item">Dropdown Menu</a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                        <ul class="drop-menu">
                            <li><a href="#">Drop menu 1</a></li>
                            <li><a href="#">Drop menu 2</a></li>
                            <li><a href="#">Drop menu 3</a></li>
                            <li><a href="#">Drop menu 4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="desktop-item">Mega Menu</a>
                        <input type="checkbox" id="showMega" />
                        <label for="showMega" class="mobile-item">Mega Menu</label>
                        <div class="mega-box">
                            <div class="content">
                                <div class="row">
                                    <img src="img.jpg" alt="" />
                                </div>
                                <div class="row">
                                    <header>Design Services</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Graphics</a></li>
                                        <li><a href="#">Vectors</a></li>
                                        <li><a href="#">Business cards</a></li>
                                        <li><a href="#">Custom logo</a></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Email Services</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Personal Email</a></li>
                                        <li><a href="#">Business Email</a></li>
                                        <li><a href="#">Mobile Email</a></li>
                                        <li><a href="#">Web Marketing</a></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Security services</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Site Seal</a></li>
                                        <li><a href="#">VPS Hosting</a></li>
                                        <li><a href="#">Privacy Seal</a></li>
                                        <li><a href="#">Website design</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div> */}

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li>
                                <Link to="/#" class="desktop-item">Home & Garden</Link>
                                <input type="checkbox" id="showMega" />
                                <label for="showMega" class="mobile-item">Home & Garden</label>
                                <div class="mega-box">
                                    <div class="content">
                                        <div class="row">
                                            <header>Home Furnishings & Accessories</header>
                                            <ul class="mega-links">
                                                <li><Link to="/bedding">Bedding</Link></li>
                                                <li><Link to="/pillows">Pillows</Link></li>
                                                <li><Link to="/throwsblanketsAndSpreads">Throws, blankets and Spreads</Link></li>
                                                <li><Link to="/towels">Towels</Link></li>
                                                <li><Link to="/bathroomAccessories">Bathroom Accessories</Link></li>
                                                <li><Link to="/cushions">Cushions</Link></li>
                                                <li><Link to="/candlesAndHomeFragrances">Candles and Home Fragrances</Link></li>
                                            </ul>
                                        </div>
                                        <div class="row">
                                            <header>Cooking & Dining</header>
                                            <ul class="mega-links">
                                                <li><Link to="/potsPans">Pots & Pans</Link></li>
                                                <li><Link to="/picnicware">Picnicware</Link></li>
                                                <li><Link to="/kitchen Utensils & Gadgets">Kitchen Utensils & Gadgets</Link></li>
                                                <li><Link to="/tableware">Tableware</Link></li>
                                                <li><Link to="/glasses & Drinkware">Glasses & Drinkware</Link></li>
                                                <li><Link to="/cutlery">Cutlery</Link></li>
                                                <li><Link to="/foodProcessorsMixersBlendersJuicers">Food Processors, Mixers, Blenders & Juicers</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/#" class="desktop-item">Women</Link>
                                <input type="checkbox" id="showMega" />
                                <label for="showMega" class="mobile-item">Women</label>
                                <div class="mega-box">
                                    <div class="content">
                                        <div class="row">
                                            <header>Clothing</header>
                                            <ul class="mega-links">
                                                <li><Link to="/Dresses">Dresses</Link></li>
                                                <li><Link to="/Jeans">Jeans</Link></li>
                                                <li><Link to="/shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/Shorts">Shorts</Link></li>
                                                <li><Link to="/Skirts">Skirts</Link></li>
                                                <li><Link to="/Sports & Training/Gym ">Sports & Training/Gym </Link></li>
                                                <li><Link to="/Swimwear & Beachwear">Swimwear & Beachwear</Link></li>
                                                <li><Link to="/Trousers & Leggings">Trousers & Leggings</Link></li>
                                                <li><Link to="/Plus Size">Plus Size</Link></li>
                                                <li><Link to="/Maternity Clothes">Maternity Clothes</Link></li>
                                                <li><Link to="/Partywear">Partywear</Link></li>
                                            </ul>
                                        </div>
                                        <div class="row">
                                            <header>Lingerie, Nightwear & Hosiery</header>
                                            <ul class="mega-links">

                                                <li><Link to="/brasSportsBras">Bras & Sports Bras</Link></li>
                                                <li><Link to="/knickers">Knickers</Link></li>
                                                <li><Link to="/nightwear">Nightwear</Link></li>
                                                <li><Link to="/socks">Socks</Link></li>
                                                <li><Link to="/tights">Tights</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

        </div>
    )
}

export default HeaderNav
