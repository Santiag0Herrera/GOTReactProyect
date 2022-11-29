import React, {useContext} from "react";
import { CardContext } from "../../context/cardcontext/CardContext.js/CardContext";
import {EjemploContext} from "../../context/ejemploContext/EjemploContext";

const Cards = () => {
    const {fetchCardData} = useContext(CardContext)
    const {ejem, setEjem} = useContext(EjemploContext)
    //setEjem(false)
    return(
        <>
        {fetchCardData()}
        <p>Tu ejem es: {ejem}</p>
        <button onClick={()=>{setEjem("chau")}}>ONCLICK</button>
        </>
    )
}

export default Cards