import { ActionTypes } from '../actions/types';
const initialState: any = {
  name: '',
  country: [],
};

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.setName:
      return {
        ...state,
        name: action.payload,
      };
    case ActionTypes.getName:
      return { ...state, name: action.payload };
    case ActionTypes.fetchData:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default countryReducer;
