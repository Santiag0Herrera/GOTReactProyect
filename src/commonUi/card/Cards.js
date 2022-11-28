import React, {useContext} from "react";
import { CardContext } from "../../context/cardcontext/CardContext.js/CardContext";

const Cards = () => {
    const {fetchCardData} = useContext(CardContext)
    return(
        <>
        {fetchCardData()}
        </>
    )
}

export default Cards