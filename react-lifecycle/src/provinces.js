import React, {Component} from 'react';
import Select from 'react-select';
import Districts from './district.js';
import './App.css';

class Provinces extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Provinces",
      provincesList: null,
      selectedProvince: null
    }

    console.log("Child Constructor");
  }
  
  componentDidMount() {
    console.log("Component Did Mount");
    // fetch('http://my-json-server.typicode.com/Sarath199O/web-tech/provinces')
    // .then(response => response.json())
    // .then(provincesList => this.setState({ provincesList }));
  }

  shouldComponentUpdate(nextProp, nextState) {
    return false;
  }

  handleProvinceChange = selectedProvince => {
    this.setState({ selectedProvince });
    console.log(`Option selected:`, selectedProvince);
  }

  render() {
    return(
      <div className="App">
        <h3>{this.state.name} :</h3>
        <Select
          id="selectProvinceId"
          value={this.state.selectedProvince}
          onChange={this.handleProvinceChange}
          options={this.state.countriesList}/>
      </div>

    );
  }
}

export default Provinces;
