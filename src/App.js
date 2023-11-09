import { Routes, Route } from 'react-router-dom';
import Cart from './components/carts/Cart';
import Shop from './components/shop/Shop';
import './App.css';
import Nav from './components/Nav';
import ShopState from './context/ShopState';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <ShopState>
      <Nav  />
      <Routes> 
      <Route path ="/cart" element = {<Cart />} />
     
        <Route path="/" element= {<Shop />} />
        
        </Routes>
        </ShopState>
        <Footer />
    </div>
  );
}

export default App;
