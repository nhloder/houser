import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class StepThree extends Component {


   addHouse = () => {
      axios.post(`/api/houser`, this.state).then(() => {
        this.props.history.push("/");
      });
    };

   render() {
      return (
         <div>
            <br />
        <button onClick={() => this.addHouse()}>Complete</button>
        <br/>
        <Link to = '/wizard/step2'>Previous</Link>
        <Link to = '/wizard/step1'>Start Over</Link>
         </div>
      );
   }
}

export default StepThree;


//Build the components for steps two and three to roughly match Step One. Just change the input boxes to be different for each view.
// ^^^ the hell does that mean?