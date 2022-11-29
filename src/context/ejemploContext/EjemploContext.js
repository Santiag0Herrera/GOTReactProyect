import React, {createContext, useState} from "react";

export const EjemploContext = createContext();

const EjemploContextProvider = ({children}) =>{
    const [ejem, setEjem] = useState("hola");
    let data = {
        ejem,
        setEjem
    };

    return(
        <>
        <EjemploContext.Provider value={data}>
        {children}
        </EjemploContext.Provider>
        </>
    )
};

export default EjemploContextProvider;

