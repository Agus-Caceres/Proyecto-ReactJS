import React from "react";
import '../style.css';



const CartWidget = () => {

return (

<button type="button" className="btn  position-relative">
        <img id="iconoCarrito" src="images/cart.svg" alt="" />
            <span id="numeroIcono" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">Mi Carrito</span>
            </span>
</button>

)}

export default CartWidget