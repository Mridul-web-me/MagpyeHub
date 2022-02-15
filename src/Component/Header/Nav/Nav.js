import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'


import './Nav.css'
const Nav = () => {

    return (
        <>
            <div>
                <nav>
                    <div className="wrapper">
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li className='nav-item'>
                                {/* <label className="desktop-item">Home & Garden <i className="fas fa-angle-down"></i></label> */}
                                <input type="checkbox" id="showMega" />

                                <div className="searchBarQuote">
                                    <div className='searchBar'>
                                        <label htmlFor="showMega" className="mobile-item">Search Products</label>
                                    </div>
                                    <div className='mobileQuote'>
                                        <h2 className='text-center'>QUOTE</h2>
                                    </div>
                                </div>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row">
                                            <SearchBox></SearchBox>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item1">Home & Garden <i className="fas fa-angle-down"></i></label>
                                <input type="checkbox" id="showMega1" />
                                <label htmlFor="showMega1" className="mobile-item1">Home & Garden</label>
                                <div className="mega-box1">
                                    <div className="content">
                                        <div className="row">
                                            <header>Home Furnishings & Accessories</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/bedding">Bedding</Link></li>
                                                <li><Link to="/product/pillows">Pillows</Link></li>
                                                <li><Link to="/product/throwsBlanketsAndSpreads">Throws, blankets and Spreads</Link></li>
                                                <li><Link to="/product/towels">Towels</Link></li>
                                                <li><Link to="/product/bathroomAccessories">Bathroom Accessories</Link></li>
                                                <li><Link to="/product/cushions">Cushions</Link></li>
                                                <li><Link to="/product/candlesAndHomeFragrances">Candles and Home Fragrances</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Cooking & Dining</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/potsPans">Pots & Pans</Link></li>
                                                <li><Link to="/product/tableware">Tableware</Link></li>
                                                <li><Link to="/product/glassesDrinkware">Glasses & Drinkware</Link></li>
                                                <li><Link to="/product/cutlery">Cutlery</Link></li>
                                                <li><Link to="/product/foodProcessorsMixersBlendersJuicers">Food Processors, Mixers, Blenders & Juicers</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item2">Women <i className="fas fa-angle-down"></i></label>
                                <input type="checkbox" id="showMega2" />
                                <label htmlFor="showMega2" className="mobile-item2">Women</label>
                                <div className="mega-box2">
                                    <div className="content">
                                        <div className="row">
                                            <header>Clothing</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/dresses">Dresses</Link></li>
                                                <li><Link to="/product/jeans">Jeans</Link></li>
                                                <li><Link to="/product/shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/product/shorts">Shorts</Link></li>
                                                <li><Link to="/product/skirts">Skirts</Link></li>
                                                <li><Link to="/product/sportsTrainingGym ">Sports & Training/Gym </Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Lingerie, Nightwear & Hosiery</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/brasSportsBras">Bras & Sports Bras</Link></li>
                                                <li><Link to="/product/Nightwear">Nightwear</Link></li>
                                                <li><Link to="/product/socks">Socks</Link></li>
                                                <li><Link to="/product/tights">Tights</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item3">Men <i className="fas fa-angle-down"></i></label>
                                <input type="checkbox" id="showMega3" />
                                <label htmlFor="showMega3" className="mobile-item3">Men</label>
                                <div className="mega-box3">
                                    <div className="content">
                                        <div className="row">
                                            <header>Clothing</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/blazers">Blazers</Link></li>
                                                <li><Link to="/product/MenJeans">Jeans</Link></li>
                                                <li><Link to="/product/poloshirts">Polo Shirts</Link></li>
                                                <li><Link to="/product/menShirts">Shirts</Link></li>
                                                <li><Link to="/product/menShorts">Shorts</Link></li>
                                                <li><Link to="/product/MenSportsClothesGym">Sports Clothes/Gym</Link></li>
                                                <li><Link to="/product/suits">Suits</Link></li>
                                                <li><Link to="/product/swimwear">Swimwear</Link></li>
                                                <li><Link to="/product/trousers">Trousers</Link></li>
                                                <li><Link to="/product/t-shirts">T-Shirts</Link></li>
                                                <li><Link to="/product/waistcoats">Waistcoats</Link></li>
                                                <li><Link to="/product/partyWear">Partywear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Nightwear, Underwear & Socks</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/PyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                                <li><Link to="/product/MenSocks">Socks</Link></li>
                                                <li><Link to="/product/underwear">Underwear</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item4">Beauty <i className="fas fa-angle-down"></i></label>
                                <input type="checkbox" id="showMega4" />
                                <label htmlFor="showMega4" className="mobile-item4">Beauty</label>
                                <div className="mega-box4">
                                    <div className="content">
                                        <div className="row">
                                            <header>Makeup</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/foundations">Foundations</Link></li>
                                                <li><Link to="/product/concealers">Concealers</Link></li>
                                                <li><Link to="/product/eyeshadows">Eyeshadows</Link></li>
                                                <li><Link to="/product/mascaras">Mascaras</Link></li>
                                                <li><Link to="/product/lipsticks">Lipsticks</Link></li>
                                                <li><Link to="/product/nailPolish">Nail Polish</Link></li>
                                                <li><Link to="/product/makeupGiftsets">Makeup Gift sets</Link></li>
                                                <li><Link to="/product/MakeUpBrushes">Make up Brushes</Link></li>
                                                <li><Link to="/product/handNailsets">Hand & Nail sets</Link></li>
                                                <li><Link to="/product/makeupBags">Makeup Bags</Link></li>
                                                <li><Link to="/product/makeupAccessories">Makeup Accessories</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Fragrance</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/womensPerfume">Women's Perfume</Link></li>
                                                <li><Link to="/product/perfumeGiftSets">Perfume Gift Sets</Link></li>
                                                <li><Link to="/product/mensAftershave">Men's Aftershave</Link></li>
                                                <li><Link to="/product/mensPerfume">Men's Perfume</Link></li>
                                                <li><Link to="/product/aftershaveGiftSets">Aftershave Gift Sets</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Skin & Body Care</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/cleansers">Cleansers</Link></li>
                                                <li><Link to="/product/moisturisers">Moisturisers</Link></li>
                                                <li><Link to="/product/bathsShower">Baths & Shower</Link></li>
                                                <li><Link to="/product/bodyCare">Body Care</Link></li>
                                                <li><Link to="/product/lipBalmCare">Lip Balm & Care</Link></li>
                                                <li><Link to="/product/handFootCare">Hand & Foot Care</Link></li>
                                                <li><Link to="/product/beautyToolsTechnology">Beauty Tools & Technology</Link></li>
                                                <li><Link to="/product/skinBodyGiftSets">Skin & Body Gift Sets</Link></li>
                                                <li><Link to="/product/mensGroomingShaving">Men's Grooming, Shaving</Link></li>
                                                <li><Link to="/product/mensBathBody">Mens Bath & Body</Link></li>
                                                <li><Link to="/product/mensWashBags">Mens Wash Bags</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Hair Care & Styling</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/hairCare">Hair Care</Link></li>
                                                <li><Link to="/product/shampoo">Shampoo</Link></li>
                                                <li><Link to="/product/conditioner">Conditioner</Link></li>
                                                <li><Link to="/product/hairTreatments">Hair Treatments</Link></li>
                                                <li><Link to="/product/hairStylingProducts">Hair Styling Products</Link></li>
                                                <li><Link to="/product/hairBrushes">Hair Brushes</Link></li>
                                                <li><Link to="/product/electricalHairBeauty">Electrical Hair & Beauty</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item5">Baby & Child <i className="fas fa-angle-down"></i></label>
                                <input type="checkbox" id="showMega5" />
                                <label htmlFor="showMega5" className="mobile-item5">Baby & Child</label>
                                <div className="mega-box5">
                                    <div className="content">
                                        <div className="row">
                                            <header>Kids Clothing & Shoes</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/kids-shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/product/kids-dresses">Dresses</Link></li>
                                                <li><Link to="/product/kids-pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                                <li><Link to="/product/kids-trousersLeggings">Trousers & Leggings</Link></li>
                                                <li><Link to="/product/kids-jeans">Jeans</Link></li>
                                                <li><Link to="/product/kids-partyWear">Party Wear</Link></li>
                                                <li><Link to="/product/kids-girlsBriefs">Girls Briefs</Link></li>
                                                <li><Link to="/product/kids-socks">Socks</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Girls Shoes</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/girls-trainers">Trainers</Link></li>
                                                <li><Link to="/product/girls-smartShoes">Smart Shoes</Link></li>
                                                <li><Link to="/product/girls-sandals">Sandals</Link></li>
                                                <li><Link to="/product/girls-flipflopsWellingtonBoots">Flipflops Wellington Boots</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Boys Clothes</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/boys-shortsTrousers">Shorts & Trousers</Link></li>
                                                <li><Link to="/product/boys-shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/product/boys-pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                                <li><Link to="/product/boys-partywear">Party wear</Link></li>
                                                <li><Link to="/product/boys-pants">Pants</Link></li>
                                                <li><Link to="/product/boys-socks">Socks</Link></li>
                                                <li><Link to="/product/boys-hats">Hats</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <header>Boys Shoes</header>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/boys-trainers">Trainers</Link></li>
                                                <li><Link to="/product/boys-smartShoes">Smart Shoes</Link></li>
                                                <li><Link to="/product/boys-sandals">Sandals</Link></li>
                                                <li><Link to="/product/boys-wellingtonBoots">Wellington Boots</Link></li>
                                                <li><Link to="/product/boys-flipflops">Flipflops</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Nav
