import React from 'react';
import '../style.css';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';


function App() {
  return (
    <div >
        <NavBar />    
        <ItemListContainer />  
        <Footer /> 
    </div>
  );
}

export default App;
