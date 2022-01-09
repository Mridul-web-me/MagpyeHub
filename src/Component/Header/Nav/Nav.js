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
                            <label for="showMega1" class="mobile-item1">Home & Garden <i class="fas fa-angle-down"></i></label>
                            <div class="mega-box1">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Home Furnishings & Accessories</header>
                                        <hr />
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
                                        <hr />
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
                            <label for="showMega2" class="mobile-item2">Women <i class="fas fa-angle-down"></i></label>
                            <div class="mega-box2">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Clothing</header>
                                        <hr />
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
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/brasSportsBras">Bras & Sports Bras</Link></li>
                                            <li><Link to="/Nightwear">Nightwear</Link></li>
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
                            <label for="showMega3" class="mobile-item3">Men <i class="fas fa-angle-down"></i></label>
                            <div class="mega-box3">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Clothing</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/blazers">Blazers</Link></li>
                                            <li><Link to="/MenJeans">Jeans</Link></li>
                                            <li><Link to="/poloshirts">Polo Shirts</Link></li>
                                            <li><Link to="/menShirts">Shirts</Link></li>
                                            <li><Link to="/menShorts">Shorts</Link></li>
                                            <li><Link to="/MenSportsClothesGym">Sports Clothes/Gym</Link>
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
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/PyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                            <li><Link to="/MenSocks">Socks</Link></li>
                                            <li><Link to="/underwear">Underwear</Link></li>
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
                            <label for="showMega4" class="mobile-item4">Beauty <i class="fas fa-angle-down"></i></label>
                            <div class="mega-box4">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Makeup</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/foundations">Foundations</Link></li>
                                            <li><Link to="/concealers">Concealers</Link></li>
                                            <li><Link to="/eyeshadows">Eyeshadows</Link></li>
                                            <li><Link to="/mascaras">Mascaras</Link></li>
                                            <li><Link to="/lipsticks">Lipsticks</Link></li>
                                            <li><Link to="/nailPolish">Nail Polish</Link></li>
                                            <li><Link to="/makeupGiftsets">Makeup Gift sets</Link></li>
                                            <li><Link to="/MmkeUpBrushes">Make up Brushes</Link></li>
                                            <li><Link to="/handNailsets">Hand & Nail sets</Link></li>
                                            <li><Link to="/makeupBags">Makeup Bags</Link></li>
                                            <li><Link to="/makeupAccessories">Makeup Accessories</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Fragrance</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/womensPerfume">Women's Perfume</Link></li>
                                            <li><Link to="/perfumeGiftSets">Perfume Gift Sets</Link></li>
                                            <li><Link to="/mensAftershave">Men's Aftershave</Link></li>
                                            <li><Link to="/mensPerfume">Men's Perfume</Link></li>
                                            <li><Link to="/aftershaveGiftSets">Aftershave Gift Sets</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Skin & Body Care</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/cleansers">Cleansers</Link></li>
                                            <li><Link to="/moisturisers">Moisturisers</Link></li>
                                            <li><Link to="/bathsShower">Baths & Shower</Link></li>
                                            <li><Link to="/bodyCare">Body Care</Link></li>
                                            <li><Link to="/lipBalmCare">Lip Balm & Care</Link></li>
                                            <li><Link to="/handFootCare">Hand & Foot Care</Link></li>
                                            <li><Link to="/beautyToolsTechnology">Beauty Tools & Technology</Link></li>
                                            <li><Link to="/skinBodyGiftSets">Skin & Body Gift Sets</Link></li>
                                            <li><Link to="/mensGroomingShaving">Men's Grooming, Shaving</Link></li>
                                            <li><Link to="/mensBathBody">Mens Bath & Body</Link></li>
                                            <li><Link to="/mensWashBags">Mens Wash Bags</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Hair Care & Styling</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/hairCare">Hair Care</Link></li>
                                            <li><Link to="/shampoo">Shampoo</Link></li>
                                            <li><Link to="/conditioner">Conditioner</Link></li>
                                            <li><Link to="/hairTreatments">Hair Treatments</Link></li>
                                            <li><Link to="/hairStylingProducts">Hair Styling Products</Link></li>
                                            <li><Link to="/hairBrushes">Hair Brushes</Link></li>
                                            <li><Link to="/electricalHairBeauty">Electrical Hair & Beauty</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" class="desktop-item5">Baby & Child <i class="fas fa-angle-down"></i></Link>
                            <input type="checkbox" id="showMega5" />
                            <label for="showMega5" class="mobile-item5">Baby & Child <i class="fas fa-angle-down"></i></label>
                            <div class="mega-box5">
                                <div class="content">
                                    {/* <div class="row">
                                        <img src="img.jpg" alt="" />
                                    </div> */}
                                    <div class="row">
                                        <header>Kids Clothing & Shoes</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/shirtsTops">Shirts & Tops</Link></li>
                                            <li><Link to="/dresses">Dresses</Link></li>
                                            <li><Link to="/pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                            <li><Link to="/trousersLeggings">Trousers & Leggings</Link></li>
                                            <li><Link to="/jeans">Jeans</Link></li>
                                            <li><Link to="/partyWear">Party Wear</Link></li>
                                            <li><Link to="/girlsBriefs">Girls Briefs</Link></li>
                                            <li><Link to="/socks">Socks</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Girls Shoes</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/trainers">Trainers</Link></li>
                                            <li><Link to="/smartShoes">Smart Shoes</Link></li>
                                            <li><Link to="/sandals">Sandals</Link></li>
                                            <li><Link to="/flipflopsWellingtonBoots">Flipflops Wellington Boots</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Boys Clothes</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/shortsTrousers">Shorts & Trousers</Link></li>
                                            <li><Link to="/shirtsTops">Shirts & Tops</Link></li>
                                            <li><Link to="/pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                            <li><Link to="/partywear">Party wear</Link></li>
                                            <li><Link to="/pants">Pants</Link></li>
                                            <li><Link to="/socks">Socks</Link></li>
                                            <li><Link to="/hats">Hats</Link></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                        <header>Boys Shoes</header>
                                        <hr />
                                        <ul class="mega-links">
                                            <li><Link to="/trainers">Trainers</Link></li>
                                            <li><Link to="/smartShoes">Smart Shoes</Link></li>
                                            <li><Link to="/sandals">Sandals</Link></li>
                                            <li><Link to="/wellingtonBoots">Wellington Boots</Link></li>
                                            <li><Link to="/flipflops">Flipflops</Link></li>
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
