import React from "react";

const Footer = () =>{
    return(
    <div className="container-fluid row align-end " >
        <div id="footer" className="container py-2">
            <div id="footerHeigh"></div>
            <hr />
            <div className="row">
                <div className="col-md-6"> 
                    <p className="ms-5 lead">CATARSIS</p>
                </div>
                <div className="col-md-6 text-end"> 
                    <p>
                        <a href="https://plataforma.coderhouse.com/cursos/34840/reactjs" target={"_blank"} rel="noreferrer" className="me-3"><img src={"/images/envelope.svg"} alt="Mail" width={24} /></a>
                        <a href="https://plataforma.coderhouse.com/cursos/34840/reactjs" target={"_blank"} rel="noreferrer" className="me-3"><img src={"/images/instagram.svg"} alt="Mail" width={24} /></a>
                        <a href="https://plataforma.coderhouse.com/cursos/34840/reactjs" target={"_blank"} rel="noreferrer" className="me-3"><img src={"/images/facebook.svg"} alt="Mail" width={24} /></a>
                        <a href="https://plataforma.coderhouse.com/cursos/34840/reactjs" target={"_blank"} rel="noreferrer" className="me-3"><img src={"/images/telephone.svg"} alt="Mail" width={24} /></a>
                    </p>
                    
                </div>

            </div>

        </div>
        
    </div>)
}




export default Footer