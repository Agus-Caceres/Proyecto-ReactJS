import React from "react";
import '../style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {

return (

<button type="button" className="btn  position-relative">
        <FontAwesomeIcon id="icono" icon={faCartShopping} />
            <span id="numeroIcono" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                        <span className="visually-hidden">Mi Carrito</span>
            </span>
</button>

)}

export default CartWidget