import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import PillowCases from './Component/Product/HomeGarden/Bedding/PillowCases/PillowCases';
import BedSheets from './Component/Product/HomeGarden/Bedding/BedSheets/BedSheets';
import Pillows from './Component/Product/HomeGarden/Bedding/Pillows/Pillows';
import ThrowsblanketsandSpreads from './Component/Product/HomeGarden/Bedding/ThrowsblanketsandSpreads/ThrowsblanketsandSpreads';
import Towels from './Component/Product/HomeGarden/HomeDecorAccessories/Towels/Towels';

import Cushions from './Component/Product/HomeGarden/HomeDecorAccessories/Cushions/Cushions';
import CandlesandHomeFragrances from './Component/Product/HomeGarden/HomeDecorAccessories/CandlesandHomeFragrances/CandlesandHomeFragrances';
import GlassesDrinkware from './Component/Product/HomeGarden/CookingDining/GlassesDrinkware/GlassesDrinkware';
import PotsPans from './Component/Product/HomeGarden/CookingDining/PotsPans/PotsPans';
// import Tableware from './Component/Product/HomeGarden/CookingDining/Tableware/Tableware';
import Cutlery from './Component/Product/HomeGarden/CookingDining/Cutlery/Cutlery';
// import FoodProcessorsMixersBlendersJuicers from './Component/Product/HomeGarden/CookingDining/FoodProcessorsMixers/FoodProcessorsMixersBlendersJuicers';
import Dresses from './Component/Product/Women/Clothing/Dresses/Dresses';
import Jeans from './Component/Product/Women/Clothing/Jeans/Jeans';
import ShirtsTops from './Component/Product/Women/Clothing/ShirtsTops/ShirtsTops';
import Shorts from './Component/Product/Women/Clothing/Shorts/Shorts';
import Skirts from './Component/Product/Women/Clothing/Skirts/Skirts';
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
import PlaceOrder from './Component/Header/HeaderTop/PlaceOrder/PlaceOrder';
import ChangePass from './Component/Header/YourAccount/ChangePass/ChangePass';
// import Cart from './Component/Product/Cart/Cart';
import ForgotPass from './Component/LoginForm/forgotPass/forgotPass';
import AddressBook from './Component/Header/YourAccount/AddressBook/AddressBook';
import MyDetails from './Component/Header/YourAccount/MyDetails/MyDetails';
import MyFiles from './Component/Header/YourAccount/MyFiles/MyFiles';
// import ProceedToPayment from './Component/Product/Cart/ProceedToPayment/ProceedToPayment';
import SearchResult from './Component/Header/SearchBox/SearchResult/SearchResult';
import OrderHistory from './Component/Header/YourAccount/OrderHistory/OrderHistory';
import UpdateDetails from './Component/Header/YourAccount/MyDetails/UpdateDetails/UpdateDetails';
import AddDetails from './Component/Header/YourAccount/MyDetails/AddDetails/AddDetails';
// import ManageProducts from './Component/Product/ManageProducts/ManageProducts';
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

// import KidsDresses from './Component/Product/Baby&child/KidsClothing&Shoes/KidsDresses/KidsDresses';
// import KidsPyjamasNightwear from './Component/Product/Baby&child/KidsClothing&Shoes/KidsPyjamasNightwear/KidsPyjamasNightwear';
// import TrousersLeggings from './Component/Product/Baby&child/KidsClothing&Shoes/TrousersLeggings/TrousersLeggings';

