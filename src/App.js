
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [searchField, setSearchField]= useState('');

  
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {
        return{ searchField };
      }
    );
  }

  return(
     <div className="App">
        <h1 className="app-title"> Monster Rolodex</h1>
        <SearchBox
          className ='monsters-search-box'
          placeholder = 'search monsters'
          onChangeHandler = {onSearchChange}
        />
      </div>
        
        
  )
}
export default App