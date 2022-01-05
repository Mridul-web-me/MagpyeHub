import './App.css';
import HeaderNav from './Component/Header/HeaderNav/HeaderNav';
import HeaderTop from './Component/Header/HeaderTop/HeaderTop';
import Banner from './Component/Header/Banner/Banner'
import Product from './Component/Product/Product';
import Brand from './Component/Product/Brand/Brand';
import FavouriteProduct from './Component/Product/FavouriteProduct/FavouriteProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="expenses" element={<HeaderNav />} />
          <Route path="invoices" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
