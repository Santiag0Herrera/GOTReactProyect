import './App.css';
import React from 'react';
import ResponsiveAppBar from './component/header/header';
import CardContextProvider from './context/cardcontext/CardContext.js/CardContext';
import Cards from './commonUi/card/Cards'
import EjemploContextProvider from './context/ejemploContext/EjemploContext';

function App() {
  return (
    <>
    <EjemploContextProvider>
    <CardContextProvider>
      <ResponsiveAppBar/>
      <Cards/>
    </CardContextProvider>
    </EjemploContextProvider>
    </>
  );
}

export default App;
