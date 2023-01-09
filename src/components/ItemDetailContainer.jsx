import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";
//import arrayProductos from "./json/arrayProductos.json";

const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams()
   

   /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            }, 2000)   
        })
        promesa.then((data) => {
            setItem(data)
        }

        )

    }, [id]);*/

    

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id)
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()})
            }else 
            console.log("Error, no se encontro el  docuemnto")
        })
    }, [])

    return (
    <div className="container">
        <ItemDetail item= {item}/>
    </div>
)}


export default ItemDetailContainer