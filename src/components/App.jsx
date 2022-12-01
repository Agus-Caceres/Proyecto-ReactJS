import React from 'react';
import '../style.css';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';


function App() {
  return (
    <div >
        <NavBar />    
        <ItemListContainer saludo={"No se encontraron productos"}/>  
        <Footer /> 
    </div>
  );
}

export default App;
