
import React from "react";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../style.css';
import ItemList from "./ItemList";
import Loading from "./Loading";


const ItemListContainer = () =>{
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const {id} = useParams();



  //Consultar la coleccion de mis productos

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, "items")
    const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection

    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
      setLoading(false)

    })
  }, [id])

  return(
       
    <div id="itemList" className="container py-5">
      {loading ? <Loading /> : <ItemList items={items} />}
        <ItemList items={items}/>
       
      </div>
    
    )
}



export default ItemListContainer