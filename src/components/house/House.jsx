import React from "react";

export default function House(props) {
const {id, name, address, city, state, zipcode, img, mortgage, rent} = this.props
  return (
    <>
      <ol>
        <li>id: {id}</li>
        <li>Name: {name}</li>
        <li>Address: {address}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
        <li>Zip: {zipcode}</li>
        <img src={img} alt="oops" />
        <li>Mortgage:{mortgage}</li>
        <li>Rent: {rent}</li>
        <button onClick={id => this.props.commitDie(id)}>
          Delete
        </button>
        <hr />
      </ol>
    </>
  );
}
