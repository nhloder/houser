import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from 'react-redux'
import StepOne from './StepOne';
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { reSet } from '../../dux/reducer';


class Wizard extends Component {
  
  render() {
    return (
      <div>
        <Route path = '/wizard/step1' component = {StepOne}/>
        <Route path = '/wizard/step2' component = {StepTwo}/>
        <Route path = '/wizard/step3' component = {StepThree}/>
        <Link to="/" onClick = {() => reSet()}>Cancel</Link>
      </div>
    );
  }
}

export default connect(null, {reSet})(Wizard);
