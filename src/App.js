import { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
    console.log("Constructor Method - Value of monsters", this.state.monsters);
    console.log("Constructor Method - Value of searchField", this.state.searchField);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>this.setState (
      ()=>{
        return{monsters: users}
      },
      ()=>{
        console.log("didMount Method - Value of monsters", this.state.monsters);
        console.log("didMount Method - Value of searchField", this.state.searchField);
      }
    ));
  }
  // onSearch function and updating the state variable
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {
        return{ searchField };
      }
    );
  }
  
  render(){
    // DESTRUCTURING
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this; 
    // filter will give us a new array - it will run through every element in the array
    // the filter will call this callback function on every element of the array and this callback will return a boolean value
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    console.log("Render Method - Value of monsters", monsters)
    console.log("Render Method - Value of searchField",searchField)
    
    return(
      <div className="App">
        
        { /*
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        */}
        <SearchBox
          className ='monsters-search-box'
          placeholder = 'search monsters'
          onChangeHandler = {onSearchChange}
        />
        <CardList 
          monsters = {filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
