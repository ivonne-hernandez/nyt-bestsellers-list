import { useState, useEffect } from 'react';
import { getCurrentWeeksBestSellers } from './apiCalls';
import './App.css';

const App = () => {
  const [lists, setLists] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    const allBestSellersLists = getCurrentWeeksBestSellers()
      .then(data => {
        setLists(data.results.lists);
        setDate(data.results.bestsellers_date)
      });
  }, []);
  
  return (
    <div className="App">
      <h1>New York Times Bestsellers List</h1>
    </div>
  )
}

export default App;
