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
import ManageProducts from './Component/Header/YourAccount/Admin/ManageProducts/ManageProducts';
import HomeAndGarden from './Component/Product/HomeGarden/HomeAndGarden';
import Women from './Component/Product/Women/Women';
import Men from './Component/Product/Men/Men';
import Beauty from './Component/Product/Beauty/Beauty';
import BabyAndChild from './Component/Product/Baby&child/BabyAndChild';
import FurnitureAndLighting from './Component/Product/FurnitureLighting/FurnitureAndLighting';
import Electricals from './Component/Product/Electricals/Electricals';
import FitnessAndTravel from './Component/Product/FitnessTravel/FitnessAndTravel';
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
            <Route path="/product/bedding" element={<BedSheets />} />
            <Route path="/product/pillows" element={<Pillows />} />
            <Route path="/product/PillowCases" element={<PillowCases />} />
            <Route path="/product/duvetCovers" element={<DuvetCovers />} />
            <Route path="/product/duvets" element={<Duvets />} />
            <Route path="/product/shopBedding" element={<ShopBedding />} />
            <Route path="/product/throwsBlanketsAndSpreads" element={<ThrowsblanketsandSpreads />} />

            {/* COOKING AND DINING */}
            <Route path="/product/childrensBedding" element={<ChildrensBedding />} />
            <Route path="/product/cookwareBakeware" element={<CookwareBakeware />} />
            <Route path="/product/cutlery" element={<Cutlery />} />
            <Route path="/product/glassesDrinkware" element={<GlassesDrinkware />} />
            <Route path="/product/potsPans" element={<PotsPans />} />
            <Route path="/product/foodPreparation" element={<FoodPreparation />} />
            <Route path="/product/picnicware" element={<Picnicware />} />
            <Route path="/product/kitchenUtensilsGadgets" element={<KitchenUtensilsGadgets />} />
            <Route path="/product/kitchenBins" element={<KitchenBins />} />


            {/* Home Décor & Accessories */}

            <Route path="/product/candlesandHomeFragrances" element={<CandlesandHomeFragrances />} />
            <Route path="/product/homeAccessories" element={<HomeAccessories />} />
            <Route path="/product/cushions" element={<Cushions />} />
            <Route path="/product/wallpaperPaintDIY" element={<WallpaperPaintDIY />} />
            <Route path="/product/mirrors" element={<Mirrors />} />
            <Route path="/product/rugs" element={<Rugs />} />
            <Route path="/product/storage" element={<Storage />} />
            <Route path="/product/towels" element={<Towels />} />
            <Route path="/product/picturesArtFrames" element={<PicturesArtFrames />} />


            {/* Curtains, Blinds & Floors */}
            <Route path="/product/blinds" element={<Blinds />} />
            <Route path="/product/carpetsAndFlooring" element={<CarpetsAndFlooring />} />
            <Route path="/product/curtains" element={<Curtains />} />
            <Route path="/product/madeToMeasurecurtains" element={<MadeToMeasurecurtains />} />
            <Route path="/product/curtainPolesAccessories" element={<CurtainPolesAccessories />} />
            <Route path="/product/fabrics" element={<Fabrics />} />


            {/* Garden */}
            <Route path="/product/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/product/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/product/gardenSeating" element={<GardenSeating />} />
            <Route path="/product/gasBBQs" element={<GasBBQs />} />
            <Route path="/product/charcoalBBQs" element={<CharcoalBBQs />} />
            <Route path="/product/pizzaOvens" element={<PizzaOvens />} />
            <Route path="/product/decorativeGardenAccessories" element={<DecorativeGardenAccessories />} />
            <Route path="/product/parasolsAccessories" element={<ParasolsAccessories />} />
            <Route path="/product/shopGarden" element={<ShopGarden />} />

            {/* WOMEN */}

            { /*CLOTHING*/}
            <Route path="/product/women/dresses" element={<Dresses />} />
            <Route path="/product/women/jeans" element={<Jeans />} />
            <Route path="/product/women/shirtsTops" element={<ShirtsTops />} />
            <Route path="/product/women/shorts" element={<Shorts />} />
            <Route path="/product/women/skirts" element={<Skirts />} />
            <Route path="/product/women/sportsClothes" element={<SportsClothes />} />
            <Route path="/product/women/swimwearBeachwear" element={<SwimwearBeachwear />} />
            <Route path="/product/women/women-Trousers" element={<WomenTrousers />} />
            <Route path="/product/women/leggings" element={<Leggings />} />
            <Route path="/product/women/plusSize" element={<PlusSize />} />
            <Route path="/product/women/maternityClothes" element={<MaternityClothes />} />
            <Route path="/product/women/cashmere" element={<Cashmere />} />
            <Route path="/product/women/coatsJackets" element={<CoatsJackets />} />
            <Route path="/product/women/jumpersKnitwear" element={<JumpersKnitwear />} />
            <Route path="/product/women/jumpsuits" element={<Jumpsuits />} />
            <Route path="/product/women/linen" element={<Linen />} />
            <Route path="/product/women/loungewear" element={<Loungewear />} />
            <Route path="/product/women/petite" element={<Petite />} />
            <Route path="/product/women/occasionwear" element={<Occasionwear />} />
            <Route path="/product/women/weddingBoutique" element={<WeddingBoutique />} />

            {/* WOMEN Footwear */}

            <Route path="/product/women/women-Shoes" element={<WomenShoes />} />
            <Route path="/product/women/women-Sandals" element={<WomenSandals />} />
            <Route path="/product/women/women-Slippers" element={<WomenSlippers />} />
            <Route path="/product/women/women-TrainersAndPlimsoles" element={<WomenTrainersAndPlimsoles />} />
            <Route path="/product/women/women-CourtShoes" element={<WomenCourtShoes />} />
            <Route path="/product/women/women-boots" element={<WomenBoots />} />
            <Route path="/product/women/women-pumps" element={<WomenPumps />} />


            {/* Lingerie, Nightwear */}

            <Route path="/product/BrasSportsBras" element={<BrasSportsBras />} />
            <Route path="/product/Nightwear" element={<Nightwear />} />
            <Route path="/product/Socks" element={<Socks />} />
            <Route path="/product/Knickers" element={<Knickers />} />
            <Route path="/product/Tights" element={<Tights />} />


            {/* Accessories */}

            <Route path="/product/women-handbags" element={<WomenHandbags />} />
            <Route path="/product/women-purses" element={<WomenPurses />} />
            <Route path="/product/women-belts" element={<WomenBelts />} />
            <Route path="/product/women-sunglasses" element={<WomenSunglasses />} />
            <Route path="/product/women-jewellery" element={<WomenJewellery />} />
            <Route path="/product/women-hats" element={<WomenHats />} />
            <Route path="/product/women-watches" element={<WomenWatches />} />
            <Route path="/product/women-hairAccessories" element={<WomenHairAccessories />} />
            <Route path="/product/women-hatsGlovesScarves" element={<WomenHatsGlovesScarves />} />
            <Route path="/product/women-occasionHatsFascinators" element={<WomenOccasionHatsFascinators />} />
            <Route path="/product/women-faceCoverings" element={<WomenFaceCoverings />} />
            <Route path="/product/women-readingGlassesGlassesCases" element={<WomenReadingGlassesGlassesCases />} />
            <Route path="/product/women-keyrings" element={<WomenKeyrings />} />
            <Route path="/product/women-umbrellas" element={<WomenUmbrellas />} />
            <Route path="/product/women-suitcases" element={<WomenSuitcases />} />

            {/* MEN Clothing */}

            <Route path="/product/Blazers" element={<Blazers />} />
            <Route path="/product/MenJeans" element={<MenJeans />} />
            <Route path="/product/PoloShirts" element={<PoloShirts />} />
            <Route path="/product/MenShirts" element={<MenShirts />} />
            <Route path="/product/MenShorts" element={<MenShorts />} />
            <Route path="/product/MenSportsClothesGym" element={<MenSportsClothesGym />} />
            <Route path="/product/Suits" element={<Suits />} />
            <Route path="/product/Swimwear" element={<Swimwear />} />
            <Route path="/product/Trousers" element={<Trousers />} />
            <Route path="/product/T-Shirts" element={<TShirts />} />
            <Route path="/product/Waistcoats" element={<Waistcoats />} />
            <Route path="/product/men-cashmere" element={<MenCashmere />} />
            <Route path="/product/men-coatsJackets" element={<MenCoatsJackets />} />
            <Route path="/product/men-sweatshirtsHoodies" element={<MenSweatshirtsHoodies />} />
            <Route path="/product/men-jumpersCardigans" element={<MenJumpersCardigans />} />
            <Route path="/product/men-linen" element={<MenLinen />} />
            <Route path="/product/men-loungewear" element={<MenLoungewear />} />
            <Route path="/product/men-weddingShop" element={<MenWeddingShop />} />
            <Route path="/product/men-holidaySummerShop" element={<MenHolidaySummerShop />} />

            {/* Nightwear, Underwear & Socks */}


            <Route path="/product/PyjamasNightwear" element={<PyjamasNightwear />} />
            <Route path="/product/RobesAndDressingGowns" element={<RobesAndDressingGowns />} />
            <Route path="/product/MenSocks" element={<MenSocks />} />
            <Route path="/product/Underwear" element={<Underwear />} />

            {/* Footwear */}

            <Route path="/product/men-Shoes" element={<MenShoes />} />
            <Route path="/product/men-Sandals" element={<MenSandals />} />
            <Route path="/product/men-Slippers" element={<MenSlippers />} />
            <Route path="/product/men-TrainersAndPlimsoles" element={<MenTrainersAndPlimsoles />} />
            <Route path="/product/men-Boots" element={<MenBoots />} />
            <Route path="/product/men-WalkingBootsShoes" element={<MenWalkingBootsShoes />} />


            <Route path="/product/men-mensBags" element={<MenMensBags />} />
            <Route path="/product/men-belts" element={<MenBelts />} />
            <Route path="/product/men-hats" element={<MenHats />} />
            <Route path="/product/men-wallets" element={<MenWallets />} />
            <Route path="/product/men-sunglasses" element={<MenSunglasses />} />
            <Route path="/product/men-watches" element={<MenWatches />} />
            <Route path="/product/men-jewellery" element={<MenJewellery />} />
            <Route path="/product/men-suitcases" element={<MenSuitcases />} />



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

            {/* Kids Clothing & Shoes */}
            <Route path="/product/kidsshirtsTops" element={<KidsShirtsTops />} />
            <Route path="/product/kidsdresses" element={<KidsDresses />} />
            <Route path="/product/kidspyjamasNightwear" element={<KidsPyjamasNightwear />} />
            <Route path="/product/kidstrousersLeggings" element={<TrousersLeggings />} />
            <Route path="/product/kidsjeans" element={<KidJeans />} />
            <Route path="/product/kidsjeans" element={<KidJeans />} />
            <Route path="/product/kidspartyWear" element={<KidsPartyWear />} />

            {/* Boys Clothes */}
            <Route path="/product/boysshortsTrousers" element={<BoysShortsTrousers />} />
            <Route path="/product/boysshirtsTops" element={<BoysShirtsTops />} />
            <Route path="/product/boyspyjamasNightwear" element={<BoysPyjamasNightwear />} />
            <Route path="/product/boyspartywear" element={<BoysPartywear />} />
            <Route path="/product/boyspants" element={<BoysPants />} />
            <Route path="/product/boyssocks" element={<BoysSocks />} />
            <Route path="/product/boyshats" element={<BoysHats />} />

            {/* Bedroom Furniture */}
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
            <Route path="/HomeAndGarden" element={<HomeAndGarden />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/BabyAndChild" element={<BabyAndChild />} />
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
