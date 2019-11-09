import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img: ""
    };
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
  updateImg = e => {
    this.setState({
      img: e.target.value
    });
  };

  render() {
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

        <br />
        <span>Img URL:</span>
        <input onChange={e => this.updateImg(e)} />
        {/* {this.whatsState()} */}
        <br/>

        <Link to = '/wizard/step2'>Next</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return reduxState
}

export default connect(mapStateToProps)(StepOne);