// import KidsPartyWear from './Component/Product/Baby&child/KidsClothing&Shoes/KidsPartyWear/KidsPartyWear';
// import BoysShortsTrousers from './Component/Product/Baby&child/BoysClothes/BoysShortsTrousers/BoysShortsTrousers';
// import BoysShirtsTops from './Component/Product/Baby&child/BoysClothes/BoysShirtsTops/BoysShirtsTops';
// import BoysPyjamasNightwear from './Component/Product/Baby&child/BoysClothes/BoysPyjamasNightwear/BoysPyjamasNightwear';
// import BoysPartywear from './Component/Product/Baby&child/BoysClothes/BoysPartywear/BoysPartywear';
// import BoysPants from './Component/Product/Baby&child/BoysClothes/BoysPants/BoysPants';
// import BoysSocks from './Component/Product/Baby&child/BoysClothes/BoysSocks/BoysSocks';
// import BoysHats from './Component/Product/Baby&child/BoysClothes/BoysHats/BoysHats';
import MakeAdmin from './Component/Header/YourAccount/Admin/MakeAdmin/MakeAdmin';
// import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
// import AdminRoute from './Component/AdminRoute/AdminRoute';
// import ConfirmPayment from './Component/Product/Cart/ProceedToPayment/ConfirmPayment/ConfirmPayment';
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
// import BackPacks from './Component/Product/FitnessTravel/TravelLuggage/BackPacks/BackPacks';
// import HandLuggage from './Component/Product/FitnessTravel/TravelLuggage/HandLuggage/HandLuggage';
// import Suitcases from './Component/Product/FitnessTravel/TravelLuggage/Suitcases/Suitcases';
// import HoldallsWeekendBags from './Component/Product/FitnessTravel/TravelLuggage/HoldallsWeekendBags/HoldallsWeekendBags';
// import Camping from './Component/Product/FitnessTravel/TravelLuggage/Camping/Camping';
// import SewingMachines from './Component/Product/FitnessTravel/SewingCrafts/SewingMachines/SewingMachines';
// import GamesPuzzles from './Component/Product/FitnessTravel/SewingCrafts/GamesPuzzles/GamesPuzzles';
// import WoolYarn from './Component/Product/FitnessTravel/SewingCrafts/WoolYarn/WoolYarn';
// import Stattonery from './Component/Product/FitnessTravel/SewingCrafts/Stattonery/Stattonery';
// import Treadmills from './Component/Product/FitnessTravel/Fitness/Treadmills/Treadmills';
// import ExerciseBikes from './Component/Product/FitnessTravel/Fitness/ExerciseBikes/ExerciseBikes';
// import Weights from './Component/Product/FitnessTravel/Fitness/Weights/Weights';
// import FitnessMachinesTechonology from './Component/Product/FitnessTravel/Fitness/FitnessMachinesTechonology/FitnessMachinesTechonology';
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
// import KidsShirtsTops from './Component/Product/Baby&child/KidsClothing&Shoes/KidsShirtsTops/KidsShirtsTops';
// import KidJeans from './Component/Product/Baby&child/KidsClothing&Shoes/KidJeans/KidJeans';
// import BabyToddlerMilk from './Component/Product/Baby&child/BabyFoodMilk/BabyToddlerMilk/BabyToddlerMilk';
// import Strollers from './Component/Product/Baby&child/KidsTravel/Strollers/Strollers';
// import BabyCarriers from './Component/Product/Baby&child/KidsTravel/BabyCarriers/BabyCarriers';
// import CarSeats from './Component/Product/Baby&child/KidsTravel/CarSeats/CarSeats';
// import BabyToddlerFood from './Component/Product/Baby&child/BabyFoodMilk/BabyFoodFood/BabyFoodFood';
import ManageProducts from './Component/Header/YourAccount/Admin/ManageProducts/ManageProducts';
import HomeAndGarden from './Component/Product/HomeGarden/HomeAndGarden';
import Women from './Component/Product/Women/Women';
import Men from './Component/Product/Men/Men';
import Beauty from './Component/Product/Beauty/Beauty';
// import BabyAndChild from './Component/Product/Baby&child/BabyAndChild';
import FurnitureAndLighting from './Component/Product/FurnitureLighting/FurnitureAndLighting';
import Electricals from './Component/Product/Electricals/Electricals';
// import FitnessAndTravel from './Component/Product/FitnessTravel/FitnessAndTravel';
import Gifts from './Component/Product/Gifts/Gifts';
import Mirrors from './Component/Product/HomeGarden/HomeDecorAccessories/Mirrors/Mirrors';
import Rugs from './Component/Product/HomeGarden/HomeDecorAccessories/Rugs/Rugs';
import Storage from './Component/Product/HomeGarden/HomeDecorAccessories/Storage/Storage';
// import Wallpapers from './Component/Product/HomeGarden/HomeDecorAccessories/Wallpapers/Wallpapers';
import Blinds from './Component/Product/HomeGarden/CurtainsBlindsFloors/Blinds/Blinds';
import CarpetsAndFlooring from './Component/Product/HomeGarden/CurtainsBlindsFloors/CarpetsAndFlooring/CarpetsAndFlooring';
import Curtains from './Component/Product/HomeGarden/CurtainsBlindsFloors/Curtains/Curtains';
import MadeToMeasurecurtains from './Component/Product/HomeGarden/CurtainsBlindsFloors/MadeToMeasurecurtains/MadeToMeasurecurtains';
import GardenFurnitureSets from './Component/Product/HomeGarden/Garden/GardenFurnitureSets/GardenFurnitureSets';
import GardenSeating from './Component/Product/HomeGarden/Garden/GardenSeating/GardenSeating';
// import Outdoorlights from './Component/Product/HomeGarden/Garden/Outdoorlights/Outdoorlights';
// import BBQStands from './Component/Product/HomeGarden/Garden/BBQStands/BBQStands';
import SportsClothes from './Component/Product/Women/Clothing/SportsClothes/SportsClothes';
import SwimwearBeachwear from './Component/Product/Women/Clothing/SwimwearBeachwear/SwimwearBeachwear';
import Leggings from './Component/Product/Women/Clothing/Leggings/Leggings';
import PlusSize from './Component/Product/Women/Clothing/PlusSize/PlusSize';
import MaternityClothes from './Component/Product/Women/Clothing/MaternityClothes/MaternityClothes';
import WomenTrousers from './Component/Product/Women/Clothing/WomenTrousers/WomenTrousers';
import WomenShoes from './Component/Product/Women/Footwear/WomenShoes/WomenShoes';
import WomenSandals from './Component/Product/Women/Footwear/WomenSandals/WomenSandals';
import WomenSlippers from './Component/Product/Women/Footwear/WomenSlippers/WomenSlippers';
import WomenTrainersAndPlimsoles from './Component/Product/Women/Footwear/WomenTrainersAndPlimsoles/WomenTrainersAndPlimsoles';
import WomenCourtShoes from './Component/Product/Women/Footwear/WomenCourtShoes/WomenCourtShoes';
import Knickers from './Component/Product/Women/LingerieNightwearHosiery/Knickers/Knickers';
import WomenHandbags from './Component/Product/Women/Accessories/WomenHandbags/WomenHandbags';
import WomenPurses from './Component/Product/Women/Accessories/WomenPurses/WomenPurses';
import WomenBelts from './Component/Product/Women/Accessories/WomenBelts/WomenBelts';
import WomenSunglasses from './Component/Product/Women/Accessories/WomenSunglasses/WomenSunglasses';
import WomenJewellery from './Component/Product/Women/Accessories/WomenJewellery/WomenJewellery';
import WomenHats from './Component/Product/Women/Accessories/WomenHats/WomenHats';
import WomenWatches from './Component/Product/Women/Accessories/WomenWatches/WomenWatches';
import WomenHairAccessories from './Component/Product/Women/Accessories/WomenHairAccessories/WomenHairAccessories';
import RobesAndDressingGowns from './Component/Product/Men/NightwearUnderwearSocks/RobesAndDressingGowns/RobesAndDressingGowns';
import MenShoes from './Component/Product/Men/Footwear/MenShoes/MenShoes';
import MenSandals from './Component/Product/Men/Footwear/MenSandals/MenSandals';
import MenSlippers from './Component/Product/Men/Footwear/MenSlippers/MenSlippers';
import MenTrainersAndPlimsoles from './Component/Product/Men/Footwear/MenTrainersAndPlimsoles/MenTrainersAndPlimsoles';
import MenMensBags from './Component/Product/Men/Accessories/MenMensBags/MenMensBags';
import MenBelts from './Component/Product/Men/Accessories/MenBelts/MenBelts';
import MenHats from './Component/Product/Men/Accessories/MenHats/MenHats';
import MenWallets from './Component/Product/Men/Accessories/MenWallets/MenWallets';
import MenSunglasses from './Component/Product/Men/Accessories/MenSunglasses/MenSunglasses';
import MenWatches from './Component/Product/Men/Accessories/MenWatches/MenWatches';
import ChildrensBedding from './Component/Product/HomeGarden/Bedding/ChildrensBedding/ChildrensBedding';
// import BlendersJuicers from './Component/Product/HomeGarden/CookingDining/BlendersJuicers/BlendersJuicers';
// import FoodProcessorsMixers from './Component/Product/HomeGarden/CookingDining/FoodProcessorsMixers/FoodProcessorsMixers';
import Cart from './Component/Header/HeaderTop/Cart/Cart';
import ProceedToPayment from './Component/Header/HeaderTop/Cart/ProceedToPayment/ProceedToPayment';
import ConfirmPayment from './Component/Header/HeaderTop/Cart/ProceedToPayment/ConfirmPayment/ConfirmPayment';
import WishLists from './Component/Header/HeaderTop/WishLists/WishLists';


