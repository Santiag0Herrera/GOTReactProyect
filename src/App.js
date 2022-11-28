import './App.css';
import React from 'react';
import ResponsiveAppBar from './component/header/header';
import CardContextProvider from './context/cardcontext/CardContext.js/CardContext';
import Cards from './commonUi/card/Cards'

function App() {
  return (
    <>
    <CardContextProvider>
      <ResponsiveAppBar/>
      <Cards/>
    </CardContextProvider>
    </>
  );
}

export default App;
