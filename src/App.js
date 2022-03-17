import { useState, useEffect } from 'react';
import { getCurrentWeeksBestsellers } from './apiCalls';
import Table from './Components/Table/Table.js';

import './App.css';

const App = () => {
  const [lists, setLists] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    getCurrentWeeksBestsellers()
      .then(data => {
        setLists(data.results.lists);
        setDate(data.results.bestsellers_date)
      });
  }, []);
  
  return (
    <div className="App">
      <h1>New York Times Bestsellers List</h1>
      <Table lists={lists} date={date} />
    </div>
  )
}

export default App;