import ShopBedding from './Component/Product/HomeGarden/Bedding/ShopBedding/ShopBedding';
import Duvets from './Component/Product/HomeGarden/Bedding/Duvets/Duvets';
import DuvetCovers from './Component/Product/HomeGarden/Bedding/DuvetCovers/DuvetCovers';
import KitchenBins from './Component/Product/HomeGarden/CookingDining/KitchenBins/KitchenBins';
import KitchenUtensilsGadgets from './Component/Product/HomeGarden/CookingDining/KitchenUtensilsGadgets/KitchenUtensilsGadgets';
import Picnicware from './Component/Product/HomeGarden/CookingDining/Picnicware/Picnicware';
import FoodPreparation from './Component/Product/HomeGarden/CookingDining/FoodPreparation/FoodPreparation';
import CookwareBakeware from './Component/Product/HomeGarden/CookingDining/CookwareBakeware/CookwareBakeware';
import HomeAccessories from './Component/Product/HomeGarden/HomeDecorAccessories/HomeAccessories/HomeAccessories';
import WallpaperPaintDIY from './Component/Product/HomeGarden/HomeDecorAccessories/WallpaperPaintDIY/WallpaperPaintDIY';
import PicturesArtFrames from './Component/Product/HomeGarden/HomeDecorAccessories/PicturesArtFrames/PicturesArtFrames';
import CurtainPolesAccessories from './Component/Product/HomeGarden/CurtainsBlindsFloors/CurtainPolesAccessories/CurtainPolesAccessories';
import Fabrics from './Component/Product/HomeGarden/CurtainsBlindsFloors/Fabrics/Fabrics';
import GasBBQs from './Component/Product/HomeGarden/Garden/GasBBQs/GasBBQs';
import CharcoalBBQs from './Component/Product/HomeGarden/Garden/CharcoalBBQs/CharcoalBBQs';
import PizzaOvens from './Component/Product/HomeGarden/Garden/PizzaOvens/PizzaOvens';
import DecorativeGardenAccessories from './Component/Product/HomeGarden/Garden/DecorativeGardenAccessories/DecorativeGardenAccessories';
import ParasolsAccessories from './Component/Product/HomeGarden/Garden/ParasolsAccessories/ParasolsAccessories';
import ShopGarden from './Component/Product/HomeGarden/Garden/ShopGarden/ShopGarden';
import Cashmere from './Component/Product/Women/Clothing/Cashmere/Cashmere';
import CoatsJackets from './Component/Product/Women/Clothing/CoatsJackets/CoatsJackets';
import JumpersKnitwear from './Component/Product/Women/Clothing/JumpersKnitwear/JumpersKnitwear';
import Jumpsuits from './Component/Product/Women/Clothing/Jumpsuits/Jumpsuits';
import Linen from './Component/Product/Women/Clothing/Linen/Linen';
import Loungewear from './Component/Product/Women/Clothing/Loungewear/Loungewear';
import Petite from './Component/Product/Women/Clothing/Petite/Petite';
import Occasionwear from './Component/Product/Women/Clothing/Occasionwear/Occasionwear';
import WeddingBoutique from './Component/Product/Women/Clothing/WeddingBoutique/WeddingBoutique';
import WomenBoots from './Component/Product/Women/Footwear/WomenBoots/WomenBoots';
import WomenPumps from './Component/Product/Women/Footwear/WomenPumps/WomenPumps';
import WomenHatsGlovesScarves from './Component/Product/Women/Accessories/WomenHatsGlovesScarves/WomenHatsGlovesScarves';
import WomenOccasionHatsFascinators from './Component/Product/Women/Accessories/WomenOccasionHatsFascinators/WomenOccasionHatsFascinators';
import WomenFaceCoverings from './Component/Product/Women/Accessories/WomenFaceCoverings/WomenFaceCoverings';
import WomenReadingGlassesGlassesCases from './Component/Product/Women/Accessories/WomenReadingGlassesGlassesCases/WomenReadingGlassesGlassesCases';
import WomenKeyrings from './Component/Product/Women/Accessories/WomenKeyrings/WomenKeyrings';
import WomenUmbrellas from './Component/Product/Women/Accessories/WomenUmbrellas/WomenUmbrellas';
import WomenSuitcases from './Component/Product/Women/Accessories/WomenSuitcases/WomenSuitcases';
import MenCashmere from './Component/Product/Men/Clothing/MenCashmere/MenCashmere';
import MenCoatsJackets from './Component/Product/Men/Clothing/MenCoatsJackets/MenCoatsJackets';
import MenSweatshirtsHoodies from './Component/Product/Men/Clothing/MenSweatshirtsHoodies/MenSweatshirtsHoodies';
import MenJumpersCardigans from './Component/Product/Men/Clothing/MenJumpersCardigans/MenJumpersCardigans';
import MenLinen from './Component/Product/Men/Clothing/MenLinen/MenLinen';
import MenLoungewear from './Component/Product/Men/Clothing/MenLoungewear/MenLoungewear';
import MenWeddingShop from './Component/Product/Men/Clothing/MenWeddingShop/MenWeddingShop';
import MenHolidaySummerShop from './Component/Product/Men/Clothing/MenHolidaySummerShop/MenHolidaySummerShop';
import MenBoots from './Component/Product/Men/Footwear/MenBoots/MenBoots';
import MenWalkingBootsShoes from './Component/Product/Men/Footwear/MenWalkingBootsShoes/MenWalkingBootsShoes';
import MenJewellery from './Component/Product/Men/Accessories/MenJewellery/MenJewellery';
import MenSuitcases from './Component/Product/Men/Accessories/MenSuitcases/MenSuitcases';
import MakeupAccessories from './Component/Product/Beauty/Makeup/MakeupAccessories/MakeupAccessories';
import HandNailSets from './Component/Product/Beauty/Makeup/HandNailSets/HandNailSets';
import MakeupBrushes from './Component/Product/Beauty/Makeup/MakeupBrushes/MakeupBrushes';
import MakeupBags from './Component/Product/Beauty/Makeup/MakeupBags/MakeupBags';
import TintedMoisturisers from './Component/Product/Beauty/Makeup/TintedMoisturisers/TintedMoisturisers';
import SkinCareTreatments from './Component/Product/Beauty/SkinBodyCare/SkinCareTreatments/SkinCareTreatments';
import SunCreamAfterSun from './Component/Product/Beauty/SkinBodyCare/SunCreamAfterSun/SunCreamAfterSun';
import BeautyToolsTechnology from './Component/Product/Beauty/SkinBodyCare/BeautyToolsTechnology/BeautyToolsTechnology';
import MenGrooming from './Component/Product/Beauty/SkinBodyCare/MenGrooming/MenGrooming';

