import './App.css';
import Product from './Component/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
