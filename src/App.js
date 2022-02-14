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
import PaymentOptionDetails from './Component/PaymentOption/PaymentOptionDetails';
import Aptamil from './Component/Product/Brand/Aptamil/Aptamil';
import BabyClub from './Component/Product/Brand/Baby-Club/BabyClub';
import Britax from './Component/Product/Brand/Britax/Britax';
import FitFlop from './Component/Product/Brand/Fitflop/FitFlop';
import Gucci from './Component/Product/Brand/Gucci/Gucci';
import Hipp from './Component/Product/Brand/Hipp/Hipp';
import Jole from './Component/Product/Brand/Jole/Jole';
import Levis from './Component/Product/Brand/Levis/Levis';
import MaxiCosi from './Component/Product/Brand/Maxi-Cosi/MaxiCosi';
import PhaseEight from './Component/Product/Brand/Phase-Eight/PhaseEight';
import TedBaker from './Component/Product/Brand/TedBaker/TedBaker';






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
            <Route path="/product/bedding" element={<Bedding />} />
            <Route path="/product/pillows" element={<Pillows />} />
            <Route path="/product/throwsblanketsandSpreads" element={<ThrowsblanketsandSpreads />} />
            <Route path="/product/towels" element={<Towels />} />
            <Route path="/product/BathroomAccessories" element={<BathroomAccessories />} />
            <Route path="/product/Cushions" element={<Cushions />} />
            <Route path="/product/CandlesandHomeFragrances" element={<CandlesandHomeFragrances />} />
            <Route path="/product/GlassesDrinkware" element={<GlassesDrinkware />} />
            <Route path="/product/PotsPans" element={<PotsPans />} />
            <Route path="/product/Tableware" element={<Tableware />} />
            <Route path="/product/Cutlery" element={<Cutlery />} />
            <Route path="/product/FoodProcessorsMixersBlendersJuicers" element={<FoodProcessorsMixersBlendersJuicers />} />
            <Route path="/product/Dresses" element={<Dresses />} />
            <Route path="/product/Jeans" element={<Jeans />} />
            <Route path="/product/ShirtsTops" element={<ShirtsTops />} />
            <Route path="/product/Shorts" element={<Shorts />} />
            <Route path="/product/Skirts" element={<Skirts />} />
            <Route path="/product/SportsTrainingGym" element={<SportsTrainingGym />} />
            <Route path="/product/BrasSportsBras" element={<BrasSportsBras />} />
            <Route path="/product/Nightwear" element={<Nightwear />} />
            <Route path="/product/Socks" element={<Socks />} />
            <Route path="/product/Tights" element={<Tights />} />
            <Route path="/product/Blazers" element={<Blazers />} />
            <Route path="/product/MenJeans" element={<MenJeans />} />
            <Route path="/product/PoloShirts" element={<PoloShirts />} />
            <Route path="/product/MenShirts" element={<MenShirts />} />
            <Route path="/product/MenShorts" element={<MenShorts />} />
            <Route path="/product/MenSportsClothesGym" element={<MenSportsClothesGym />} />
            <Route path="/product/Suits" element={<Suits />} />
            <Route path="/product/Swimwear" element={<Swimwear />} />
            <Route path="/product/Trousers" element={<Trousers />} />
            <Route path="/product/PyjamasNightwear" element={<PyjamasNightwear />} />
            <Route path="/product/MenSocks" element={<MenSocks />} />
            <Route path="/product/Underwear" element={<Underwear />} />
            <Route path="/product/Foundations" element={<Foundations />} />
            <Route path="/product/Concealers" element={<Concealers />} />
            <Route path="/product/Eyeshadows" element={<Eyeshadows />} />
            <Route path="/product/Mascaras" element={<Mascaras />} />
            <Route path="/product/Lipsticks" element={<Lipsticks />} />
            <Route path="/product/NailPolish" element={<NailPolish />} />
            <Route path="/product/MakeupGiftSets" element={<MakeupGiftsSets />} />
            <Route path="/product/MakeupBrushes" element={<MakeupBrushes />} />
            <Route path="/product/T-Shirts" element={<TShirts />} />
            <Route path="/product/Waistcoats" element={<Waistcoats />} />
            <Route path="/product/Partywear" element={<Partywear />} />
            <Route path="/product/HandNailsets" element={<HandNailsets />} />
            <Route path="/product/MakeupBags" element={<MakeupBags />} />
            <Route path="/product/MakeupAccessories" element={<MakeupAccessories />} />
            <Route path="/product/womensPerfume" element={<WomensPerfume />} />
            <Route path="/product/PerfumeGiftSets" element={<PerfumeGiftSets />} />
            <Route path="/product/MensAftershave" element={<MensAftershave />} />
            <Route path="/product/MensPerfume" element={<MensPerfume />} />
            <Route path="/product/AftershaveGiftSets" element={<AftershaveGiftSets />} />
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
            <Route path="/payment-option" element={<PaymentOptionDetails />} />
            <Route path="/brand/aptamil" element={<Aptamil />} />
            <Route path="/brand/baby-club" element={<BabyClub />} />
            <Route path="/brand/britax" element={<Britax />} />
            <Route path="/brand/fitflop" element={<FitFlop />} />
            <Route path="/brand/gucci" element={<Gucci />} />
            <Route path="/brand/hipp" element={<Hipp />} />
            <Route path="/brand/jole" element={<Jole />} />
            <Route path="/brand/levis" element={<Levis />} />
            <Route path="/brand/maxi-cosi" element={<MaxiCosi />} />
            <Route path="/brand/phase-eight" element={<PhaseEight />} />
            <Route path="/brand/ted-baker" element={<TedBaker />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