// BABY AND CHILD

import BabyToddlerFood from './Component/Product/Baby&child/BabyFoodMilk/BabyFoodFood/BabyFoodFood';
import BabyToddlerMilk from './Component/Product/Baby&child/BabyFoodMilk/BabyToddlerMilk/BabyToddlerMilk';

// Baby Home & Nursery

import Sleeping from './Component/Product/Baby&child/BabyHomeNursery/Sleeping/Sleeping';
import BathingChanging from './Component/Product/Baby&child/BabyHomeNursery/BathingChanging/BathingChanging';
import FeedingWeaning from './Component/Product/Baby&child/BabyHomeNursery/FeedingWeaning/FeedingWeaning';
import NurseryFunitureFurnishings from './Component/Product/Baby&child/BabyHomeNursery/NurseryFunitureFurnishings/NurseryFunitureFurnishings';
import SafetyHealthcare from './Component/Product/Baby&child/BabyHomeNursery/SafetyHealthcare/SafetyHealthcare';
import BabyChecklist from './Component/Product/Baby&child/BabyHomeNursery/BabyChecklist/BabyChecklist';

// Baby Clothes(0 - 4 years)

import BabyToddlerclothes from './Component/Product/Baby&child/BabyClothes/BabyToddlerclothes/BabyToddlerclothes';
import BabyBoyClothes from './Component/Product/Baby&child/BabyClothes/BabyBoyClothes/BabyBoyClothes';
import BabyGirlClothes from './Component/Product/Baby&child/BabyClothes/BabyGirlClothes/BabyGirlClothes';
import SleepsuitsBodysuits from './Component/Product/Baby&child/BabyClothes/SleepsuitsBodysuits/SleepsuitsBodysuits';

// Kids Clothes & Shoes

import AllGirlsclothes from './Component/Product/Baby&child/KidsClothingShoes/AllGirlsclothes/AllGirlsclothes';
import GirlsDresses from './Component/Product/Baby&child/KidsClothingShoes/GirlsDresses/GirlsDresses';
import GirlsShoes from './Component/Product/Baby&child/KidsClothingShoes/GirlsShoes/GirlsShoes';
import GirlsPyjamas from './Component/Product/Baby&child/KidsClothingShoes/GirlsPyjamas/GirlsPyjamas';
import AllBoysClothes from './Component/Product/Baby&child/KidsClothingShoes/AllBoysClothes/AllBoysClothes';
import BoysPyjamas from './Component/Product/Baby&child/KidsClothingShoes/BoysPyjamas/BoysPyjamas';
import BoysShoes from './Component/Product/Baby&child/KidsClothingShoes/BoysShoes/BoysShoes';
import BackToSchoolShop from './Component/Product/Baby&child/KidsClothingShoes/BackToSchoolShop/BackToSchoolShop';

// Kids Travel

import BabyCarriers from './Component/Product/Baby&child/KidsTravel/BabyCarriers/BabyCarriers';
import CarSeats from './Component/Product/Baby&child/KidsTravel/CarSeats/CarSeats';
import Strollers from './Component/Product/Baby&child/KidsTravel/Strollers/Strollers';

