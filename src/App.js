import './App.css';
import React, { useState, useEffect } from 'react';
import ItemCard from './data/itemCard';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

export default App;
