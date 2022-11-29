import React from "react";
import '../style.css';

const ItemListContainer = () =>{
    return(
       
    <div id="itemList" className="container">
    <div className='row'>
      <div className='col-md-12'>
        <div id="listContainer" className="alert alert-danger" role="alert">
            No se han encontrado productos
        </div>
       </div>
    </div>
    </div>
    )
}



export default ItemListContainer