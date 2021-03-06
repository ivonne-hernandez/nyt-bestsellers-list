import { useState, useEffect } from 'react';
import { getCurrentWeeksBestsellers } from './apiCalls';
import Dropdown from './Components/Dropdown/Dropdown';
import Table from './Components/Table/Table.js';
import './App.css';


const App = () => {
  const [lists, setLists] = useState([]);
  const [date, setDate] = useState('');
  const [selectedList, setSelectedList] = useState('All');

  useEffect(() => {
    getCurrentWeeksBestsellers()
      .then(data => {
        setLists(data.results.lists);
        setDate(data.results.bestsellers_date)
      });
  }, []);

  const getFilteredLists = () => {
    if (selectedList === 'All') {
      return lists;
    } else {
      return lists.filter(list => list.list_name === selectedList);
    }
  }
  
  if (!lists.length) {
    return (
      <div className="App">
        <h1>New York Times Bestsellers List</h1>
        <h2 className='loading'>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>New York Times Bestsellers List</h1>
        <Dropdown 
          setSelectedList={setSelectedList} 
          options={lists.map(list => list.list_name)}
          selectedList={selectedList} />
        <Table lists={getFilteredLists()} date={date} />
      </div>
    );
  }
}

export default App;
