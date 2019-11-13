import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stepTwo } from "../../dux/reducer";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    }
  }

  componentDidMount() {
    const { img } = this.props;
    this.setState({ img });
    
  }

  updateImg = e => {
    this.setState({
      img: e.target.value
    });
    console.log('hit');
  };

  render() {
    return (
      <div>
        <span>Img URL:</span>
        <input onChange={e => this.updateImg(e)} />
        <Link to="/wizard/step1">
          <button onClick={() => this.props.stepTwo(this.state.img)}>Previous</button>
        </Link>
        <Link to="/wizard/step3" >
        <button onClick={() => this.props.stepTwo(this.state.img)}>Next</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  const { img } = reduxState;
  console.log(reduxState);
  return {
    img
  };
}

// const mapDispatchToProps ={
//   stepTwo
// };
export default connect(mapStateToProps, {stepTwo})(StepTwo);
