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
import TShirts from './Component/Product/Men/Clothing/TShirts/TShirts';
import Waistcoats from './Component/Product/Men/Clothing/Waistcoats/Waistcoats';
import WomensPerfume from './Component/Product/Beauty/Fragrance/WomensPerfume/WomensPerfume';
import PerfumeGiftSets from './Component/Product/Beauty/Fragrance/PerfumeGiftSets/PerfumeGiftSets';
import MensAftershave from './Component/Product/Beauty/Fragrance/MensAftershave/MensAftershave';
import AftershaveGiftSets from './Component/Product/Beauty/Fragrance/AftershaveGiftSets/AftershaveGiftSets';
import LoginForm from './Component/LoginForm/LoginForm';
import Login from './Component/LoginForm/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import YourAccount from './Component/Header/YourAccount/YourAccount';
import AddProduct from './Component/Header/YourAccount/Admin/AddProduct/AddProduct';
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
import BathsShower from './Component/Product/Beauty/SkinBodyCare/BathsShower/BathsShower';
import Cleansers from './Component/Product/Beauty/SkinBodyCare/Cleansers/Cleansers';
import Moisturisers from './Component/Product/Beauty/SkinBodyCare/Moisturisers/Moisturisers';
import BodyCare from './Component/Product/Beauty/SkinBodyCare/BodyCare/BodyCare';
import LipBalmCare from './Component/Product/Beauty/SkinBodyCare/LipBalmCare/LipBalmCare';
import HandFootCare from './Component/Product/Beauty/SkinBodyCare/HandFootCare/HandFootCare';
import HairCare from './Component/Product/Beauty/HairCare&Styling/HairCare/HairCare';
import Shampoo from './Component/Product/Beauty/HairCare&Styling/Shampoo/Shampoo';
import Conditioner from './Component/Product/Beauty/HairCare&Styling/Conditioner/Conditioner';
import HairTreatments from './Component/Product/Beauty/HairCare&Styling/Hair Treatments/HairTreatments';
import HairStylingProducts from './Component/Product/Beauty/HairCare&Styling/HairStylingProducts/HairStylingProducts';
import HairBrushes from './Component/Product/Beauty/HairCare&Styling/HairBrushes/HairBrushes';
import ElectricalHairBeauty from './Component/Product/Beauty/HairCare&Styling/ElectricalHairBeauty/ElectricalHairBeauty';
import KidsDresses from './Component/Product/Baby&child/KidsClothing&Shoes/KidsDresses/KidsDresses';
import KidsPyjamasNightwear from './Component/Product/Baby&child/KidsClothing&Shoes/KidsPyjamasNightwear/KidsPyjamasNightwear';
import TrousersLeggings from './Component/Product/Baby&child/KidsClothing&Shoes/TrousersLeggings/TrousersLeggings';