// Kids Toys & Gifts
import GiftsForBabiesKids from './Component/Product/Baby&child/KidsToysGifts/GiftsForBabiesKids/GiftsForBabiesKids';
import LEGO from './Component/Product/Baby&child/KidsToysGifts/LEGO/LEGO';
import BabyPreschoolToys from './Component/Product/Baby&child/KidsToysGifts/BabyPreschoolToys/BabyPreschoolToys';
import Toys from './Component/Product/Baby&child/KidsToysGifts/Toys/Toys';
import BabyAndChild from './Component/Product/Baby&child/BabyAndChild';
import KidsGamesPuzzles from './Component/Product/Baby&child/KidsToysGifts/KidsGamesPuzzles/KidsGamesPuzzles';
import Cycling from './Component/Product/SportLeisure/EquipmentBySport/Cycling/Cycling';
import GymTrainingFitness from './Component/Product/SportLeisure/EquipmentBySport/GymTrainingFitness/GymTrainingFitness';
import Running from './Component/Product/SportLeisure/EquipmentBySport/Running/Running';
import Swimming from './Component/Product/SportLeisure/EquipmentBySport/Swimming/Swimming';
import Yoga from './Component/Product/SportLeisure/EquipmentBySport/Yoga/Yoga';
import WomensClothing from './Component/Product/SportLeisure/Sportswear/WomensClothing/WomensClothing';
import WomenSportsTrainers from './Component/Product/SportLeisure/Sportswear/WomenSportsTrainers/WomenSportsTrainers';
import MenClothing from './Component/Product/SportLeisure/Sportswear/MenClothing/MenClothing';
import MenSportsTrainers from './Component/Product/SportLeisure/Sportswear/MenSportsTrainers/MenSportsTrainers';
import FitnessMachinesTechonology from './Component/Product/SportLeisure/Fitness/FitnessMachinesTechonology/FitnessMachinesTechonology';
import SportsEquipment from './Component/Product/SportLeisure/Fitness/SportsEquipment/SportsEquipment';
import CrossTrainers from './Component/Product/SportLeisure/Fitness/CrossTrainers/CrossTrainers';
import Smartwatches from './Component/Product/SportLeisure/Fitness/Smartwatches/Smartwatches';
import ExerciseBikes from './Component/Product/SportLeisure/Fitness/ExerciseBikes/ExerciseBikes';
import Treadmills from './Component/Product/SportLeisure/Fitness/Treadmills/Treadmills';
import Weights from './Component/Product/SportLeisure/Fitness/Weights/Weights';
import ExploreOurBrands from './Component/Product/SportLeisure/SportsBrands/ExploreOurBrands/ExploreOurBrands';
import Adidas from './Component/Product/SportLeisure/SportsBrands/Adidas/Adidas';
import SweatyBetty from './Component/Product/SportLeisure/SportsBrands/SweatyBetty/SweatyBetty';
import TheNorthFace from './Component/Product/SportLeisure/SportsBrands/TheNorthFace/TheNorthFace';
import Therabody from './Component/Product/SportLeisure/SportsBrands/Therabody/Therabody';
import UnderArmour from './Component/Product/SportLeisure/SportsBrands/UnderArmour/UnderArmour';
import Haberdashery from './Component/Product/SportLeisure/HobbiesCrafts/Haberdashery/Haberdashery';
import GamesPuzzles from './Component/Product/SportLeisure/HobbiesCrafts/GamesPuzzles/GamesPuzzles';
import Crafts from './Component/Product/SportLeisure/HobbiesCrafts/Crafts/Crafts';
import Stationery from './Component/Product/SportLeisure/HobbiesCrafts/Stationery/Stationery';
import Books from './Component/Product/SportLeisure/HobbiesCrafts/Books/Books';
import WoolYarn from './Component/Product/SportLeisure/HobbiesCrafts/WoolYarn/WoolYarn';
import SewingMachines from './Component/Product/SportLeisure/HobbiesCrafts/SewingMachines/SewingMachines';
import ViewAllLuggage from './Component/Product/SportLeisure/TravelLuggage/ViewAllLuggage/ViewAllLuggage';
import BackPacks from './Component/Product/SportLeisure/TravelLuggage/BackPacks/BackPacks';
import CabinCases from './Component/Product/SportLeisure/TravelLuggage/CabinCases/CabinCases';
import Suitcases from './Component/Product/SportLeisure/TravelLuggage/Suitcases/Suitcases';
import HoldallsWeekendBags from './Component/Product/SportLeisure/TravelLuggage/HoldallsWeekendBags/HoldallsWeekendBags';
import Camping from './Component/Product/SportLeisure/TravelLuggage/Camping/Camping';
import HolidaySummerShop from './Component/Product/SportLeisure/TravelLuggage/HolidaySummerShop/HolidaySummerShop';
import FitnessAndTravel from './Component/Product/SportLeisure/FitnessAndTravel';







