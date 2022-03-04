import React, { useState, useEffect } from 'react';
import { Accordion, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';

const ManageProducts = () => {
  const [filter, setFilter] = useState([])
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      });
  }, [products]);


  const filterProduct = (catProduct) => {
    const updatedProduct = products.filter((curElem) => {
      return curElem.category === catProduct;
    });
    setFilter(updatedProduct);

  };

  const handleDelete = id => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount) {
          alert('Successfully Deleted')
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
        }
      })
  }
  return (
    <div>
      <Helmet>
        <title>
          Manage Products
        </title>
        <meta name="description" content="This is Magpyehub Online Shop" />
      </Helmet>
      <Header></Header>
      <Container>
        <Row>
          <Col md={4}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Home Furnishings & Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('bedding') }} to="">Bedding</Link> <br />
                    <Link onClick={() => { filterProduct('pillows') }} to="">Pillows</Link> <br />
                    <Link onClick={() => { filterProduct('throwsBlanketsAndSpreads') }} to="">Throws, blankets and Spreads</Link> <br />
                    <Link onClick={() => { filterProduct('towels') }} to="">Towels</Link> <br />
                    <Link onClick={() => { filterProduct('bathroomAccessories') }} to="">Bathroom Accessories</Link> <br />
                    <Link onClick={() => { filterProduct('cushions') }} to="">Cushions</Link> <br />
                    <Link onClick={() => { filterProduct('candlesAndHomeFragrances') }} to="">Candles and Home Fragrances</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cooking & Dining</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('potsPans') }} to="">Pots & Pans</Link><br />
                    <Link onClick={() => { filterProduct('tableware') }} to="">Tableware</Link><br />
                    <Link onClick={() => { filterProduct('glassesDrinkware') }} to="">Glasses & Drinkware</Link><br />
                    <Link onClick={() => { filterProduct('cutlery') }} to="">Cutlery</Link><br />
                    <Link onClick={() => { filterProduct('foodProcessorsMixersBlendersJuicers') }} to="">Food Processors, Mixers, Blenders & Juicers</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Clothing</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('dresses') }} to="">Dresses</Link> <br />
                    <Link onClick={() => { filterProduct('jeans') }} to="">Jeans</Link> <br />
                    <Link onClick={() => { filterProduct('shirtsTops') }} to="">Shirts & Tops</Link> <br />
                    <Link onClick={() => { filterProduct('shorts') }} to="">Shorts</Link> <br />
                    <Link onClick={() => { filterProduct('skirts') }} to="">Skirts</Link> <br />
                    <Link onClick={() => { filterProduct('sportsTrainingGym') }} to="">Sports & Training/Gym </Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Lingerie, Nightwear & Hosiery</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('brasSportsBras') }} to="">Bras & Sports Bras</Link><br />
                    <Link onClick={() => { filterProduct('Nightwear') }} to="">Nightwear</Link><br />
                    <Link onClick={() => { filterProduct('socks') }} to="">Socks</Link><br />
                    <Link onClick={() => { filterProduct('tights') }} to="">Tights</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Clothing</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('blazers') }} to="">Blazers</Link> <br />
                    <Link onClick={() => { filterProduct('MenJeans') }} to="">Jeans</Link> <br />
                    <Link onClick={() => { filterProduct('poloshirts') }} to="">Polo Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('menShirts') }} to="">Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('menShorts') }} to="">Shorts</Link> <br />
                    <Link onClick={() => { filterProduct('MenSportsClothesGym') }} to="">Sports Clothes/Gym</Link> <br />
                    <Link onClick={() => { filterProduct('suits') }} to="">Suits</Link> <br />
                    <Link onClick={() => { filterProduct('swimwear') }} to="">Swimwear</Link> <br />
                    <Link onClick={() => { filterProduct('trousers') }} to="">Trousers</Link> <br />
                    <Link onClick={() => { filterProduct('t-shirts') }} to="">T-Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('waistcoats') }} to="">Waistcoats</Link> <br />
                    <Link onClick={() => { filterProduct('partyWear') }} to="">Partywear</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Nightwear, Underwear & Socks</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('PyjamasNightwear') }} to="">Pyjamas & Nightwear</Link><br />
                    <Link onClick={() => { filterProduct('MenSocks') }} to="">Socks</Link><br />
                    <Link onClick={() => { filterProduct('underwear') }} to="">Underwear</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Makeup</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('foundations') }} to="">Foundations</Link> <br />
                    <Link onClick={() => { filterProduct('concealers') }} to="">Concealers</Link> <br />
                    <Link onClick={() => { filterProduct('eyeshadows') }} to="">Eyeshadows</Link> <br />
                    <Link onClick={() => { filterProduct('mascaras') }} to="">Mascaras</Link> <br />
                    <Link onClick={() => { filterProduct('lipsticks') }} to="">Lipsticks</Link> <br />
                    <Link onClick={() => { filterProduct('nailPolish') }} to="">Nail Polish</Link> <br />
                    <Link onClick={() => { filterProduct('makeupGiftsets') }} to="">Makeup Gift sets</Link> <br />
                    <Link onClick={() => { filterProduct('MakeUpBrushes') }} to="">Make up Brushes</Link> <br />
                    <Link onClick={() => { filterProduct('handNailsets') }} to="">Hand & Nail sets</Link> <br />
                    <Link onClick={() => { filterProduct('makeupBags') }} to="">Makeup Bags</Link> <br />
                    <Link onClick={() => { filterProduct('makeupAccessories') }} to="">Makeup Accessories</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Fragrance</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('womensPerfume') }} to="">Women's Perfume</Link><br />
                    <Link onClick={() => { filterProduct('perfumeGiftSets') }} to="">Perfume Gift Sets</Link><br />
                    <Link onClick={() => { filterProduct('mensAftershave') }} to="">Men's Aftershave</Link><br />
                    <Link onClick={() => { filterProduct('mensPerfume') }} to="">Men's Perfume</Link><br />
                    <Link onClick={() => { filterProduct('aftershaveGiftSets') }} to="">Aftershave Gift Sets</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Skin & Body Care</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('cleansers') }} to="">Cleansers</Link><br />
                    <Link onClick={() => { filterProduct('moisturisers') }} to="">Moisturisers</Link><br />
                    <Link onClick={() => { filterProduct('bathsShower') }} to="">Baths & Shower</Link><br />
                    <Link onClick={() => { filterProduct('bodyCare') }} to="">Body Care</Link><br />
                    <Link onClick={() => { filterProduct('lipBalmCare') }} to="">Lip Balm & Care</Link><br />
                    <Link onClick={() => { filterProduct('handFootCare') }} to="">Hand & Foot Care</Link><br />
                    <Link onClick={() => { filterProduct('beautyToolsTechnology') }} to="">Beauty Tools & Technology</Link><br />
                    <Link onClick={() => { filterProduct('skinBodyGiftSets') }} to="">Skin & Body Gift Sets</Link><br />
                    <Link onClick={() => { filterProduct('mensGroomingShaving') }} to="">Men's Grooming, Shaving</Link><br />
                    <Link onClick={() => { filterProduct('mensBathBody') }} to="">Mens Bath & Body</Link><br />
                    <Link onClick={() => { filterProduct('mensWashBags') }} to="">Mens Wash Bags</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Hair Care & Styling</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('hairCare') }} to="">Hair Care</Link><br />
                    <Link onClick={() => { filterProduct('shampoo') }} to="">Shampoo</Link><br />
                    <Link onClick={() => { filterProduct('conditioner') }} to="">Conditioner</Link><br />
                    <Link onClick={() => { filterProduct('hairTreatments') }} to="">Hair Treatments</Link><br />
                    <Link onClick={() => { filterProduct('hairStylingProducts') }} to="">Hair Styling Products</Link><br />
                    <Link onClick={() => { filterProduct('hairBrushes') }} to="">Hair Brushes</Link><br />
                    <Link onClick={() => { filterProduct('electricalHairBeauty') }} to="">Electrical Hair & Beauty</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Kids Clothing & Shoes</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('kidsshirtsTops') }} to="">Shirts & Tops</Link><br />
                    <Link onClick={() => { filterProduct('kidsdresses') }} to="">Dresses</Link><br />
                    <Link onClick={() => { filterProduct('kidspyjamasNightwear') }} to="">Pyjamas & Nightwear</Link><br />
                    <Link onClick={() => { filterProduct('kidstrousersLeggings') }} to="">Trousers & Leggings</Link><br />
                    <Link onClick={() => { filterProduct('kidsjeans') }} to="">Jeans</Link><br />
                    <Link onClick={() => { filterProduct('kidspartyWear') }} to="">Party Wear</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Baby & Toddler Milk</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('BabyToddlerFood') }} to="">Baby & Toddler Food</Link><br />
                    <Link onClick={() => { filterProduct('BabyToddlerMilk') }} to="">Baby & Toddler Milk</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Boys Clothes</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('kidsshortsTrousers') }} to="">Shorts & Trousers</Link><br />
                    <Link onClick={() => { filterProduct('kidsshirtsTops') }} to="">Shirts & Tops</Link><br />
                    <Link onClick={() => { filterProduct('kidspyjamasNightwear') }} to="">Pyjamas & Nightwear</Link><br />
                    <Link onClick={() => { filterProduct('kidspartywear') }} to="">Party wear</Link><br />
                    <Link onClick={() => { filterProduct('kidspants') }} to="">Pants</Link><br />
                    <Link onClick={() => { filterProduct('kidssocks') }} to="">Socks</Link><br />
                    <Link onClick={() => { filterProduct('kidshats') }} to="">Hats</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Kids Travel</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('CarSeats') }} to="">Car Seats</Link><br />
                    <Link onClick={() => { filterProduct('BabyCarriers') }} to="">Baby Carriers</Link><br />
                    <Link onClick={() => { filterProduct('Strollers') }} to="">Strollers</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Living Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('sofasArmchairs') }}>Sofas & Armchairs</Link> <br />
                    <Link to="" onClick={() => { filterProduct('tVStands') }}>TV Stands</Link> <br />
                    <Link to="" onClick={() => { filterProduct('coffeeTables') }}>Coffee Tables</Link> <br />
                    <Link to="" onClick={() => { filterProduct('bookcasesShelving') }}>Bookcases & Shelving</Link> <br />
                    <Link to="" onClick={() => { filterProduct('cabinetsSideboards') }}>Cabinets & Sideboards</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Bedroom Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('beds') }}>Beds</Link><br />
                    <Link to="" onClick={() => { filterProduct('mattresses') }}>Mattresses</Link><br />
                    <Link to="" onClick={() => { filterProduct('bedsideTables') }}>Bedside Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('chestsDrawers') }}>Chests of Drawers</Link><br />
                    <Link to="" onClick={() => { filterProduct('dressingTables') }}>Dressing Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('wardrobes') }}>Wardrobes</Link><br />
                    <Link to="" onClick={() => { filterProduct('childrenBedroom') }}>Children's Bedroom</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Dining Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('DiningTables') }}>Dining Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('DiningChairs') }}>Dining Chairs </Link><br />
                    <Link to="" onClick={() => { filterProduct('BarChairsStools') }}>Bar Chairs & Stools</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>Home Office & Storage</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('OfficeDesks') }}>Office Desks</Link><br />
                    <Link to="" onClick={() => { filterProduct('OfficeChairs') }}>Office Chairs</Link><br />
                    <Link to="" onClick={() => { filterProduct('HomeStorage') }}>Home Storage</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>Lighting</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('CeilingLights') }}>Ceiling Lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('DeskTableLamps') }}>Desk & Table lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('FloorLamps') }}>Floor Lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('WallLighting') }}>Wall Lighting</Link><br />
                    <Link to="" onClick={() => { filterProduct('GardenOutdoorlights') }}>Garden & Outdoor lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('LightBulbs') }}>Light Bulbs</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>Living Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('sofasArmchairs') }}>Sofas & Armchairs</Link> <br />
                    <Link to="" onClick={() => { filterProduct('tVStands') }}>TV Stands</Link> <br />
                    <Link to="" onClick={() => { filterProduct('coffeeTables') }}>Coffee Tables</Link> <br />
                    <Link to="" onClick={() => { filterProduct('bookcasesShelving') }}>Bookcases & Shelving</Link> <br />
                    <Link to="" onClick={() => { filterProduct('cabinetsSideboards') }}>Cabinets & Sideboards</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>Bedroom Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('beds') }}>Beds</Link><br />
                    <Link to="" onClick={() => { filterProduct('mattresses') }}>Mattresses</Link><br />
                    <Link to="" onClick={() => { filterProduct('bedsideTables') }}>Bedside Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('chestsDrawers') }}>Chests of Drawers</Link><br />
                    <Link to="" onClick={() => { filterProduct('dressingTables') }}>Dressing Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('wardrobes') }}>Wardrobes</Link><br />
                    <Link to="" onClick={() => { filterProduct('childrenBedroom') }}>Children's Bedroom</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>Dining Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('DiningTables') }}>Dining Tables</Link><br />
                    <Link to="" onClick={() => { filterProduct('DiningChairs') }}>Dining Chairs </Link><br />
                    <Link to="" onClick={() => { filterProduct('BarChairsStools') }}>Bar Chairs & Stools</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header>Home Office & Storage</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('OfficeDesks') }}>Office Desks</Link><br />
                    <Link to="" onClick={() => { filterProduct('OfficeChairs') }}>Office Chairs</Link><br />
                    <Link to="" onClick={() => { filterProduct('HomeStorage') }}>Home Storage</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="24">
                <Accordion.Header>Lighting</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('CeilingLights') }}>Ceiling Lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('DeskTableLamps') }}>Desk & Table lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('FloorLamps') }}>Floor Lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('WallLighting') }}>Wall Lighting</Link><br />
                    <Link to="" onClick={() => { filterProduct('GardenOutdoorlights') }}>Garden & Outdoor lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('LightBulbs') }}>Light Bulbs</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="25">
                <Accordion.Header>Travel & Luggage</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('BackPacks') }} to="">Back Packs</Link><br />
                    <Link onClick={() => { filterProduct('HandLuggage') }} to="">Hand Luggage</Link><br />
                    <Link onClick={() => { filterProduct('Suitcases') }} to="">Suitcases</Link><br />
                    <Link onClick={() => { filterProduct('HoldallsWeekendBags') }} to="">Holdalls & Weekend  Bags</Link><br />
                    <Link onClick={() => { filterProduct('Camping') }} to="">Camping</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="26">
                <Accordion.Header>Sewing & Crafts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('SewingMachines') }} to="">Sewing Machines</Link><br />
                    <Link onClick={() => { filterProduct('GamesPuzzles') }} to="">Games & Puzzles</Link><br />
                    <Link onClick={() => { filterProduct('WoolYarn') }} to="">Wool & Yarn</Link><br />
                    <Link onClick={() => { filterProduct('Stattonery') }} to="">Stattonery</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="27">
                <Accordion.Header>Fitness</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Treadmills') }} to="">Treadmills</Link><br />
                    <Link onClick={() => { filterProduct('Exercise') }} to=" Bikes">Exercise Bikes</Link><br />
                    <Link onClick={() => { filterProduct('Weights') }} to="">Weights</Link><br />
                    <Link onClick={() => { filterProduct('FitnessMachinesTechonology') }} to=" ">Fitness Machines & Techonology </Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="28">
                <Accordion.Header>Gifts By Recipient</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('giftsForHer') }} to="">Gifts for Her</Link><br />
                    <Link onClick={() => { filterProduct('giftsForHim') }} to="">Gifts for Him</Link><br />
                    <Link onClick={() => { filterProduct('giftsForKids') }} to="">Gifts for Kids</Link><br />
                    <Link onClick={() => { filterProduct('giftsForCouples') }} to="">Gifts for Couples</Link><br />
                    <Link onClick={() => { filterProduct('giftsForBabies') }} to="">Gifts for Babies</Link><br />
                    <Link onClick={() => { filterProduct('giftsForTeenagers') }} to="">Gifts for Teenagers</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="29">
                <Accordion.Header>Food & Drink Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Hampers') }} to="">Hampers</Link><br />
                    <Link onClick={() => { filterProduct('Chocolate') }} to="">Chocolate</Link> <br />
                    <Link onClick={() => { filterProduct('Alcohol') }} to="">Alcohol</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="30">
                <Accordion.Header>Popular Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('BeautyFragranceGifts') }} to="">Beauty & Fragrance Gifts</Link><br />
                    <Link onClick={() => { filterProduct('GamesAndPuzzles') }} to="">Games and Puzzles</Link><br />
                    <Link onClick={() => { filterProduct('CandlesHomeFragrance') }} to="">Candles & Home Fragrance</Link><br />
                    <Link onClick={() => { filterProduct('CookingBaking') }} to="">Cooking & Baking </Link><br />
                    <Link onClick={() => { filterProduct('Gardening') }} to="">Gardening </Link><br />
                    <Link onClick={() => { filterProduct('GiftWrapPartyShop') }} to="">Gift Wrap & Party Shop</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="31">
                <Accordion.Header>Gift Inspiration</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('LuxuryGifts') }} to="">Luxury Gifts</Link> <br />
                    <Link onClick={() => { filterProduct('Techies') }} to="">Techies</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="32">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('aptamil') }} to="">Aptamil</Link><br />
                    <Link onClick={() => { filterProduct('baby-club') }} to="">Baby Club</Link><br />
                    <Link onClick={() => { filterProduct('britax') }} to="">Britax</Link><br />
                    <Link onClick={() => { filterProduct('fit-flop') }} to="">Fit Flop</Link><br />
                    <Link onClick={() => { filterProduct('gucci') }} to="">Gucci</Link><br />
                    <Link onClick={() => { filterProduct('hipp') }} to="">Hipp</Link><br />
                    <Link onClick={() => { filterProduct('jole') }} to="">Jole</Link><br />
                    <Link onClick={() => { filterProduct('levis') }} to="">Levis</Link><br />
                    <Link onClick={() => { filterProduct('maxi-cosi') }} to="">Maxi Cosi</Link><br />
                    <Link onClick={() => { filterProduct('phase-eight') }} to="">Phase Eight</Link><br />
                    <Link onClick={() => { filterProduct('ted-baker') }} to="">Ted Baker</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={8}>
            <h2>Total Product: {products.length}</h2>
            {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </div> :
              filter.map(product => <div key={product._id}
                product={product}>
                <Container>
                  <Row style={{

                    borderBottom: '1px solid rgb(159 159 159)',
                    margin: '10px 0'
                  }}>
                    <Col xs={6} md={2}>
                      {/* <img src={`data:image/jpg;base64,${product.img}`} alt="" width="100px" height="100px" /> */}
                      <img src={product.img} alt="" width="100px" height="100px" />
                    </Col>
                    <Col xs={6} md={4} style={{
                      textAlign: 'start'
                    }}>
                      <Link to={`/details/${product._id}`}>
                        <h5>{product.title}</h5>
                      </Link>
                      <p>Product Code: {product._id}</p>
                    </Col>
                    <Col xs={6} md={2}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>

                    </Col>
                    <Col xs={6} md={2}>

                      <i class="fa-solid fa-xmark"></i>
                      <p>
                        <svg style={{
                          color: 'red',
                          cursor: 'pointer'
                        }} onClick={() => handleDelete(product._id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>)
            }
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default ManageProducts;