import KidsPartyWear from './Component/Product/Baby&child/KidsClothing&Shoes/KidsPartyWear/KidsPartyWear';
import BoysShortsTrousers from './Component/Product/Baby&child/BoysClothes/BoysShortsTrousers/BoysShortsTrousers';
import BoysShirtsTops from './Component/Product/Baby&child/BoysClothes/BoysShirtsTops/BoysShirtsTops';
import BoysPyjamasNightwear from './Component/Product/Baby&child/BoysClothes/BoysPyjamasNightwear/BoysPyjamasNightwear';
import BoysPartywear from './Component/Product/Baby&child/BoysClothes/BoysPartywear/BoysPartywear';
import BoysPants from './Component/Product/Baby&child/BoysClothes/BoysPants/BoysPants';
import BoysSocks from './Component/Product/Baby&child/BoysClothes/BoysSocks/BoysSocks';
import BoysHats from './Component/Product/Baby&child/BoysClothes/BoysHats/BoysHats';
import MakeAdmin from './Component/Header/YourAccount/Admin/MakeAdmin/MakeAdmin';
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
// import AdminRoute from './Component/AdminRoute/AdminRoute';
import ConfirmPayment from './Component/Product/Cart/ProceedToPayment/ConfirmPayment/ConfirmPayment';
import AllOrderHistory from './Component/Header/YourAccount/Admin/AllOrderHistory/AllOrderHistory';
import Beds from './Component/Product/FurnitureLighting/BedroomFurniture/Beds/Beds';
import ChildrenBedroom from './Component/Product/FurnitureLighting/BedroomFurniture/ChildrenBedroom/ChildrenBedroom';
import Wardrobes from './Component/Product/FurnitureLighting/BedroomFurniture/Wardrobes/Wardrobes';
import DressingTables from './Component/Product/FurnitureLighting/BedroomFurniture/DressingTables/DressingTables';
import ChestsDrawers from './Component/Product/FurnitureLighting/BedroomFurniture/ChestsDrawers/ChestsDrawers';
import BedsideTables from './Component/Product/FurnitureLighting/BedroomFurniture/BedsideTables/BedsideTables';
import Mattresses from './Component/Product/FurnitureLighting/BedroomFurniture/Mattresses/Mattresses';
import SofasArmchairs from './Component/Product/FurnitureLighting/LivingRoomFurniture/SofasArmchairs/SofasArmchairs';
import TVStands from './Component/Product/FurnitureLighting/LivingRoomFurniture/TVStands/TVStands';
import CoffeeTables from './Component/Product/FurnitureLighting/LivingRoomFurniture/CoffeeTables/CoffeeTables';
import BookcasesShelving from './Component/Product/FurnitureLighting/LivingRoomFurniture/BookcasesShelving/BookcasesShelving';
import CabinetsSideboards from './Component/Product/FurnitureLighting/LivingRoomFurniture/CabinetsSideboards/CabinetsSideboards';
import AdminRoute from './Component/Header/YourAccount/Admin/AdminRoute/AdminRoute';
import PrivateRoute from './Component/Header/YourAccount/Admin/PrivateRoute/PrivateRoute';
import BarChairsStools from './Component/Product/FurnitureLighting/DiningRoomFurniture/BarChairsStools/BarChairsStools';
import DiningTables from './Component/Product/FurnitureLighting/DiningRoomFurniture/DiningTables/DiningTables';
import DiningChairs from './Component/Product/FurnitureLighting/DiningRoomFurniture/DiningChairs/DiningChairs';
import CeilingLights from './Component/Product/FurnitureLighting/Lighting/CeilingLights/CeilingLights';
import DeskTablelamps from './Component/Product/FurnitureLighting/Lighting/DeskTablelamps/DeskTablelamps';
import FloorLamps from './Component/Product/FurnitureLighting/Lighting/FloorLamps/FloorLamps';
import WallLighting from './Component/Product/FurnitureLighting/Lighting/WallLighting/WallLighting';
import GardenOutdoorlights from './Component/Product/FurnitureLighting/Lighting/GardenOutdoorlights/GardenOutdoorlights';
import LightBulbs from './Component/Product/FurnitureLighting/Lighting/LightBulbs/LightBulbs';
import OfficeDesks from './Component/Product/FurnitureLighting/HomeOfficeStorage/OfficeDesks/OfficeDesks';
import OfficeChairs from './Component/Product/FurnitureLighting/HomeOfficeStorage/OfficeChairs/OfficeChairs';
import HomeStorage from './Component/Product/FurnitureLighting/HomeOfficeStorage/HomeStorage/HomeStorage';
import Television from './Component/Product/Electricals/TelevisionAudio/Television/Television';
import SoundbarsHomeCinema from './Component/Product/Electricals/TelevisionAudio/SoundbarsHomeCinema/SoundbarsHomeCinema';
import TVStandsWallMounts from './Component/Product/Electricals/TelevisionAudio/TVStandsWallMounts/TVStandsWallMounts';
import TVStreamingDevices from './Component/Product/Electricals/TelevisionAudio/TVStreamingDevices/TVStreamingDevices';
import SpeakersSoundSystems from './Component/Product/Electricals/TelevisionAudio/SpeakersSoundSystems/SpeakersSoundSystems';
import Headphones from './Component/Product/Electricals/TelevisionAudio/Headphones/Headphones';
import IpadsTablets from './Component/Product/Electricals/ComputingGaming/IpadsTablets/IpadsTablets';
import LaptopsMacBooks from './Component/Product/Electricals/ComputingGaming/LaptopsMacBooks/LaptopsMacBooks';
import PCsDesktopComputers from './Component/Product/Electricals/ComputingGaming/PCsDesktopComputers/PCsDesktopComputers';
import MonitorsProjectors from './Component/Product/Electricals/ComputingGaming/MonitorsProjectors/MonitorsProjectors';
import PrintersAccessories from './Component/Product/Electricals/ComputingGaming/PrintersAccessories/PrintersAccessories';
import Gaming from './Component/Product/Electricals/ComputingGaming/Gaming/Gaming';
import WashingMachines from './Component/Product/Electricals/HomeAppliances/WashingMachines/WashingMachines';
import FridgeFreezers from './Component/Product/Electricals/HomeAppliances/FridgeFreezers/FridgeFreezers';
import Dishwashers from './Component/Product/Electricals/HomeAppliances/Dishwashers/Dishwashers';
import CookersOvens from './Component/Product/Electricals/HomeAppliances/CookersOvens/CookersOvens';
import Microwaves from './Component/Product/Electricals/HomeAppliances/Microwaves/Microwaves';
import CoffeeMachines from './Component/Product/Electricals/KitchenAppliancesVacuums/CoffeeMachines/CoffeeMachines';
import Kettles from './Component/Product/Electricals/KitchenAppliancesVacuums/Kettles/Kettles';
import Toasters from './Component/Product/Electricals/KitchenAppliancesVacuums/Toasters/Toasters';
import VacuumCleaners from './Component/Product/Electricals/KitchenAppliancesVacuums/VacuumCleaners/VacuumCleaners';
import FansCoolingPurifiers from './Component/Product/Electricals/KitchenAppliancesVacuums/FansCoolingPurifiers/FansCoolingPurifiers';
import Ironing from './Component/Product/Electricals/KitchenAppliancesVacuums/Ironing/Ironing';
import MobilePhonesAccessories from './Component/Product/Electricals/MobileCamerasSmartTech/MobilePhonesAccessories/MobilePhonesAccessories';
import CamerasCamcorders from './Component/Product/Electricals/MobileCamerasSmartTech/CamerasCamcorders/CamerasCamcorders';
import SmartFitnessWatches from './Component/Product/Electricals/MobileCamerasSmartTech/SmartFitnessWatches/SmartFitnessWatches';
import BackPacks from './Component/Product/FitnessTravel/TravelLuggage/BackPacks/BackPacks';
import HandLuggage from './Component/Product/FitnessTravel/TravelLuggage/HandLuggage/HandLuggage';
import Suitcases from './Component/Product/FitnessTravel/TravelLuggage/Suitcases/Suitcases';
import HoldallsWeekendBags from './Component/Product/FitnessTravel/TravelLuggage/HoldallsWeekendBags/HoldallsWeekendBags';
import Camping from './Component/Product/FitnessTravel/TravelLuggage/Camping/Camping';
import SewingMachines from './Component/Product/FitnessTravel/SewingCrafts/SewingMachines/SewingMachines';
import GamesPuzzles from './Component/Product/FitnessTravel/SewingCrafts/GamesPuzzles/GamesPuzzles';
import WoolYarn from './Component/Product/FitnessTravel/SewingCrafts/WoolYarn/WoolYarn';
import Stattonery from './Component/Product/FitnessTravel/SewingCrafts/Stattonery/Stattonery';
import Treadmills from './Component/Product/FitnessTravel/Fitness/Treadmills/Treadmills';
import ExerciseBikes from './Component/Product/FitnessTravel/Fitness/ExerciseBikes/ExerciseBikes';
import Weights from './Component/Product/FitnessTravel/Fitness/Weights/Weights';
import FitnessMachinesTechonology from './Component/Product/FitnessTravel/Fitness/FitnessMachinesTechonology/FitnessMachinesTechonology';
import GiftsForHer from './Component/Product/Gifts/GiftsByRecipient/GiftsForHer/GiftsForHer';
import GiftsForHim from './Component/Product/Gifts/GiftsByRecipient/GiftsForHim/GiftsForHim';
import GiftsForKids from './Component/Product/Gifts/GiftsByRecipient/GiftsForKids/GiftsForKids';
import GiftsForCouples from './Component/Product/Gifts/GiftsByRecipient/GiftsForCouples/GiftsForCouples';
import GiftsForBabies from './Component/Product/Gifts/GiftsByRecipient/GiftsForBabies/GiftsForBabies';
import GiftsForTeenagers from './Component/Product/Gifts/GiftsByRecipient/GiftsForTeenagers/GiftsForTeenagers';
import BeautyFragranceGifts from './Component/Product/Gifts/PopularGifts/BeautyFragranceGifts/BeautyFragranceGifts';
import GamesAndPuzzles from './Component/Product/Gifts/PopularGifts/GamesAndPuzzles/GamesAndPuzzles';
import CandlesHomeFragrance from './Component/Product/Gifts/PopularGifts/CandlesHomeFragrance/CandlesHomeFragrance';
import CookingBaking from './Component/Product/Gifts/PopularGifts/CookingBaking/CookingBaking';
import Gardening from './Component/Product/Gifts/PopularGifts/Gardening/Gardening';
import GiftWrapPartyShop from './Component/Product/Gifts/PopularGifts/GiftWrapPartyShop/GiftWrapPartyShop';
import Hampers from './Component/Product/Gifts/FoodDrinkGifts/Hampers/Hampers';
import Chocolate from './Component/Product/Gifts/FoodDrinkGifts/Chocolate/Chocolate';
import Alcohol from './Component/Product/Gifts/FoodDrinkGifts/Alcohol/Alcohol';
import LuxuryGifts from './Component/Product/Gifts/GiftInspiration/LuxuryGifts/LuxuryGifts';
import Techies from './Component/Product/Gifts/GiftInspiration/Techies/Techies';
import KidsShirtsTops from './Component/Product/Baby&child/KidsClothing&Shoes/KidsShirtsTops/KidsShirtsTops';
import KidJeans from './Component/Product/Baby&child/KidsClothing&Shoes/KidJeans/KidJeans';
import BabyToddlerMilk from './Component/Product/Baby&child/BabyFoodMilk/BabyToddlerMilk/BabyToddlerMilk';
import Strollers from './Component/Product/Baby&child/KidsTravel/Strollers/Strollers';
import BabyCarriers from './Component/Product/Baby&child/KidsTravel/BabyCarriers/BabyCarriers';
import CarSeats from './Component/Product/Baby&child/KidsTravel/CarSeats/CarSeats';
import BabyToddlerFood from './Component/Product/Baby&child/BabyFoodMilk/BabyFoodFood/BabyFoodFood';






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
            <Route path="/makeAdmin" element={<MakeAdmin />} />
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
            <Route path="/product/T-Shirts" element={<TShirts />} />
            <Route path="/product/Waistcoats" element={<Waistcoats />} />
            <Route path="/product/womensPerfume" element={<WomensPerfume />} />
            <Route path="/product/PerfumeGiftSets" element={<PerfumeGiftSets />} />
            <Route path="/product/MensAftershave" element={<MensAftershave />} />
            <Route path="/product/AftershaveGiftSets" element={<AftershaveGiftSets />} />
            <Route path="/product/bathsShower" element={<BathsShower />} />
            <Route path="/product/cleansers" element={<Cleansers />} />
            <Route path="/product/moisturisers" element={<Moisturisers />} />
            <Route path="/product/bodyCare" element={<BodyCare />} />
            <Route path="/product/lipBalmCare" element={<LipBalmCare />} />
            <Route path="/product/handFootCare" element={<HandFootCare />} />
            <Route path="/product/hairCare" element={<HairCare />} />
            <Route path="/product/shampoo" element={<Shampoo />} />
            <Route path="/product/conditioner" element={<Conditioner />} />
            <Route path="/product/hairTreatments" element={<HairTreatments />} />
            <Route path="/product/hairStylingProducts" element={<HairStylingProducts />} />
            <Route path="/product/hairBrushes" element={<HairBrushes />} />
            <Route path="/product/electricalHairBeauty" element={<ElectricalHairBeauty />} />
            <Route path="/product/kidsshirtsTops" element={<KidsShirtsTops />} />
            <Route path="/product/kidsdresses" element={<KidsDresses />} />
            <Route path="/product/kidspyjamasNightwear" element={<KidsPyjamasNightwear />} />
            <Route path="/product/kidstrousersLeggings" element={<TrousersLeggings />} />
            <Route path="/product/kidsjeans" element={<KidJeans />} />
            <Route path="/product/kidsjeans" element={<KidJeans />} />
            <Route path="/product/kidspartyWear" element={<KidsPartyWear />} />
            <Route path="/product/boysshortsTrousers" element={<BoysShortsTrousers />} />
            <Route path="/product/boysshirtsTops" element={<BoysShirtsTops />} />
            <Route path="/product/boyspyjamasNightwear" element={<BoysPyjamasNightwear />} />
            <Route path="/product/boyspartywear" element={<BoysPartywear />} />
            <Route path="/product/boyspants" element={<BoysPants />} />
            <Route path="/product/boyssocks" element={<BoysSocks />} />
            <Route path="/product/boyshats" element={<BoysHats />} />
            <Route path="/product/beds" element={<Beds />} />
            <Route path="/product/mattresses" element={<Mattresses />} />
            <Route path="/product/bedsideTables" element={<BedsideTables />} />
            <Route path="/product/chestsDrawers" element={<ChestsDrawers />} />
            <Route path="/product/dressingTables" element={<DressingTables />} />
            <Route path="/product/wardrobes" element={<Wardrobes />} />
            <Route path="/product/childrenBedroom" element={<ChildrenBedroom />} />
            <Route path="/product/sofasArmchairs" element={<SofasArmchairs />} />
            <Route path="/product/tVStands" element={<TVStands />} />
            <Route path="/product/coffeeTables" element={<CoffeeTables />} />
            <Route path="/product/bookcasesShelving" element={<BookcasesShelving />} />
            <Route path="/product/cabinetsSideboards" element={<CabinetsSideboards />} />
            <Route path="/product/DiningTables" element={<DiningTables />} />
            <Route path="/product/DiningChairs" element={<DiningChairs />} />
            <Route path="/product/BarChairsStools" element={<BarChairsStools />} />
            <Route path="/product/CeilingLights" element={<CeilingLights />} />
            <Route path="/product/DeskTableLamps" element={<DeskTablelamps />} />
            <Route path="/product/FloorLamps" element={<FloorLamps />} />
            <Route path="/product/WallLighting" element={<WallLighting />} />
            <Route path="/product/GardenOutdoorlights" element={<GardenOutdoorlights />} />
            <Route path="/product/LightBulbs" element={<LightBulbs />} />
            <Route path="/product/OfficeDesks" element={<OfficeDesks />} />
            <Route path="/product/OfficeChairs" element={<OfficeChairs />} />
            <Route path="/product/HomeStorage" element={<HomeStorage />} />
            <Route path="/product/Television" element={<Television />} />
            <Route path="/product/SoundbarsHomeCinema" element={<SoundbarsHomeCinema />} />
            <Route path="/product/TVStandsWallMounts" element={<TVStandsWallMounts />} />
            <Route path="/product/TVStreamingDevices" element={<TVStreamingDevices />} />
            <Route path="/product/SpeakersSoundSystems" element={<SpeakersSoundSystems />} />
            <Route path="/product/Headphones" element={<Headphones />} />
            <Route path="/product/IpadsTablets" element={<IpadsTablets />} />
            <Route path="/product/LaptopsMacBooks" element={<LaptopsMacBooks />} />
            <Route path="/product/PCsDesktopComputers" element={<PCsDesktopComputers />} />
            <Route path="/product/MonitorsProjectors" element={<MonitorsProjectors />} />
            <Route path="/product/PrintersAccessories" element={<PrintersAccessories />} />
            <Route path="/product/Gaming" element={<Gaming />} />
            <Route path="/product/WashingMachines" element={<WashingMachines />} />
            <Route path="/product/FridgeFreezers" element={<FridgeFreezers />} />
            <Route path="/product/Dishwashers" element={<Dishwashers />} />
            <Route path="/product/CookersOvens" element={<CookersOvens />} />
            <Route path="/product/Microwaves" element={<Microwaves />} />
            <Route path="/product/CoffeeMachines" element={<CoffeeMachines />} />
            <Route path="/product/Kettles" element={<Kettles />} />
            <Route path="/product/Toasters" element={<Toasters />} />
            <Route path="/product/VacuumCleaners" element={<VacuumCleaners />} />
            <Route path="/product/FansCoolingPurifiers" element={<FansCoolingPurifiers />} />
            <Route path="/product/Ironing" element={<Ironing />} />
            <Route path="/product/MobilePhonesAccessories" element={<MobilePhonesAccessories />} />
            <Route path="/product/CamerasCamcorders" element={<CamerasCamcorders />} />
            <Route path="/product/SmartFitnessWatches" element={<SmartFitnessWatches />} />
            <Route path="/product/BackPacks" element={<BackPacks />} />
            <Route path="/product/HandLuggage" element={<HandLuggage />} />
            <Route path="/product/Suitcases" element={<Suitcases />} />
            <Route path="/product/HoldallsWeekendBags" element={<HoldallsWeekendBags />} />
            <Route path="/product/Camping" element={<Camping />} />
            <Route path="/product/SewingMachines" element={<SewingMachines />} />
            <Route path="/product/GamesPuzzles" element={<GamesPuzzles />} />
            <Route path="/product/WoolYarn" element={<WoolYarn />} />
            <Route path="/product/Stattonery" element={<Stattonery />} />
            <Route path="/product/Treadmills" element={<Treadmills />} />
            <Route path="/product/ExerciseBikes" element={<ExerciseBikes />} />
            <Route path="/product/Weights" element={<Weights />} />
            <Route path="/product/FitnessMachinesTechonology" element={<FitnessMachinesTechonology />} />
            <Route path="/product/GiftsForHer" element={<GiftsForHer />} />
            <Route path="/product/GiftsForHim" element={<GiftsForHim />} />
            <Route path="/product/GiftsForKids" element={<GiftsForKids />} />
            <Route path="/product/GiftsForCouples" element={<GiftsForCouples />} />
            <Route path="/product/GiftsForBabies" element={<GiftsForBabies />} />
            <Route path="/product/GiftsForTeenagers" element={<GiftsForTeenagers />} />
            <Route path="/product/BeautyFragranceGifts" element={<BeautyFragranceGifts />} />
            <Route path="/product/GamesAndPuzzles" element={<GamesAndPuzzles />} />
            <Route path="/product/CandlesHomeFragrance" element={<CandlesHomeFragrance />} />
            <Route path="/product/CookingBaking" element={<CookingBaking />} />
            <Route path="/product/Gardening" element={<Gardening />} />
            <Route path="/product/GiftWrapPartyShop" element={<GiftWrapPartyShop />} />
            <Route path="/product/Hampers" element={<Hampers />} />
            <Route path="/product/Chocolate" element={<Chocolate />} />
            <Route path="/product/Alcohol" element={<Alcohol />} />
            <Route path="/product/LuxuryGifts" element={<LuxuryGifts />} />
            <Route path="/product/Techies" element={<Techies />} />
            <Route path="/product/CarSeats" element={<CarSeats />} />
            <Route path="/product/BabyCarriers" element={<BabyCarriers />} />
            <Route path="/product/Strollers" element={<Strollers />} />
            <Route path="/product/BabyToddlerFood" element={<BabyToddlerFood />} />
            <Route path="/product/BabyToddlerMilk" element={<BabyToddlerMilk />} />


            <Route path="/profile" element={<YourAccount />} />
            <Route path="/addProduct" element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path="/placeOrder/:productId" element={<PlaceOrder />} />
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/addressBook" element={<AddressBook />} />
            <Route path="/myDetails" element={<MyDetails />} />
            <Route path="/myFiles" element={<MyFiles />} />
            <Route path="/proceedToPayment" element={<PrivateRoute><ProceedToPayment /></PrivateRoute>} />
            <Route path="/:searchText" element={<SearchResult />} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/allOrderHistory" element={<AdminRoute><AllOrderHistory /></AdminRoute>} />
            <Route path="/updateDetails/:profileId" element={<UpdateDetails />} />
            <Route path="/addDetails" element={<AddDetails />} />
            <Route path="/manageProducts" element={<AdminRoute><ManageProducts /></AdminRoute>} />
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
            <Route path="/payment" element={<PrivateRoute><ConfirmPayment /></PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