function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>

            {/* MAIN ROUTE */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wish-list" element={<WishLists />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/proceedToPayment" element={<PrivateRoute><ProceedToPayment /></PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute><ConfirmPayment /></PrivateRoute>} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/register" element={<Login />} />
            <Route path="/makeAdmin" element={<MakeAdmin />} />

            {/* BEDDING */}

            <Route path="/homeAndGarden/bedding" element={<BedSheets />} />
            <Route path="/homeAndGarden/pillows" element={<Pillows />} />
            <Route path="/homeAndGarden/PillowCases" element={<PillowCases />} />
            <Route path="/homeAndGarden/duvetCovers" element={<DuvetCovers />} />
            <Route path="/homeAndGarden/duvets" element={<Duvets />} />
            <Route path="/homeAndGarden/shopBedding" element={<ShopBedding />} />
            <Route path="/homeAndGarden/throwsBlanketsAndSpreads" element={<ThrowsblanketsandSpreads />} />

            {/* COOKING AND DINING */}

            <Route path="/homeAndGarden/childrensBedding" element={<ChildrensBedding />} />
            <Route path="/homeAndGarden/cookwareBakeware" element={<CookwareBakeware />} />
            <Route path="/homeAndGarden/cutlery" element={<Cutlery />} />
            <Route path="/homeAndGarden/glassesDrinkware" element={<GlassesDrinkware />} />
            <Route path="/homeAndGarden/potsPans" element={<PotsPans />} />
            <Route path="/homeAndGarden/foodPreparation" element={<FoodPreparation />} />
            <Route path="/homeAndGarden/picnicware" element={<Picnicware />} />
            <Route path="/homeAndGarden/kitchenUtensilsGadgets" element={<KitchenUtensilsGadgets />} />
            <Route path="/homeAndGarden/kitchenBins" element={<KitchenBins />} />

            {/* Home Décor & Accessories */}

            <Route path="/homeAndGarden/candlesandHomeFragrances" element={<CandlesandHomeFragrances />} />
            <Route path="/homeAndGarden/homeAccessories" element={<HomeAccessories />} />
            <Route path="/homeAndGarden/cushions" element={<Cushions />} />
            <Route path="/homeAndGarden/wallpaperPaintDIY" element={<WallpaperPaintDIY />} />
            <Route path="/homeAndGarden/mirrors" element={<Mirrors />} />
            <Route path="/homeAndGarden/rugs" element={<Rugs />} />
            <Route path="/homeAndGarden/storage" element={<Storage />} />
            <Route path="/homeAndGarden/towels" element={<Towels />} />
            <Route path="/homeAndGarden/picturesArtFrames" element={<PicturesArtFrames />} />

            {/* Curtains, Blinds & Floors */}

            <Route path="/homeAndGarden/blinds" element={<Blinds />} />
            <Route path="/homeAndGarden/carpetsAndFlooring" element={<CarpetsAndFlooring />} />
            <Route path="/homeAndGarden/curtains" element={<Curtains />} />
            <Route path="/homeAndGarden/madeToMeasurecurtains" element={<MadeToMeasurecurtains />} />
            <Route path="/homeAndGarden/curtainPolesAccessories" element={<CurtainPolesAccessories />} />
            <Route path="/homeAndGarden/fabrics" element={<Fabrics />} />

            {/* Garden */}

            <Route path="/homeAndGarden/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/homeAndGarden/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/homeAndGarden/gardenSeating" element={<GardenSeating />} />
            <Route path="/homeAndGarden/gasBBQs" element={<GasBBQs />} />
            <Route path="/homeAndGarden/charcoalBBQs" element={<CharcoalBBQs />} />
            <Route path="/homeAndGarden/pizzaOvens" element={<PizzaOvens />} />
            <Route path="/homeAndGarden/decorativeGardenAccessories" element={<DecorativeGardenAccessories />} />
            <Route path="/homeAndGarden/parasolsAccessories" element={<ParasolsAccessories />} />
            <Route path="/homeAndGarden/shopGarden" element={<ShopGarden />} />

            {/* WOMEN */}

            { /*CLOTHING*/}
            <Route path="/women/dresses" element={<Dresses />} />
            <Route path="/women/jeans" element={<Jeans />} />
            <Route path="/women/shirtsTops" element={<ShirtsTops />} />
            <Route path="/women/shorts" element={<Shorts />} />
            <Route path="/women/skirts" element={<Skirts />} />
            <Route path="/women/sportsClothes" element={<SportsClothes />} />
            <Route path="/women/swimwearBeachwear" element={<SwimwearBeachwear />} />
            <Route path="/women/women-Trousers" element={<WomenTrousers />} />
            <Route path="/women/leggings" element={<Leggings />} />
            <Route path="/women/plusSize" element={<PlusSize />} />
            <Route path="/women/maternityClothes" element={<MaternityClothes />} />
            <Route path="/women/cashmere" element={<Cashmere />} />
            <Route path="/women/coatsJackets" element={<CoatsJackets />} />
            <Route path="/women/jumpersKnitwear" element={<JumpersKnitwear />} />
            <Route path="/women/jumpsuits" element={<Jumpsuits />} />
            <Route path="/women/linen" element={<Linen />} />
            <Route path="/women/loungewear" element={<Loungewear />} />
            <Route path="/women/petite" element={<Petite />} />
            <Route path="/women/occasionwear" element={<Occasionwear />} />
            <Route path="/women/weddingBoutique" element={<WeddingBoutique />} />

            {/* WOMEN Footwear */}

            <Route path="/women/women-shoes" element={<WomenShoes />} />
            <Route path="/women/women-Sandals" element={<WomenSandals />} />
            <Route path="/women/women-Slippers" element={<WomenSlippers />} />
            <Route path="/women/women-TrainersAndPlimsoles" element={<WomenTrainersAndPlimsoles />} />
            <Route path="/women/women-CourtShoes" element={<WomenCourtShoes />} />
            <Route path="/women/women-boots" element={<WomenBoots />} />
            <Route path="/women/women-pumps" element={<WomenPumps />} />

            {/* Lingerie, Nightwear */}

            <Route path="/women/brasSportsBras" element={<BrasSportsBras />} />
            <Route path="/women/nightwear" element={<Nightwear />} />
            <Route path="/women/socks" element={<Socks />} />
            <Route path="/women/knickers" element={<Knickers />} />
            <Route path="/women/tights" element={<Tights />} />

            {/* Accessories */}

            <Route path="/women/women-handbags" element={<WomenHandbags />} />
            <Route path="/women/women-purses" element={<WomenPurses />} />
            <Route path="/women/women-belts" element={<WomenBelts />} />
            <Route path="/women/women-sunglasses" element={<WomenSunglasses />} />
            <Route path="/women/women-jewellery" element={<WomenJewellery />} />
            <Route path="/women/women-hats" element={<WomenHats />} />
            <Route path="/women/women-watches" element={<WomenWatches />} />
            <Route path="/women/women-hairAccessories" element={<WomenHairAccessories />} />
            <Route path="/women/women-hatsGlovesScarves" element={<WomenHatsGlovesScarves />} />
            <Route path="/women/women-occasionHatsFascinators" element={<WomenOccasionHatsFascinators />} />
            <Route path="/women/women-faceCoverings" element={<WomenFaceCoverings />} />
            <Route path="/women/women-readingGlassesGlassesCases" element={<WomenReadingGlassesGlassesCases />} />
            <Route path="/women/women-keyrings" element={<WomenKeyrings />} />
            <Route path="/women/women-umbrellas" element={<WomenUmbrellas />} />
            <Route path="/women/women-suitcases" element={<WomenSuitcases />} />

            {/* MEN Clothing */}

            <Route path="/men/blazers" element={<Blazers />} />
            <Route path="/men/menJeans" element={<MenJeans />} />
            <Route path="/men/poloShirts" element={<PoloShirts />} />
            <Route path="/men/menShirts" element={<MenShirts />} />
            <Route path="/men/menShorts" element={<MenShorts />} />
            <Route path="/men/menSportsClothesGym" element={<MenSportsClothesGym />} />
            <Route path="/men/suits" element={<Suits />} />
            <Route path="/men/swimwear" element={<Swimwear />} />
            <Route path="/men/trousers" element={<Trousers />} />
            <Route path="/men/t-shirts" element={<TShirts />} />
            <Route path="/men/waistcoats" element={<Waistcoats />} />
            <Route path="/men/menCashmere" element={<MenCashmere />} />
            <Route path="/men/menCoatsJackets" element={<MenCoatsJackets />} />
            <Route path="/men/menSweatshirtsHoodies" element={<MenSweatshirtsHoodies />} />
            <Route path="/men/menJumpersCardigans" element={<MenJumpersCardigans />} />
            <Route path="/men/menLinen" element={<MenLinen />} />
            <Route path="/men/menLoungewear" element={<MenLoungewear />} />
            <Route path="/men/menWeddingShop" element={<MenWeddingShop />} />
            <Route path="/men/menHolidaySummerShop" element={<MenHolidaySummerShop />} />

            {/* Nightwear, Underwear & Socks */}

            <Route path="/men/pyjamasNightwear" element={<PyjamasNightwear />} />
            <Route path="/men/robesAndDressingGowns" element={<RobesAndDressingGowns />} />
            <Route path="/men/menSocks" element={<MenSocks />} />
            <Route path="/men/underwear" element={<Underwear />} />

            {/* Footwear */}

            <Route path="/men/menShoes" element={<MenShoes />} />
            <Route path="/men/menSandals" element={<MenSandals />} />
            <Route path="/men/menSlippers" element={<MenSlippers />} />
            <Route path="/men/menTrainersAndPlimsoles" element={<MenTrainersAndPlimsoles />} />
            <Route path="/men/menBoots" element={<MenBoots />} />
            <Route path="/men/menWalkingBootsShoes" element={<MenWalkingBootsShoes />} />

            {/* Accessories */}
            <Route path="/men/menMensBags" element={<MenMensBags />} />
            <Route path="/men/menBelts" element={<MenBelts />} />
            <Route path="/men/menHats" element={<MenHats />} />
            <Route path="/men/menWallets" element={<MenWallets />} />
            <Route path="/men/menSunglasses" element={<MenSunglasses />} />
            <Route path="/men/menWatches" element={<MenWatches />} />
            <Route path="/men/menJewellery" element={<MenJewellery />} />
            <Route path="/men/menSuitcases" element={<MenSuitcases />} />


            {/* BEAUTY */}
            {/* MAKEUP */}

            <Route path="/product/foundations" element={<Foundations />} />
            <Route path="/product/concealers" element={<Concealers />} />
            <Route path="/product/eyeshadows" element={<Eyeshadows />} />
            <Route path="/product/mascaras" element={<Mascaras />} />
            <Route path="/product/lipsticks" element={<Lipsticks />} />
            <Route path="/product/nailPolish" element={<NailPolish />} />
            <Route path="/product/makeupAccessories" element={<MakeupAccessories />} />
            <Route path="/product/handNailSets" element={<HandNailSets />} />
            <Route path="/product/makeupBrushes" element={<MakeupBrushes />} />
            <Route path="/product/makeupBags" element={<MakeupBags />} />
            <Route path="/product/tintedMoisturisers" element={<TintedMoisturisers />} />

            {/* Fragrance */}

            <Route path="/product/womensPerfume" element={<WomensPerfume />} />
            <Route path="/product/PerfumeGiftSets" element={<PerfumeGiftSets />} />
            <Route path="/product/MensAftershave" element={<MensAftershave />} />
            <Route path="/product/AftershaveGiftSets" element={<AftershaveGiftSets />} />
            <Route path="/product/bathsShower" element={<BathsShower />} />

            {/* Skin & Body Care */}

            <Route path="/product/cleansers" element={<Cleansers />} />
            <Route path="/product/moisturisers" element={<Moisturisers />} />
            <Route path="/product/bodyCare" element={<BodyCare />} />
            <Route path="/product/lipBalmCare" element={<LipBalmCare />} />
            <Route path="/product/handFootCare" element={<HandFootCare />} />
            <Route path="/product/skinCareTreatments" element={<SkinCareTreatments />} />
            <Route path="/product/sunCreamAfterSun" element={<SunCreamAfterSun />} />
            <Route path="/product/beautyToolsTechnology" element={<BeautyToolsTechnology />} />
            <Route path="/product/menGrooming" element={<MenGrooming />} />

            {/* Hair Care & Styling */}

            <Route path="/product/hairCare" element={<HairCare />} />
            <Route path="/product/shampoo" element={<Shampoo />} />
            <Route path="/product/conditioner" element={<Conditioner />} />
            <Route path="/product/hairTreatments" element={<HairTreatments />} />
            <Route path="/product/hairStylingProducts" element={<HairStylingProducts />} />
            <Route path="/product/hairBrushes" element={<HairBrushes />} />
            <Route path="/product/electricalHairBeauty" element={<ElectricalHairBeauty />} />

            {/* BABY AND CHILD */}

            <Route path="/BabyAndChild" element={<BabyAndChild />} />

            {/* Baby Food & Milk */}

            <Route path="/product/BabyToddlerFood" element={<BabyToddlerFood />} />
            <Route path="/product/BabyToddlerMilk" element={<BabyToddlerMilk />} />

            {/* Baby Home & Nursery */}
            <Route path="/product/sleeping" element={<Sleeping />} />
            <Route path="/product/bathingChanging" element={<BathingChanging />} />
            <Route path="/product/feedingWeaning" element={<FeedingWeaning />} />
            <Route path="/product/nurseryFunitureFurnishings" element={<NurseryFunitureFurnishings />} />
            <Route path="/product/safetyHealthcare" element={<SafetyHealthcare />} />
            <Route path="/product/babyChecklist" element={<BabyChecklist />} />

            {/* Baby Clothes (0-4 years) */}
            <Route path="/product/babyToddlerclothes" element={<BabyToddlerclothes />} />
            <Route path="/product/babyBoyClothes" element={<BabyBoyClothes />} />
            <Route path="/product/babyGirlClothes" element={<BabyGirlClothes />} />
            <Route path="/product/sleepsuitsBodysuits" element={<SleepsuitsBodysuits />} />

            {/* Kids Clothes & Shoes */}
            <Route path="/product/AllGirlsclothes" element={<AllGirlsclothes />} />
            <Route path="/product/GirlsDresses" element={<GirlsDresses />} />
            <Route path="/product/GirlsShoes" element={<GirlsShoes />} />
            <Route path="/product/GirlsPyjamas" element={<GirlsPyjamas />} />
            <Route path="/product/AllBoysClothes" element={<AllBoysClothes />} />
            <Route path="/product/BoysPyjamas" element={<BoysPyjamas />} />
            <Route path="/product/BoysShoes" element={<BoysShoes />} />
            <Route path="/product/BackToSchoolShop" element={<BackToSchoolShop />} />

            {/* Kids Travel */}

            <Route path="/product/CarSeats" element={<CarSeats />} />
            <Route path="/product/BabyCarriers" element={<BabyCarriers />} />
            <Route path="/product/Strollers" element={<Strollers />} />

            {/* Kids Toys & Gifts */}

            <Route path="/product/Toys" element={<Toys />} />
            <Route path="/product/BabyPreschoolToys" element={<BabyPreschoolToys />} />
            <Route path="/product/KidsGamesPuzzles" element={<KidsGamesPuzzles />} />
            <Route path="/product/LEGO" element={<LEGO />} />
            <Route path="/product/GiftsForBabiesKids" element={<GiftsForBabiesKids />} />

            {/* Bedroom Furniture */}

            <Route path="/product/beds" element={<Beds />} />
            <Route path="/product/mattresses" element={<Mattresses />} />
            <Route path="/product/bedsideTables" element={<BedsideTables />} />
            <Route path="/product/chestsDrawers" element={<ChestsDrawers />} />
            <Route path="/product/dressingTables" element={<DressingTables />} />
            <Route path="/product/wardrobes" element={<Wardrobes />} />
            <Route path="/product/childrenBedroom" element={<ChildrenBedroom />} />

            {/* EquipmentBySport */}

            <Route path="/product/Cycling" element={<Cycling />} />
            <Route path="/product/GymTrainingFitness" element={<GymTrainingFitness />} />
            <Route path="/product/Running" element={<Running />} />
            <Route path="/product/Swimming" element={<Swimming />} />
            <Route path="/product/Yoga" element={<Yoga />} />

            {/* Sportswear */}

            <Route path="/product/WomensClothing" element={<WomensClothing />} />
            <Route path="/product/WomenSportsTrainers" element={<WomenSportsTrainers />} />
            <Route path="/product/MenClothing" element={<MenClothing />} />
            <Route path="/product/MenSportsTrainers" element={<MenSportsTrainers />} />

            {/* Fitness */}

            <Route path="/product/FitnessMachinesTechnology" element={<FitnessMachinesTechonology />} />
            <Route path="/product/SportsEquipment" element={<SportsEquipment />} />
            <Route path="/product/Treadmills" element={<Treadmills />} />
            <Route path="/product/ExerciseBikes" element={<ExerciseBikes />} />
            <Route path="/product/CrossTrainers" element={<CrossTrainers />} />
            <Route path="/product/Weights" element={<Weights />} />
            <Route path="/product/Smartwatches" element={<Smartwatches />} />

            {/* Sports Brands */}

            <Route path="/product/ExploreOurBrands" element={<ExploreOurBrands />} />
            <Route path="/product/Adidas" element={<Adidas />} />
            <Route path="/product/SweatyBetty" element={<SweatyBetty />} />
            <Route path="/product/TheNorthFace" element={<TheNorthFace />} />
            <Route path="/product/Therabody" element={<Therabody />} />
            <Route path="/product/UnderArmour" element={<UnderArmour />} />

            {/* Hobbies & Crafts */}

            <Route path="/product/Haberdashery" element={<Haberdashery />} />
            <Route path="/product/GamesPuzzles" element={<GamesPuzzles />} />
            <Route path="/product/Crafts" element={<Crafts />} />
            <Route path="/product/Stationery" element={<Stationery />} />
            <Route path="/product/Books" element={<Books />} />
            <Route path="/product/SewingMachines" element={<SewingMachines />} />
            <Route path="/product/WoolYarn" element={<WoolYarn />} />

            {/* Travel & Luggage */}

            <Route path="/product/ViewAllLuggage" element={<ViewAllLuggage />} />
            <Route path="/product/Backpacks" element={<BackPacks />} />
            <Route path="/product/CabinCases" element={<CabinCases />} />
            <Route path="/product/Suitcases" element={<Suitcases />} />
            <Route path="/product/HoldallsWeekendBags" element={<HoldallsWeekendBags />} />
            <Route path="/product/Camping" element={<Camping />} />
            <Route path="/product/HolidaySummerShop" element={<HolidaySummerShop />} />


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






            <Route path="/HomeAndGarden" element={<HomeAndGarden />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/FurnitureAndLighting" element={<FurnitureAndLighting />} />
            <Route path="/Electricals" element={<Electricals />} />
            <Route path="/FitnessAndTravel" element={<FitnessAndTravel />} />
            <Route path="/Gifts" element={<Gifts />} />


            <Route path="/profile" element={<YourAccount />} />
            <Route path="/addProduct" element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path="/details/:productId" element={<PlaceOrder />} />
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/addressBook" element={<AddressBook />} />
            <Route path="/myDetails" element={<MyDetails />} />
            <Route path="/myFiles" element={<MyFiles />} />
            <Route path="/:searchText" element={<SearchResult />} />
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
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
