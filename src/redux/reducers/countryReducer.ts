import { IState } from '../../interfaces';
import { ActionTypes } from '../actions/types';
const initialState: IState = {
  countries: [],
  name: '',
  country: [],
  error: '',
};

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.fetchCountries:
      return { ...state, countries: action.payload };
    case ActionTypes.fetchError:
      return { ...state, error: action.message };
    case ActionTypes.setName:
      return {
        ...state,
        name: action.payload,
      };
    case ActionTypes.getName:
      return { ...state, name: action.payload };
    case ActionTypes.fetchData:
      return { ...state, country: action.payload };
    case ActionTypes.errorData:
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default countryReducer;
