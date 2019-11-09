import React, { Component } from "react";
import House from "../house/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get(`/api/houser`).then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  commitDie(id){
    console.log(id)
    axios.delete(`/api/houser/${id}`)
    .then(() => {
      window.location.reload()
    }).catch(err => {
      console.log(err);
      
    })
  }
  
  render() {
    const allHouses = this.state.houses.map(house => {
      // return(<House houses={this.state.houses}
      //     commitDie = {this.commitDie()} 
      //     key = {house.id}/>)
      return (
        <>
          <ol>
            {/* <li>id: {house.id}</li> */}
            <li>Name: {house.name}</li>
            <li>Address: {house.address}</li>
            <li>City: {house.city}</li>
            <li>State: {house.state}</li>
            <li>Zip: {house.zipcode}</li>
            <img src={house.img} alt="oops" />
            <li>Mortgage:{house.mortgage}</li>
            <li>Rent: {house.rent}</li>
            <button onClick = {(id) => this.commitDie(house.id)}>Delete</button>
            <hr />
          </ol>
        </>
      );
    });
    return (
      <div>
        Dashboard
        <Link to = "/wizard/step1">Add New Property</Link>
        
        {allHouses}
      </div>
    );
  }
}

export default Dashboard;
