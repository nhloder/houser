import React, { Component } from 'react';
import House from '../house/House';
import {Link} from 'react-router-dom'

class Dashboard extends Component {

   render() {
      return (
         <div>
            Dashboard
            <Link to = '/wizard'>Add New Property</Link>
            <House />
         </div>
      );
   }
}

export default Dashboard;