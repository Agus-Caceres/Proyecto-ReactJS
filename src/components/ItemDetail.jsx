import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {


const onAdd = (quantity) => {
   console.log("Agregaste: " + quantity + "productos");
}

    return(
        <div className="row my-5">
            <div className="col-md-4 offset-md-4 text-center">
                <img className="img-fluid" src={item.imagen} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <div id="itemCount" className="text-center">
                <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail