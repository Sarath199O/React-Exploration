import React, {Component} from 'react';
import Select from 'react-select';
import './App.css';

class Districts extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Districts",
      districtList: null
    }

    console.log("Child Constructor");
  }
  
  componentDidMount() {
    console.log("Component Did Mount");
    fetch('http://my-json-server.typicode.com/Sarath199O/web-tech/provinces')
    .then(response => response.json())
    .then(provincesList => this.setState({ provincesList }));
  }

  shouldComponentUpdate(nextProp, nextState) {
    return false;
  }

  render() {
    console.log("Child Render");
    return(
      <div className="App">
        <h3>{this.state.name} :</h3>
        <Select
          id="selectProvinceId"
          value={this.state.selectedProvince}
          onChange={this.handleCountryChange}
          options={this.state.countriesList}/>
      </div>

    );
  }
}

export default Districts;
