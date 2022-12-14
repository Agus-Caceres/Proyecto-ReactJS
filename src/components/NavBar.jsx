import React from "react";
import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom"
import '../style.css';




function NavBar(){
    return (
  <div className="container">
    <div className='row'>
      <div className='col-md-12'>
        <nav id='navBar' className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link id='navBar' className="navbar-brand col-md-2"  to={"/"}>CATARSIS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav col-6">
                    <NavLink id='itemsNavBar' className="nav-link active col-4 text-center" aria-current="page" to={"/"}>Productos</NavLink>
                    <NavLink id='itemsNavBar' className="nav-link active col-4 text-center" aria-current="page" to={"/category/malbec"}>Malbec</NavLink>
                    <NavLink id='itemsNavBar' className="nav-link active col-4 text-center" aria-current="page" to={"/category/cabernet"}>Cabernet</NavLink>
                  </div>
                </div>    
              </div>
              
              <CartWidget />
                
        </nav>
      </div>
    </div>
  </div>       
    )
}

export default NavBar