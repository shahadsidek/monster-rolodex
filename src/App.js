import { Component } from 'react';

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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(
      () => {
        return{ searchField };
      }
    );
  }
  
  render(){
    
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this; 
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });

    console.log("Render Method - Value of monsters", monsters)
    console.log("Render Method - Value of searchField",searchField)
    
    return(
      <div className="App">
        <input 
          className="search-box"
          type="search"
          placeholder='Search Monsters'
          onChange={onSearchChange}
        />
        { 
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
