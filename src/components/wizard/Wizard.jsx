import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
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
  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  updateCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  updateState(e) {
    this.setState({
      state: e.target.value
    });
  }

  updateZipcode(e) {
    this.setState({
      zipcode: e.target.value
    });
  }
  updateImg(e) {
    this.setState({
      img: e.target.value
    });
  }

  whatsState() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        Wizard
        <Link to="/">Cancel</Link>
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
        {this.whatsState()}
      </div>
    );
  }
}

export default Wizard;
