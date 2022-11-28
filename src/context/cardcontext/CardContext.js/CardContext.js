import React, {useEffect, useState, createContext} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import ItemCard from "../../../data/itemCard";

export const CardContext = createContext()

const CardContextProvider = ({children}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

//API CONSUMING
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true)
                setItems(result)
            },
    
            (error) => {
                setIsLoaded(true)
                setError(error);
            }
            )
    }, [])
/////////////////

    const fetchCardData = () => {
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className='loader'>
                <CircularProgress/>
                </div> 
            )
        } else { 
            return (
            <div className='cardContainer'>
                {items.map(item => (
                <ItemCard key={item.id} family={item.family} firstName={item.firstName} lastName={item.lastName} fullName={item.fullName} image={item.imageUrl}/>
                ))}
            </div>
            );
        }
    }

    let data = {
        fetchCardData
    }

    return(
        <CardContext.Provider value={data}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider 