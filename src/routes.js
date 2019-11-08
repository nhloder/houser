import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Wizard from './components/wizard/Wizard';
import Dashboard from './components/dashboard/Dashboard';

export default(
   <Switch>
      <Route exact path = '/' component = {Dashboard} />
      <Route path = '/wizard' component = {Wizard}/>
   </Switch>
)
