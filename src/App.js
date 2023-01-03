import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters , setMonsters] =useState([]);
  const [filteredMonsters, setFilteredMonsters]= useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect( ()=> {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  },[monsters,searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
    

  return(
    <div className="App">
        <h1 className = 'app-title'>Monster Rolodex</h1>

        <SearchBox 
          onChangeHandler ={onSearchChange} 
          placeholder='Search Monsters' 
          className='monsters-search-box'
        />

        <CardList monsters={filteredMonsters} />
      </div>
  )
}
export default App;