import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../style.css';
import Error404 from './Error404';
import Footer from './Footer';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import CartContextProvider from './context/CartContext';
import Cart from './Cart';
import Checkout from './Checkout';




function App() {
  return (
    <CartContextProvider>
      <div >
        <BrowserRouter>
          <NavBar /> 
            <Routes>
              <Route path={"/"} element={<ItemListContainer />  } />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>  
            <div className='row align-end mt-5 pt-3'><Footer /></div> 
          
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
