import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stepThree, reSet } from "../../dux/reducer";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  componentDidMount() {
    this.setState(this.reduxState);
  }

  updateMortgage = e => {
    this.setState({
      mortgage: e.target.value
    });
  };

  updateRent = e => {
    this.setState({
      rent: e.target.value
    });
  };

  addHouse = () => {
    const { mortgage, rent } = this.state;
    const { name, address, city, state, zipcode, img } = this.props;

    const body = { name, address, city, state, zipcode, img, mortgage, rent };

    axios
      .post(`/api/houser`, body)
      .then(() => {
        this.setState({
          mortgage: 0,
          rent: 0
        });
        this.props.reSet();
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <span>Mortgage:</span>
        <input onChange={e => this.updateMortgage(e)} />
        <br />
        <span>Rent:</span>
        <input onChange={e => this.updateRent(e)} />
        <br />
        <button onClick={() => this.addHouse()}>Complete</button>
        <br />
        <Link to="/wizard/step2" >
          <button onClick={() => this.props.stepThree(this.state.mortgage, this.state.rent)}>Previous</button>
        </Link>
        <Link to="/wizard/step1"><button>Start Over</button></Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { 
    name, address, city, state, zipcode, img, 
    mortgage, rent } = reduxState;
  // console.log(reduxState);
  return {
    name,
    address,
    city,
    state,
    zipcode,
    img,
    mortgage,
    rent
  };
}

const mapDispatchToProps = {
  stepThree,
  reSet
};

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);

//Build the components for steps two and three to roughly match Step One. Just change the input boxes to be different for each view.
// ^^^ what does that mean?
