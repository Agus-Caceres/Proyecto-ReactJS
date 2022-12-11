import React from "react";
import '../style.css';

const ItemListContainer = ({saludo}) =>{
    return(
       
    <div id="itemList" className="container py-5">
    <div className='row'>
      <div className='col-md-12'>
        <div id="listContainer" className="alert alert-danger" role="alert">
            <p>{saludo}</p>
        </div>
       </div>
    </div>
    </div>
    )
}



export default ItemListContainer