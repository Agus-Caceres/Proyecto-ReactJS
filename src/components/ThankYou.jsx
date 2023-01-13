import React from "react";
import { useParams, Link } from "react-router-dom";


const ThankYou = () => {
    const {id} = useParams()

 return(
    <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div class="alert alert-danger" role="alert">
                            <h1>Gracias por tu Compra!</h1>
                            <p>Tu numero de compra es: <b>{id}</b></p>
                        </div>
                        <Link to={"/"} className ="btn btn-primary text-center mt-3">Volver a la Pagina Principal</Link>
                    </div>
                </div>
              </div>  
 )
}


export default ThankYou