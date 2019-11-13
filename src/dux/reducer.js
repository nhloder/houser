// import React from 'react'

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';
const RESET = 'RESET';

function reducer(state = initialState, action) {
  // console.log('hit', action );
  switch (action.type) {
    case STEP_ONE:
      return { ...state, ...action.payload };
    case STEP_TWO:
      return { ...state, ...action.payload };
    case STEP_THREE:
      return { ...state, ...action.payload };
    case reSet:
      return { ...initialState };
    default:
      return state;
  }
}

export function stepOne(name, address, city, state, zipcode) {
  return {
    type: STEP_ONE,
    payload: {
      name,
      address,
      city,
      state,
      zipcode
    }
  };
}

export function stepTwo(img) {
  return {
    type: STEP_TWO,
    payload: {img}
  };
}

export function stepThree(mortgage, rent) {
  return {
    type: STEP_THREE,
    payload: {
      mortgage,
      rent
    }
  };
}

export function reSet() {
  return {
    type: RESET,
    payload: initialState
  };
}

export default reducer;
