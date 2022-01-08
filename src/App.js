import './App.css';
import Product from './Component/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Bedding from './Component/Product/HomeGarden/HomeFurnishingsAccessories/Bedding/Bedding';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bedding" element={<Bedding />} />

          <Route path="invoices" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
