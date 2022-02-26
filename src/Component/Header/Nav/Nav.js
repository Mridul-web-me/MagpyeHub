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
                                        <h2 className='text-center' style={{ fontSize: '16px', color: '#fff' }}>QUOTE</h2>
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
                                <label className="desktop-item1">Home & Garden</label>
                                <input type="checkbox" id="showMega1" />
                                <label htmlFor="showMega1" className="mobile-item1">Home & Garden</label>
                                <div className="mega-box1">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Home Furnishings & Accessories</h5>
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
                                            <h5>Cooking & Dining</h5>
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
                                <label className="desktop-item2">Women</label>
                                <input type="checkbox" id="showMega2" />
                                <label htmlFor="showMega2" className="mobile-item2">Women</label>
                                <div className="mega-box2">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Clothing</h5>
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
                                            <h5>Lingerie, Nightwear & Hosiery</h5>
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
                                <label className="desktop-item3">Men</label>
                                <input type="checkbox" id="showMega3" />
                                <label htmlFor="showMega3" className="mobile-item3">Men</label>
                                <div className="mega-box3">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Clothing</h5>
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
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Nightwear, Underwear & Socks</h5>
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
                                <label className="desktop-item4">Beauty</label>
                                <input type="checkbox" id="showMega4" />
                                <label htmlFor="showMega4" className="mobile-item4">Beauty</label>
                                <div className="mega-box4">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Makeup</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/foundations">Foundations</Link></li>
                                                <li><Link to="/product/concealers">Concealers</Link></li>
                                                <li><Link to="/product/eyeshadows">Eyeshadows</Link></li>
                                                <li><Link to="/product/mascaras">Mascaras</Link></li>
                                                <li><Link to="/product/lipsticks">Lipsticks</Link></li>
                                                <li><Link to="/product/nailPolish">Nail Polish</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Fragrance</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/womensPerfume">Women's Perfume</Link></li>
                                                <li><Link to="/product/perfumeGiftSets">Perfume Gift Sets</Link></li>
                                                <li><Link to="/product/mensAftershave">Men's Aftershave</Link></li>
                                                <li><Link to="/product/aftershaveGiftSets">Aftershave Gift Sets</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Skin & Body Care</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/cleansers">Cleansers</Link></li>
                                                <li><Link to="/product/moisturisers">Moisturisers</Link></li>
                                                <li><Link to="/product/bathsShower">Baths & Shower</Link></li>
                                                <li><Link to="/product/bodyCare">Body Care</Link></li>
                                                <li><Link to="/product/lipBalmCare">Lip Balm & Care</Link></li>
                                                <li><Link to="/product/handFootCare">Hand & Foot Care</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Hair Care & Styling</h5>
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
                                <label className="desktop-item5">Baby & Child</label>
                                <input type="checkbox" id="showMega5" />
                                <label htmlFor="showMega5" className="mobile-item5">Baby & Child</label>
                                <div className="mega-box5">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Kids Clothing & Shoes</h5>
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
                                            <h5>Girls Shoes</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/girls-trainers">Trainers</Link></li>
                                                <li><Link to="/product/girls-smartShoes">Smart Shoes</Link></li>
                                                <li><Link to="/product/girls-sandals">Sandals</Link></li>
                                                <li><Link to="/product/girls-flipflopsWellingtonBoots">Flipflops Wellington Boots</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Boys Clothes</h5>
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
                                            <h5>Boys Shoes</h5>
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
                            <li className='nav-item'>
                                <label className="desktop-item6">Furniture & Lighting</label>
                                <input type="checkbox" id="showMega6" />
                                <label htmlFor="showMega6" className="mobile-item6">Furniture & Lighting</label>
                                <div className="mega-box6">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Living Room Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/sofasArmchairs">Sofas & Armchairs</Link></li>
                                                <li><Link to="/product/tVStands">TV Stands</Link></li>
                                                <li><Link to="/product/coffeeTables">Coffee Tables</Link></li>
                                                <li><Link to="/product/bookcasesShelving">Bookcases & Shelving</Link></li>
                                                <li><Link to="/product/cabinetsSideboards">Cabinets & Sideboards</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Bedroom Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/beds">Beds</Link></li>
                                                <li><Link to="/product/mattresses">Mattresses</Link></li>
                                                <li><Link to="/product/bedsideTables">Bedside Tables</Link></li>
                                                <li><Link to="/product/chestsDrawers">Chests of Drawers</Link></li>
                                                <li><Link to="/product/dressingTables">Dressing Tables</Link></li>
                                                <li><Link to="/product/wardrobes">Wardrobes</Link></li>
                                                <li><Link to="/product/childrenBedroom">Children's Bedroom</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Dining Room Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/DiningTables">Dining Tables</Link></li>
                                                <li><Link to="/product/DiningChairs">Dining Chairs </Link></li>
                                                <li><Link to="/product/BarChairsStools">Bar Chairs & Stools</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Home Office & Storage</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/OfficeDesks">Office Desks</Link></li>
                                                <li><Link to="/product/OfficeChairs">Office Chairs</Link></li>
                                                <li><Link to="/product/HomeStorage">Home Storage</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Lighting</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/CeilingLights">Ceiling Lights</Link></li>
                                                <li><Link to="/product/DeskTableLamps">Desk & Table lamps</Link></li>
                                                <li><Link to="/product/FloorLamps">Floor Lamps</Link></li>
                                                <li><Link to="/product/WallLighting">Wall Lighting</Link></li>
                                                <li><Link to="/product/GardenOutdoorlights">Garden & Outdoor lights</Link></li>
                                                <li><Link to="/product/LightBulbs">Light Bulbs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item7">Electricals</label>
                                <input type="checkbox" id="showMega7" />
                                <label htmlFor="showMega7" className="mobile-item7">Electricals</label>
                                <div className="mega-box7">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Television & Audio</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Television">Television</Link></li>
                                                <li><Link to="/product/SoundbarsHomeCinema">Soundbars & Home Cinema</Link></li>
                                                <li><Link to="/product/TVStandsWallMounts">TV Stands & Wall Mounts</Link></li>
                                                <li><Link to="/product/TVStreamingDevices">TV Streaming Devices</Link></li>
                                                <li><Link to="/product/SpeakersSoundSystems">Speakers & Sound Systems</Link></li>
                                                <li><Link to="/product/Headphones">Headphones</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Computing & Gaming</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/IpadsTablets">Ipads & Tablets</Link></li>
                                                <li><Link to="/product/LaptopsMacBooks">Laptops & MacBooks </Link></li>
                                                <li><Link to="/product/PCsDesktopComputers">PCs & Desktop Computers</Link></li>
                                                <li><Link to="/product/MonitorsProjectors">Monitors & Projectors</Link></li>
                                                <li><Link to="/product/PrintersAccessories">Printers & Accessories</Link></li>
                                                <li><Link to="/product/Gaming">Gaming</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Home Appliances</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/WashingMachines">Washing Machines</Link></li>
                                                <li><Link to="/product/FridgeFreezers">Fridge Freezers</Link></li>
                                                <li><Link to="/product/Dishwashers">Dishwashers</Link></li>
                                                <li><Link to="/product/CookersOvens">Cookers & Ovens</Link></li>
                                                <li><Link to="/product/Microwaves">Microwaves</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kitchen Appliances & Vacuums</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/CoffeeMachines">Coffee Machines</Link></li>
                                                <li><Link to="/product/Kettles">Kettles</Link></li>
                                                <li><Link to="/product/Toasters">Toasters</Link></li>
                                                <li><Link to="/product/VacuumCleaners">Vacuum Cleaners</Link></li>
                                                <li><Link to="/product/FansCoolingPurifiers">Fans, Cooling & Purifiers</Link></li>
                                                <li><Link to="/product/Ironing">Ironing</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Mobile, Cameras & Smart Tech</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/MobilePhonesAccessories">Mobile Phones & Accessories</Link></li>
                                                <li><Link to="/product/CamerasCamcorders">Cameras & Camcorders</Link></li>
                                                <li><Link to="/product/SmartFitnessWatches">Smart & Fitness Watches</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item8">Fitness & Travel</label>
                                <input type="checkbox" id="showMega8" />
                                <label htmlFor="showMega8" className="mobile-item8">Fitness & Travel</label>
                                <div className="mega-box8">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Travel & Luggage</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Television">Television</Link></li>
                                                <li><Link to="/product/Hand Luggage">Hand Luggage</Link></li>
                                                <li><Link to="/product/Suitcases">Suitcases</Link></li>
                                                <li><Link to="/product/HoldallsWeekendBags">Holdalls & Weekend  Bags</Link></li>
                                                <li><Link to="/product/Camping">Camping</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Sewing & Crafts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/SewingMachines">Sewing Machines</Link></li>
                                                <li><Link to="/product/GamesPuzzles">Games & Puzzles</Link></li>
                                                <li><Link to="/product/WoolYarn">Wool & Yarn</Link></li>
                                                <li><Link to="/product/Stattonery">Stattonery</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Fitness</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Treadmills">Treadmills</Link></li>
                                                <li><Link to="/product/Exercise Bikes">Exercise Bikes</Link></li>
                                                <li><Link to="/product/Weights">Weights</Link></li>
                                                <li><Link to="/product/FitnessMachinesTechonology ">Fitness Machines & Techonology </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item9">Gifts</label>
                                <input type="checkbox" id="showMega9" />
                                <label htmlFor="showMega9" className="mobile-item9">Gifts</label>
                                <div className="mega-box9">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Gifts By Recipient</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/giftsForHer">Gifts for Her</Link></li>
                                                <li><Link to="/product/giftsForHim">Gifts for Him</Link></li>
                                                <li><Link to="/product/giftsForKids">Gifts for Kids</Link></li>
                                                <li><Link to="/product/giftsForCouples">Gifts for Couples</Link></li>
                                                <li><Link to="/product/giftsForBabies">Gifts for Babies</Link></li>
                                                <li><Link to="/product/giftsForTeenagers">Gifts for Teenagers</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Food & Drink Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Hampers">Hampers</Link></li>
                                                <li><Link to="/product/Chocolate">Chocolate</Link></li>
                                                <li><Link to="/product/Alcohol">Alcohol</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Popular Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/BeautyFragranceGifts">Beauty & Fragrance Gifts</Link></li>
                                                <li><Link to="/product/GamesAndPuzzles">Games and Puzzles</Link></li>
                                                <li><Link to="/product/CandlesHomeFragrance">Candles & Home Fragrance</Link></li>
                                                <li><Link to="/product/CookingBaking">Cooking & Baking </Link></li>
                                                <li><Link to="/product/Gardening">Gardening </Link></li>
                                                <li><Link to="/product/GiftWrapPartyShop">Gift Wrap & Party Shop</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Gift Inspiration</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/LuxuryGifts">Luxury Gifts</Link></li>
                                                <li><Link to="/product/Techies">Techies</Link></li>
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
