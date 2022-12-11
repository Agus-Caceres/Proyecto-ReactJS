import React from "react";
import CartWidget from "./CartWidget";
import '../style.css';




function NavBar(){
    return (
  <div className="container">
    <div className='row'>
      <div className='col-md-12'>
        <nav id='navBar' className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a id='navBar' className="navbar-brand col-md-2" w href="https://plataforma.coderhouse.com/cursos/34840/reactjs">CATARSIS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav col-6">
                    <a id='itemsNavBar' className="nav-link active col-4" aria-current="page" href="https://plataforma.coderhouse.com/cursos/34840/reactjs">Productos</a>
                    <a id='itemsNavBar' className="nav-link active col-4" aria-current="page" href="https://plataforma.coderhouse.com/cursos/34840/reactjs">Nosotros</a>
                    <a id='itemsNavBar' className="nav-link active col-4" aria-current="page" href="https://plataforma.coderhouse.com/cursos/34840/reactjs">Contacto</a>
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