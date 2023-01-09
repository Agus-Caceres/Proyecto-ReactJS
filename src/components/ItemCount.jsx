import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [Itemstock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false)
 


    const incrementarStock = () => {
        if (counter < Itemstock){
        setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1){
        setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        setItemStock(Itemstock - quantity)
        setCounter(1)
        setVendido(true)
        onAdd(quantity)
        /* 
        if ((stock > 0) && (counter <= stock)){
        setStock(stock - counter)
        setCounter(0)
        console.log("Agregaste:" + counter + "productos al Carrito");
        }*/
    }

    useEffect(() => {
    setItemStock(stock)
}, [stock])
    
    return( 
    <div className="container text-center">
        <div className="row mb-3">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button>
                    <button type="button" className="btn btn-outline-primary"onClick={incrementarStock}>+</button>
                </div>
            </div>
        
        </div> 
        <div className="row">
            <div className="col-md-12">
                 {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar mi compra</Link> : <button type="button" className="btn btn-outline-primary" onClick={() => {addToCart(counter)}}>Agregar al Carrito</button>}
            </div>
        </div> 
    </div>
    
    )
}


export default ItemCount