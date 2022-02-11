import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Bedding from './Component/Product/HomeGarden/HomeFurnishingsAccessories/Bedding/Bedding';
import Pillows from './Component/Product/HomeGarden/HomeFurnishingsAccessories/Pillows/Pillows';
import ThrowsblanketsandSpreads from './Component/Product/HomeGarden/HomeFurnishingsAccessories/ThrowsblanketsandSpreads/ThrowsblanketsandSpreads';
import Towels from './Component/Product/HomeGarden/HomeFurnishingsAccessories/Towels/Towels';
import BathroomAccessories from './Component/Product/HomeGarden/HomeFurnishingsAccessories/BathroomAccessories/BathroomAccessories';
import Cushions from './Component/Product/HomeGarden/HomeFurnishingsAccessories/Cushions/Cushions';
import CandlesandHomeFragrances from './Component/Product/HomeGarden/HomeFurnishingsAccessories/CandlesandHomeFragrances/CandlesandHomeFragrances';
import GlassesDrinkware from './Component/Product/HomeGarden/CookingDining/GlassesDrinkware/GlassesDrinkware';
import Picnicware from './Component/Product/HomeGarden/CookingDining/Picnicware/Picnicware';
import PotsPans from './Component/Product/HomeGarden/CookingDining/PotsPans/PotsPans';
import Tableware from './Component/Product/HomeGarden/CookingDining/Tableware/Tableware';
import Cutlery from './Component/Product/HomeGarden/CookingDining/Cutlery/Cutlery';
import FoodProcessorsMixersBlendersJuicers from './Component/Product/HomeGarden/CookingDining/FoodProcessorsMixersBlendersJuicers/FoodProcessorsMixersBlendersJuicers';
import Dresses from './Component/Product/Women/Clothing/Dresses/Dresses';
import Jeans from './Component/Product/Women/Clothing/Jeans/Jeans';
import ShirtsTops from './Component/Product/Women/Clothing/ShirtsTops/ShirtsTops';
import Shorts from './Component/Product/Women/Clothing/Shorts/Shorts';
import Skirts from './Component/Product/Women/Clothing/Skirts/Skirts';
import SportsTrainingGym from './Component/Product/Women/Clothing/SportsTrainingGym/SportsTrainingGym';
import BrasSportsBras from './Component/Product/Women/LingerieNightwearHosiery/BrasSportsBras/BrasSportsBras';
import Nightwear from './Component/Product/Women/LingerieNightwearHosiery/Nightwear/Nightwear';
import Socks from './Component/Product/Women/LingerieNightwearHosiery/Socks/Socks';
import Tights from './Component/Product/Women/LingerieNightwearHosiery/Tights/Tights';
import Blazers from './Component/Product/Men/Clothing/Blazers/Blazers';
import MenJeans from './Component/Product/Men/Clothing/MenJeans/MenJeans';
import PoloShirts from './Component/Product/Men/Clothing/PoloShirts/PoloShirts';
import MenShirts from './Component/Product/Men/Clothing/MenShirts/MenShirts';
import MenShorts from './Component/Product/Men/Clothing/MenShorts/MenShorts';
import MenSportsClothesGym from './Component/Product/Men/Clothing/SportsClothes/Gym/MenSportsClothesGym';
import Suits from './Component/Product/Men/Clothing/Suits/Suits';
import Swimwear from './Component/Product/Men/Clothing/Swimwear/Swimwear';
import Trousers from './Component/Product/Men/Clothing/Trousers/Trousers';
import PyjamasNightwear from './Component/Product/Men/NightwearUnderwearSocks/PyjamasNightwear/PyjamasNightwear';
import MenSocks from './Component/Product/Men/NightwearUnderwearSocks/MenSocks/MenSocks';
import Underwear from './Component/Product/Men/NightwearUnderwearSocks/Underwear/Underwear';
import Foundations from './Component/Product/Beauty/Makeup/Foundations/Foundations';
import Concealers from './Component/Product/Beauty/Makeup/Concealers/Concealers';
import Eyeshadows from './Component/Product/Beauty/Makeup/Eyeshadows/Eyeshadows';
import Mascaras from './Component/Product/Beauty/Makeup/Mascaras/Mascaras';
import Lipsticks from './Component/Product/Beauty/Makeup/Lipsticks/Lipsticks';
import NailPolish from './Component/Product/Beauty/Makeup/NailPolish/NailPolish';
import MakeupGiftsSets from './Component/Product/Beauty/Makeup/MakeupGiftSets/MakeupGiftsSets';
import MakeupBrushes from './Component/Product/Beauty/Makeup/MakeupBrushes/MakeupBrushes';
import TShirts from './Component/Product/Men/Clothing/TShirts/TShirts';
import Waistcoats from './Component/Product/Men/Clothing/Waistcoats/Waistcoats';
import Partywear from './Component/Product/Men/Clothing/Partywear/Partywear';
import HandNailsets from './Component/Product/Beauty/Makeup/HandNailsets/HandNailsets';
import MakeupBags from './Component/Product/Beauty/Makeup/MakeupBags/MakeupBags';
import MakeupAccessories from './Component/Product/Beauty/Makeup/MakeupAccessories/MakeupAccessories';
import WomensPerfume from './Component/Product/Beauty/Fragrance/WomensPerfume/WomensPerfume';
import PerfumeGiftSets from './Component/Product/Beauty/Fragrance/PerfumeGiftSets/PerfumeGiftSets';
import MensAftershave from './Component/Product/Beauty/Fragrance/MensAftershave/MensAftershave';
import MensPerfume from './Component/Product/Beauty/Fragrance/MensPerfume/MensPerfume';
import AftershaveGiftSets from './Component/Product/Beauty/Fragrance/AftershaveGiftSets/AftershaveGiftSets';
import LoginForm from './Component/LoginForm/LoginForm';
import Login from './Component/LoginForm/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import YourAccount from './Component/Header/YourAccount/YourAccount';
import AddProduct from './Component/Product/AddProduct/AddProduct';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import ChangePass from './Component/Header/YourAccount/ChangePass/ChangePass';
import Cart from './Component/Product/Cart/Cart';
import ForgotPass from './Component/LoginForm/forgotPass/forgotPass';
import AddressBook from './Component/Header/YourAccount/AddressBook/AddressBook';
import MyDetails from './Component/Header/YourAccount/MyDetails/MyDetails';
import MyFiles from './Component/Header/YourAccount/MyFiles/MyFiles';
import ProceedToPayment from './Component/Product/Cart/ProceedToPayment/ProceedToPayment';
import SearchResult from './Component/Header/SearchBox/SearchResult/SearchResult';
import Checkout from './Component/Product/Cart/ProceedToPayment/Checkout/Checkout';
import OrderHistory from './Component/Header/YourAccount/OrderHistory/OrderHistory';
import UpdateDetails from './Component/Header/YourAccount/MyDetails/UpdateDetails/UpdateDetails';
import AddDetails from './Component/Header/YourAccount/MyDetails/AddDetails/AddDetails';
import ManageProducts from './Component/Product/ManageProducts/ManageProducts';






