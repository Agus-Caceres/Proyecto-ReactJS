import React from "react";
import { useContext } from "react";
import '../style.css';
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
        const {cartTotal} =useContext(CartContext)



return ( cartTotal() ?

<Link to={"/cart"} type="button" className="btn  position-relative" title="Ir al Carrito">
        <img id="iconoCarrito" src="/images/cart.svg" alt="iconoCarrito" />
            <span id="numeroIcono" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartTotal()}
                    <span className="visually-hidden">Mi Carrito</span>
            </span>
</Link> : ""

)}

export default CartWidget