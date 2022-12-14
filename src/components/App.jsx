import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../style.css';
import Error404 from './Error404';
import Footer from './Footer';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import CartContextProvider from './context/CartContext';




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
              <Route path={"*"} element={<Error404 />} />
            </Routes>   
          <Footer /> 
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
