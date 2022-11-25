import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component{
    render(){
        return(
        <input 
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
        />
        )
    }
}
export default SearchBox;

/* By doing this we are expecting that every companenet that passes props to search box to pass classname and placeholder and on change props */