import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StepTwo extends Component {


   render() {
      return (
         <div>
            

            <Link to = '/wizard/step1'>Previous</Link>
            <Link to = '/wizard/step3'>Next</Link>
         </div>
      );
   }
}

export default StepTwo;