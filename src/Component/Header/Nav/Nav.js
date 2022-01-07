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
                            <Link to="/" class="desktop-item6">Search <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega6" />
                            <label for="showMega6" class="mobile-item6">
                                <div>
                                    <i class="fas fa-search" type="submit" />
                                    <p>Search</p>
                                </div>
                            </label>
                            <div class="mega-box6">
                                <div class="content">
                                    <div className="searchBoxContent">
                                        <div className="col-md-6">
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search for Product & Brand..." aria-label="Search" />
                                                <i class="fas fa-search" type="submit" />
                                            </form>
                                        </div>
                                        <Link to="/">
                                            <i class="fas fa-comments"></i>
                                            <p>Quote</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className='nav-item'>
                            <Link to="/" class="desktop-item1">Home & Garden <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega1" />
                            <label for="showMega1" class="mobile-item1">Home & Garden</label>
                            <div class="mega-box1">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Home Furnishings & Accessories</header>
                                        <ul class="mega-links">
                                            <li><Link to="/bedding">Bedding</Link></li>
                                            <li><Link to="/pillows">Pillows</Link></li>
                                            <li><Link to="/throwsBlanketsAndSpreads">Throws, blankets and Spreads</Link></li>
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
                                            <li><Link to="/tableware">Tableware</Link></li>
                                            <li><Link to="/glassesDrinkware">Glasses & Drinkware</Link></li>
                                            <li><Link to="/cutlery">Cutlery</Link></li>
                                            <li><Link to="/foodProcessorsMixersBlendersJuicers">Food Processors, Mixers, Blenders & Juicers</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item2">Women <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega2" />
                            <label for="showMega2" class="mobile-item2">Women</label>
                            <div class="mega-box2">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Clothing</header>
                                        <ul class="mega-links">
                                            <li><Link to="/dresses">Dresses</Link></li>
                                            <li><Link to="/jeans">Jeans</Link></li>
                                            <li><Link to="/shirtsTops">Shirts & Tops</Link></li>
                                            <li><Link to="/shorts">Shorts</Link></li>
                                            <li><Link to="/skirts">Skirts</Link></li>
                                            <li><Link to="/sportsTraining/Gym ">Sports & Training/Gym </Link></li>
                                            {/* <li><Link to="/Swimwear & Beachwear">Swimwear & Beachwear</Link></li>
                                            <li><Link to="/Trousers & Leggings">Trousers & Leggings</Link></li>
                                            <li><Link to="/Trousers & Leggings">Trousers & Leggings</Link></li>
                                            <li><Link to="/Plus Size">Plus Size</Link></li>
                                            <li><Link to="/Maternity Clothes">Maternity Clothes</Link></li>
                                            <li><Link to="/Partywear">Partywear</Link></li> */}
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Lingerie, Nightwear & Hosiery</header>
                                        <ul class="mega-links">
                                            <li><Link to="/brasSportsBras">Bras & Sports Bras</Link></li>
                                            <li><Link to="/knickers">Nightwear</Link></li>
                                            <li><Link to="/socks">Socks</Link></li>
                                            <li><Link to="/tights">Tights</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item3">Men <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega3" />
                            <label for="showMega3" class="mobile-item3">Men</label>
                            <div class="mega-box3">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Clothing</header>
                                        <ul class="mega-links">
                                            <li><Link to="/blazers">Blazers</Link></li>
                                            <li><Link to="/jeans">Jeans</Link></li>
                                            <li><Link to="/poloshirts">Polo Shirts</Link></li>
                                            <li><Link to="/shirts">Shirts</Link></li>
                                            <li><Link to="/shorts">Shorts</Link></li>
                                            <li><Link to="/sports Clothes/Gym">Sports Clothes/Gym</Link>
                                            </li>
                                            <li><Link to="/suits">Suits</Link></li>
                                            <li><Link to="/swimwear">Swimwear</Link></li>
                                            <li><Link to="/trousers">Trousers</Link></li>
                                            <li><Link to="/t-shirts">T-Shirts</Link></li>
                                            <li><Link to="/waistcoats">Waistcoats</Link></li>
                                            <li><Link to="/partyWear">Partywear</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Nightwear, Underwear & Socks</header>
                                        <ul class="mega-links">
                                            <li><Link to="/pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                            <li><Link to="/Socks">Socks</Link></li>
                                            <li><Link to="/Underwear">Underwear</Link></li>
                                        </ul>
                                    </div>
                                    {/* <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                        </ul>
                                    </div> */}
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
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"> cards</Link></li>
                                            <li><Link to="/"> logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
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
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"> cards</Link></li>
                                            <li><Link to="/"> logo</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Email Services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Security services</header>
                                        <ul class="mega-links">
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
                                            <li><Link to="/"></Link></li>
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