function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/register" element={<Login />} />
            <Route path="/bedding" element={<Bedding />} />
            <Route path="/pillows" element={<Pillows />} />
            <Route path="/throwsblanketsandSpreads" element={<ThrowsblanketsandSpreads />} />
            <Route path="/towels" element={<Towels />} />
            <Route path="/BathroomAccessories" element={<BathroomAccessories />} />
            <Route path="/Cushions" element={<Cushions />} />
            <Route path="/CandlesandHomeFragrances" element={<CandlesandHomeFragrances />} />
            <Route path="/GlassesDrinkware" element={<GlassesDrinkware />} />
            <Route path="/Picnicware" element={<Picnicware />} />
            <Route path="/PotsPans" element={<PotsPans />} />
            <Route path="/Tableware" element={<Tableware />} />
            <Route path="/Cutlery" element={<Cutlery />} />
            <Route path="/FoodProcessorsMixersBlendersJuicers" element={<FoodProcessorsMixersBlendersJuicers />} />
            <Route path="/Dresses" element={<Dresses />} />
            <Route path="/Jeans" element={<Jeans />} />
            <Route path="/ShirtsTops" element={<ShirtsTops />} />
            <Route path="/Shorts" element={<Shorts />} />
            <Route path="/Skirts" element={<Skirts />} />
            <Route path="/SportsTrainingGym" element={<SportsTrainingGym />} />
            <Route path="/BrasSportsBras" element={<BrasSportsBras />} />
            <Route path="/Nightwear" element={<Nightwear />} />
            <Route path="/Socks" element={<Socks />} />
            <Route path="/Tights" element={<Tights />} />
            <Route path="/Blazers" element={<Blazers />} />
            <Route path="/MenJeans" element={<MenJeans />} />
            <Route path="/PoloShirts" element={<PoloShirts />} />
            <Route path="/MenShirts" element={<MenShirts />} />
            <Route path="/MenShorts" element={<MenShorts />} />
            <Route path="/MenSportsClothesGym" element={<MenSportsClothesGym />} />
            <Route path="/Suits" element={<Suits />} />
            <Route path="/Swimwear" element={<Swimwear />} />
            <Route path="/Trousers" element={<Trousers />} />
            <Route path="/PyjamasNightwear" element={<PyjamasNightwear />} />
            <Route path="/MenSocks" element={<MenSocks />} />
            <Route path="/Underwear" element={<Underwear />} />
            <Route path="/Foundations" element={<Foundations />} />
            <Route path="/Concealers" element={<Concealers />} />
            <Route path="/Eyeshadows" element={<Eyeshadows />} />
            <Route path="/Mascaras" element={<Mascaras />} />
            <Route path="/Lipsticks" element={<Lipsticks />} />
            <Route path="/NailPolish" element={<NailPolish />} />
            <Route path="/MakeupGiftSets" element={<MakeupGiftsSets />} />
            <Route path="/MakeupBrushes" element={<MakeupBrushes />} />
            <Route path="/T-Shirts" element={<TShirts />} />
            <Route path="/Waistcoats" element={<Waistcoats />} />
            <Route path="/Partywear" element={<Partywear />} />
            <Route path="/HandNailsets" element={<HandNailsets />} />
            <Route path="/MakeupBags" element={<MakeupBags />} />
            <Route path="/MakeupAccessories" element={<MakeupAccessories />} />
            <Route path="/womensPerfume" element={<WomensPerfume />} />
            <Route path="/PerfumeGiftSets" element={<PerfumeGiftSets />} />
            <Route path="/MensAftershave" element={<MensAftershave />} />
            <Route path="/MensPerfume" element={<MensPerfume />} />
            <Route path="/AftershaveGiftSets" element={<AftershaveGiftSets />} />
            <Route path="/profile" element={<YourAccount />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/placeOrder/:productId" element={<PlaceOrder />} />
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/addressBook" element={<AddressBook />} />
            <Route path="/myDetails" element={<MyDetails />} />
            <Route path="/myFiles" element={<MyFiles />} />
            <Route path="/proceedToPayment" element={<ProceedToPayment />} />
            <Route path="/:searchText" element={<SearchResult />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/updateDetails/:profileId" element={<UpdateDetails />} />
            <Route path="/addDetails" element={<AddDetails />} />
            <Route path="/manageProducts" element={<ManageProducts />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
