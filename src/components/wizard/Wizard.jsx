import React, { Component } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import StepOne from './StepOne';
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


class Wizard extends Component {
  whatsState() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Route path = '/wizard/step1' component = {StepOne}/>
        <Route path = '/wizard/step2' component = {StepTwo}/>
        <Route path = '/wizard/step3' component = {StepThree}/>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

export default Wizard;
