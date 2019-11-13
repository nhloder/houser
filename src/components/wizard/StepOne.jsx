import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepOne } from '../../dux/reducer';

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
    };
  }

  componentDidMount(){
    const {name, address, city, state, zipcode} = this.props
    this.setState({name, address, city, state, zipcode})
  }

  addHouse = () => {
    axios.post(`/api/houser`, this.state).then(() => {
      this.props.history.push("/");
    });
  };

  updateName = e => {
    this.setState({
      name: e.target.value
    });
  };

  updateAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  updateCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  updateState = e => {
    this.setState({
      state: e.target.value
    });
  };

  updateZipcode = e => {
    this.setState({
      zipcode: e.target.value
    });
  };
  

  render() {
    // console.log(this.state);
    // console.log(this.props);
    
    
    return (
      <div>
        <br />
        <span>Name:</span>
        <input onChange={e => this.updateName(e)} />

        <br />
        <span>Address:</span>
        <input onChange={e => this.updateAddress(e)} />

        <br />
        <span>City:</span>
        <input onChange={e => this.updateCity(e)} />

        <br />
        <span>State:</span>
        <input onChange={e => this.updateState(e)} />

        <br />
        <span>Zipcode:</span>
        <input onChange={e => this.updateZipcode(e)} />

        {/* {this.whatsState()} */}
        <br/>
        <Link to = '/wizard/step2' ><button onClick = {() => this.props.stepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zipcode)}>Next Step</button>
       </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  const {name, address, city, state, zipcode} = reduxState;
  console.log(reduxState);
  return {
    name,
    address,
    city,
    state,
    zipcode,
  };
};
// const mapDispatchToProps ={
//   stepOne
// };

export default connect(mapStateToProps, {stepOne})(StepOne);
