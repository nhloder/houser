// INITIAL STATE \\
import StepOne from '../components/wizard/StepOne';
const initialState ={
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img: "",
      mortgage:0,
      rent:0
}
// ACTION CONSTANTS \\
const STEP_ONE = 'STEP_ONE'

// ACTION BUILDERS \\
export const stepOne = (name, address, city, state, zipcode) =>{
   return{
      type:STEP_ONE,
      payload: {
         name, address, city, state, zipcode
      }
   }
}

// REDUCER FUNCTION \\
export default function reducer(state = initialState, action){
   switch(action.type){
      case STEP_ONE:
         return{...state, name:action.payload, address:action.payload, city:action.payload, state:action.payload, zipcode : action.payload }
         case STEP_ONE + '_PENDING':
                return {...state, loading: true}
            case STEP_ONE + '_REJECTED':
                    return {...state, loading: false}
            case STEP_ONE+ '_FULFILLED':
                return {...state, loading: false,}
      default:return state
   }
}