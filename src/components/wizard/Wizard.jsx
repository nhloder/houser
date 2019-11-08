import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Wizard extends Component {
   constructor() {
      super();
      this.state = {
         name: '',
         address: '',
         city: '',
         state: '',
         zipcode: 0
      }
   }
   
   render() {
      return (
         <div>
            Wizard
            <Link to = '/'>Cancel</Link>
         </div>
      );
   }
}

export default Wizard;