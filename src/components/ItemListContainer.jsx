
import React from "react";
import { addDoc, collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../style.css';
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json"

const ItemListContainer = () =>{
const [items, setItems] = useState([])
const {id} = useParams();

  /*useEffect(() => {
  
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProductos.filter(item => item.categoria ===id) : arrayProductos);
      }, 2000)

    });

    promesa.then((data) => {
      console.log(data);
      setItems(data);
    })
    
  }, [id]);*/

  /*useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, "items")

    arrayProductos.forEach((documento) => {
      addDoc(itemCollection, documento)
    })
  }, [])*/

  //Consultar la coleccion de mis productos

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, "items")
    //const q = query(itemCollection, where("precio", ">", 1000)) //Filtro de los documentos con una condicion
    const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection

    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))

    })
  }, [id])

  return(
       
    <div id="itemList" className="container py-5">
        <ItemList items={items}/>
       
      </div>
    
    )
}



export default ItemListContainer