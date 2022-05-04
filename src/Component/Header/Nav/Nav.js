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
                                <label className="desktop-item1">
                                    <Link to="/HomeAndGarden">Home & Garden</Link>
                                </label>
                                <input type="checkbox" id="showMega1" />
                                <label htmlFor="showMega1" className="mobile-item1">
                                    Home & Garden
                                </label>
                                <div className="mega-box1">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Bedding</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/duvetCovers">Duvet Covers</Link></li>
                                                <li><Link to="/homeAndGarden/bedding">Bed Sheets</Link></li>
                                                <li><Link to="/homeAndGarden/pillowCases">Pillow Cases</Link></li>
                                                <li><Link to="/homeAndGarden/duvets">Duvets</Link></li>
                                                <li><Link to="/homeAndGarden/pillows">Pillows</Link></li>
                                                <li><Link to="/homeAndGarden/throwsBlanketsAndSpreads">Throws & Blankets</Link></li>
                                                <li><Link to="/homeAndGarden/childrensBedding">Children's Bedding</Link></li>
                                                <li><Link to="/homeAndGarden/shopBedding">Shop Bedding</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Cooking & Dining</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/cookwareBakeware">Cookware & Bakeware</Link></li>
                                                <li><Link to="/homeAndGarden/cutlery">Tableware & Cutlery</Link></li>
                                                <li><Link to="/homeAndGarden/glassesDrinkware">Glasses & Drinkware</Link></li>
                                                <li><Link to="/homeAndGarden/potsPans">Pots & Pans</Link></li>
                                                <li><Link to="/homeAndGarden/foodPreparation">Food Preparation</Link></li>
                                                <li><Link to="/homeAndGarden/picnicware">Picnicware</Link></li>
                                                <li><Link to="/homeAndGarden/kitchenUtensilsGadgets">Kitchen Utensils & Gadgets</Link></li>
                                                <li><Link to="/homeAndGarden/kitchenBins">Kitchen Bins</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Décor & Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/homeAccessories">Home Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/cushions">Cushions & Bean Bags</Link></li>
                                                <li><Link to="/homeAndGarden/candlesHomeFragrance">Candles & Home Fragrance</Link></li>
                                                <li><Link to="/homeAndGarden/towels"> Towels</Link></li>
                                                <li><Link to="/homeAndGarden/picturesArtFrames">Pictures, Art & Frames</Link></li>
                                                <li><Link to="/homeAndGarden/mirrors"> Mirrors</Link></li>
                                                <li><Link to="/homeAndGarden/rugs"> Rugs</Link></li>
                                                <li><Link to="/homeAndGarden/storage"> Storage</Link></li>
                                                <li><Link to="/homeAndGarden/wallpaperPaintDIY"> Wallpaper, Paint & DIY</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Curtains, Blinds & Floors</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/curtains">Curtains</Link></li>
                                                <li><Link to="/homeAndGarden/madeToMeasureCurtains">Made to Measure Curtains</Link></li>
                                                <li><Link to="/homeAndGarden/curtainPolesAccessories">Curtain Poles & Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/blinds"> Blinds</Link></li>
                                                <li><Link to="/homeAndGarden/fabrics"> Fabrics</Link></li>
                                                <li><Link to="/homeAndGarden/carpetsAndFlooring"> Carpets & Flooring</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Garden</h5>
                                            <hr />
                                            <ul className="mega-links">

                                                <li><Link to="/homeAndGarden/gardenFurnitureSets">Garden Furniture Sets</Link></li>
                                                <li><Link to="/homeAndGarden/gardenSeating">Garden Seating</Link></li>
                                                <li><Link to="/homeAndGarden/gasBBQs">Gas BBQs</Link></li>
                                                <li><Link to="/homeAndGarden/charcoalBBQs">Charcoal BBQs</Link></li>
                                                <li><Link to="/homeAndGarden/pizzaOvens">Pizza Ovens</Link></li>
                                                <li><Link to="/homeAndGarden/decorativeGardenAccessories"> Decorative Garden Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/ardenOutdoorlights"> Outdoor Lighting</Link></li>
                                                <li><Link to="/homeAndGarden/parasolsAccessories"> Parasols & Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/shopGarden"> Shop Garden</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item2">
                                    <Link to="/women">Women</Link>
                                </label>
                                <input type="checkbox" id="showMega2" />
                                <label htmlFor="showMega2" className="mobile-item2">
                                    Women
                                </label>
                                <div className="mega-box2">
                                    <div className="content">

                                        <div className="row" style={{

                                            marginRight: '0px'
                                        }}>
                                            <h5>Clothing</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/dresses">Dresses</Link></li>
                                                <li><Link to="/women/jeans">Jeans</Link></li>
                                                <li><Link to="/women/shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/women/shorts">Shorts</Link></li>
                                                <li><Link to="/women/skirts">Skirts</Link></li>
                                                <li><Link to="/women/sportsClothes ">Sports & Clothes  </Link></li>
                                                <li><Link to="/women/swimwearBeachwear ">Swimwear Beachwear  </Link></li>
                                                <li><Link to="/women/women-Trousers">Trousers</Link></li>
                                                <li><Link to="/women/leggings">Leggings</Link></li>
                                                <li><Link to="/women/plusSize">Plus Size</Link></li>

                                            </ul>
                                        </div>
                                        <div style={{
                                            marginTop: '24px',
                                            marginLeft: '0px'
                                        }} className="row">
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/maternityClothes ">Maternity Clothes</Link></li>
                                                <li><Link to="/women/cashmere">Cashmere</Link></li>
                                                <li><Link to="/women/coatsJackets ">Coats & Jackets</Link></li>
                                                <li><Link to="/women/jumpersKnitwear ">Jumpers & Knitwear</Link></li>
                                                <li><Link to="/women/jumpsuits ">Jumpsuits</Link></li>
                                                <li><Link to="/women/linen">Linen</Link></li>
                                                <li><Link to="/women/loungewear ">Loungewear</Link></li>
                                                <li><Link to="/women/petite ">Petite</Link></li>
                                                <li><Link to="/women/occasionwear ">Occasionwear</Link></li>
                                                <li><Link to="/women/weddingBoutique ">Wedding</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Footwear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/women-shoes">Shoes</Link></li>
                                                <li><Link to="/women/women-sandals">Sandals</Link></li>
                                                <li><Link to="/women/women-slippers">Slippers</Link></li>
                                                <li><Link to="/women/women-trainersAndPlimsoles">Trainers & Plimsoles</Link></li>
                                                <li><Link to="/women/women-courtShoes">Court Shoes</Link></li>
                                                <li><Link to="/women/women-boots">Boots</Link></li>
                                                <li><Link to="/women/women-pumps">Court Pumps</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Lingerie, Nightwear & Hosiery</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/brasSportsBras">Bras & Sports Bras</Link></li>
                                                <li><Link to="/women/Nightwear">Nightwear</Link></li>
                                                <li><Link to="/women/socks">Socks</Link></li>
                                                <li><Link to="/women/Knickers">Knickers</Link></li>
                                                <li><Link to="/women/tights">Tights</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row" style={{
                                            marginRight: '0px'
                                        }}>
                                            <h5 >Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/women-handbags">Handbags</Link></li>
                                                <li><Link to="/women/women-purses">Purses</Link></li>
                                                <li><Link to="/women/women-belts">Belts</Link></li>
                                                <li><Link to="/women/women-sunglasses">Sunglasses</Link></li>
                                                <li><Link to="/women/women-jewellery">Jewellery</Link></li>
                                                <li><Link to="/women/women-hats">Hats</Link></li>
                                                <li><Link to="/women/women-watches">Watches</Link></li>
                                                <li><Link to="/women/women-hairAccessories">Hair Accessories</Link></li>
                                                <li><Link to="/women/women-hatsGlovesScarves">Hats, Gloves & Scarves</Link></li>

                                            </ul>
                                        </div>
                                        <div className="row" style={{
                                            marginTop: '24px',
                                            marginLeft: '0px'
                                        }}>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/women-occasionHatsFascinators">Occasion Hats & Fascinators</Link></li>
                                                <li><Link to="/women/women-faceCoverings">Face Coverings</Link></li>
                                                <li><Link to="/women/women-readingGlassesGlassesCases">Reading Glasses & Glasses Cases</Link></li>
                                                <li><Link to="/women/women-keyrings">Keyrings</Link></li>
                                                <li><Link to="/women/women-umbrellas">Umbrellas</Link></li>
                                                <li><Link to="/women/women-suitcases">Suitcases</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item3">
                                    <Link to="/men">Men</Link>
                                </label>
                                <input type="checkbox" id="showMega3" />
                                <label htmlFor="showMega3" className="mobile-item3">
                                    Men
                                </label>
                                <div className="mega-box3">
                                    <div className="content">
                                        <div className="row" style={{
                                            marginRight: '0px'
                                        }}>
                                            <h5>Clothing</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/blazers">Blazers</Link></li>
                                                <li><Link to="/men/MenJeans">Jeans</Link></li>
                                                <li><Link to="/men/poloshirts">Polo Shirts</Link></li>
                                                <li><Link to="/men/menShirts">Shirts</Link></li>
                                                <li><Link to="/men/menShorts">Shorts</Link></li>
                                                <li><Link to="/men/menSportsClothesGym">Sports Clothes/Gym</Link></li>
                                                <li><Link to="/men/suits">Suits</Link></li>
                                                <li><Link to="/men/swimwear">Swimwear</Link></li>
                                                <li><Link to="/men/trousers">Trousers</Link></li>
                                                <li><Link to="/men/t-shirts">T-Shirts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row" style={{
                                            marginTop: '24px',
                                            marginLeft: '0px'
                                        }}>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/waistcoats">Waistcoats</Link></li>
                                                <li><Link to="/men/menCashmere">Cashmere</Link></li>
                                                <li><Link to="/men/menCoatsJackets">Coats & Jackets</Link></li>
                                                <li><Link to="/men/menSweatshirtsHoodies">Sweatshirts & Hoodies</Link></li>
                                                <li><Link to="/men/menJumpersCardigans">Jumpers & Cardigans</Link></li>
                                                <li><Link to="/men/menLinen">Linen</Link></li>
                                                <li><Link to="/men/menLoungewear">Loungewear</Link></li>
                                                <li><Link to="/men/menWeddingShop">Wedding Shop</Link></li>
                                                <li><Link to="/men/menHolidaySummerShop">Holiday & Summer Shop</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Nightwear, Underwear & Socks</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/pyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                                <li><Link to="/men/robesAndDressingGowns">Robes & Dressing Gowns</Link></li>
                                                <li><Link to="/men/menSocks">Socks</Link></li>
                                                <li><Link to="/men/underwear">Underwear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Footwear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/menBoots">Boots</Link></li>
                                                <li><Link to="/men/menShoes">Shoes</Link></li>
                                                <li><Link to="/men/menSandals">Sandals</Link></li>
                                                <li><Link to="/men/menSlippers">Slippers</Link></li>
                                                <li><Link to="/men/menTrainersAndPlimsoles">Trainers</Link></li>
                                                <li><Link to="/men/menWalkingBootsShoes">Walking Boots & Shoes</Link></li>

                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/menMensBags">Men's Bags</Link></li>
                                                <li><Link to="/men/menBelts">Belts</Link></li>
                                                <li><Link to="/men/menHats">Hats</Link></li>
                                                <li><Link to="/men/menWallets">Wallets</Link></li>
                                                <li><Link to="/men/menSunglasses">Sunglasses</Link></li>
                                                <li><Link to="/men/menWatches">Watches</Link></li>
                                                <li><Link to="/men/menJewellery">Jewellery</Link></li>
                                                <li><Link to="/men/menSuitcases">Suitcases</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item4">
                                    <Link to="/beauty">Beauty</Link>
                                </label>
                                <input type="checkbox" id="showMega4" />
                                <label htmlFor="showMega4" className="mobile-item4">
                                    Beauty
                                </label>
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
                                                <li><Link to="/product/makeupAccessories">Makeup Accessories</Link></li>
                                                <li><Link to="/product/handNailSets">Hand & Nail Sets</Link></li>
                                                <li><Link to="/product/makeupBrushes">Makeup Brushes</Link></li>
                                                <li><Link to="/product/makeupBags">Makeup Bags</Link></li>
                                                <li><Link to="/product/tintedMoisturisers">Tinted Moisturisers</Link></li>
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
                                                <li><Link to="/product/skinCareTreatments">Skin Care & Treatments</Link></li>
                                                <li><Link to="/product/sunCreamAfterSun">Sun Cream & After Sun</Link></li>
                                                <li><Link to="/product/beautyToolsTechnology">Beauty Tools & Technology</Link></li>
                                                <li><Link to="/product/menGrooming">Men's Grooming</Link></li>
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
                                <label className="desktop-item5">
                                    <Link to="/BabyAndChild">Baby & Child</Link>
                                </label>
                                <input type="checkbox" id="showMega5" />
                                <label htmlFor="showMega5" className="mobile-item5">
                                    Baby & Child
                                </label>
                                <div className="mega-box5">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Baby Food & Milk</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/BabyToddlerFood">Baby & Toddler Food</Link></li>
                                                <li><Link to="/product/BabyToddlerMilk">Baby & Toddler Milk</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Baby Home & Nursery</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/sleeping">Sleeping</Link></li>
                                                <li><Link to="/product/bathingChanging">Bathing & Changing</Link></li>
                                                <li><Link to="/product/feedingWeaning">Feeding & Weaning</Link></li>
                                                <li><Link to="/product/nurseryFunitureFurnishings">Nursery Funiture & Furnishings</Link></li>
                                                <li><Link to="/product/safetyHealthcare">Safety & Healthcare</Link></li>
                                                <li><Link to="/product/babyChecklist">Baby Checklist</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Baby Clothes (0-4 years)</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/babyToddlerclothes">Baby & Toddler clothes</Link></li>
                                                <li><Link to="/product/babyBoyClothes">Baby Boy Clothes</Link></li>
                                                <li><Link to="/product/babyGirlClothes">Baby Girl Clothes</Link></li>
                                                <li><Link to="/product/sleepsuitsBodysuits">Sleepsuits & Bodysuits</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Clothing & Shoes</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/AllGirlsclothes">All Girls clothes</Link></li>
                                                <li><Link to="/product/GirlsDresses">Girls Dresses</Link></li>
                                                <li><Link to="/product/GirlsShoes">Girls Shoes</Link></li>
                                                <li><Link to="/product/GirlsPyjamas">Girls Pyjamas</Link></li>
                                                <li><Link to="/product/AllBoysClothes">All Boys Clothes</Link></li>
                                                <li><Link to="/product/BoysPyjamas ">Boys Pyjamas </Link></li>
                                                <li><Link to="/product/BoysShoes">Boys Shoes</Link></li>
                                                <li><Link to="/product/BackToSchoolShop">Back to School Shop</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Travel</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/carSeats">Car Seats</Link></li>
                                                <li><Link to="/product/babyCarriers">Baby Carriers</Link></li>
                                                <li><Link to="/product/strollers">Strollers</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Toys & Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Toys">Toys</Link></li>
                                                <li><Link to="/product/BabyPreschoolToys">Baby & preschool Toys</Link></li>
                                                <li><Link to="/product/KidsGamesPuzzles">Games & Puzzles</Link></li>
                                                <li><Link to="/product/LEGO">LEGO</Link></li>
                                                <li><Link to="/product/GiftsForBabiesKids">Gifts for Babies & Kids</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item6">
                                    <Link to="/FurnitureAndLighting">Furniture & Lighting</Link>
                                </label>
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
                                <label className="desktop-item7">
                                    <Link to="/Electricals">Electricals</Link>
                                </label>
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
                                <label className="desktop-item8">
                                    <Link to="/FitnessAndTravel">Sport & Leisure</Link>
                                </label>
                                <input type="checkbox" id="showMega8" />
                                <label htmlFor="showMega8" className="mobile-item8">Sport & Leisure</label>
                                <div className="mega-box8">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Sportswear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/WomensClothing">Women's Clothing</Link></li>
                                                <li><Link to="/product/WomenSportsTrainers">Women's Sports Trainers</Link></li>
                                                <li><Link to="/product/MenClothing">Men's Clothing</Link></li>
                                                <li><Link to="/product/MenSportsTrainers">Men's Sports Trainers</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Fitness</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/FitnessMachinesTechnology">Fitness Machines & Technology</Link></li>
                                                <li><Link to="/product/SportsEquipment">Sports Equipment</Link></li>
                                                <li><Link to="/product/Treadmills">Treadmills</Link></li>
                                                <li><Link to="/product/ExerciseBikes">Exercise Bikes</Link></li>
                                                <li><Link to="/product/CrossTrainers">Cross Trainers</Link></li>
                                                <li><Link to="/product/Weights">Weights</Link></li>
                                                <li><Link to="/product/Smartwatches">Smartwatches</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Equipment by Sport</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Cycling">Cycling </Link></li>
                                                <li><Link to="/product/GymTrainingFitness ">Gym, Training & Fitness </Link></li>
                                                <li><Link to="/product/Running">Running </Link></li>
                                                <li><Link to="/product/Swimming">Swimming </Link></li>
                                                <li><Link to="/product/Yoga">Yoga </Link></li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Sports Brands</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/ExploreOurBrands">Explore our Brands</Link></li>
                                                <li><Link to="/product/Adidas">Adidas</Link></li>
                                                <li><Link to="/product/SweatyBetty">Sweaty Betty</Link></li>
                                                <li><Link to="/product/TheNorthFace">The North Face</Link></li>
                                                <li><Link to="/product/Therabody">Therabody</Link></li>
                                                <li><Link to="/product/UnderArmour">Under Armour</Link></li>

                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Hobbies & Crafts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/Haberdashery">Haberdashery</Link></li>
                                                <li><Link to="/product/GamesPuzzles">Games & Puzzles</Link></li>
                                                <li><Link to="/product/Crafts">Crafts</Link></li>
                                                <li><Link to="/product/Stationery">Stationery</Link></li>
                                                <li><Link to="/product/Books">Books</Link></li>
                                                <li><Link to="/product/SewingMachines">Sewing Machines</Link></li>
                                                <li><Link to="/product/WoolYarn">Wool & Yarn</Link></li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Travel & Luggage</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/ViewAllLuggage">View All Luggage</Link></li>
                                                <li><Link to="/product/Backpacks">Backpacks</Link></li>
                                                <li><Link to="/product/CabinCases">Cabin Cases</Link></li>
                                                <li><Link to="/product/Suitcases">Suitcases</Link></li>
                                                <li><Link to="/product/HoldallsWeekendBags">Holdalls & Weekend Bags</Link></li>
                                                <li><Link to="/product/Camping">Camping</Link></li>
                                                <li><Link to="/product/HolidaySummerShop">Holiday & Summer Shop</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item9">
                                    <Link to="/Gifts">Gifts</Link>
                                </label>
                                <input type="checkbox" id="showMega9" />
                                <label htmlFor="showMega9" className="mobile-item9">Gifts</label>
                                <div className="mega-box9">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Gifts By Recipient</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/product/GiftsForHer">Gifts for Her</Link></li>
                                                <li><Link to="/product/GiftsForHim">Gifts for Him</Link></li>
                                                <li><Link to="/product/GiftsForKids">Gifts for Kids</Link></li>
                                                <li><Link to="/product/GiftsForCouples">Gifts for Couples</Link></li>
                                                <li><Link to="/product/GiftsForBabies">Gifts for Babies</Link></li>
                                                <li><Link to="/product/GiftsForTeenagers">Gifts for Teenagers</Link></li>
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
