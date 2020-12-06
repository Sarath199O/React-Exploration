import React, {Component} from 'react';
import Select from 'react-select';
import Provinces from './provinces.js';
import './App.css';

class Country extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Country",
      isCountrySet: false,
      countriesList: null,
      selectedCountry: null
    }

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetch('http://my-json-server.typicode.com/Sarath199O/web-tech/countries')
    .then(response => response.json())
    .then(countriesList => this.setState({ countriesList }));
  }

  componentDidUpdate() {
    console.log("Component Did Update");
    console.log(this.state.countriesList);
  }

  handleCountryChange = selectedCountry => {
    this.setState({ selectedCountry });
    console.log(`Option selected:`, selectedCountry);
  };

  render() {
    console.log("Render");
    return(
      <div className="App">
        <h1>React Lifecycle Example</h1>

        <h3>{this.state.name} :</h3>
        <Select
          id="selectCountryId"
          value={this.state.selectedCountry}
          onChange={this.handleCountryChange}
          options={this.state.countriesList}/>

        <Provinces/>
      </div>

    );
  }
}

export default Country;
