import { ActionTypes } from '../types';
import { ICountry } from '../../../interfaces';

export const getCountries = () => {
  return {
    type: ActionTypes.getCountries,
  };
};
export const fetchCountriesAction = (data: Array<any>) => {
  return {
    type: ActionTypes.fetchCountries,
    payload: data,
  };
};
export const setNameAction = (e: any) => {
  return { type: ActionTypes.setName, payload: e };
};
export const getNameAction = (name: any) => {
  return {
    type: ActionTypes.getName,
    payload: name,
  };
};
export const fetchDataAction = (data: any) => {
  return {
    type: ActionTypes.fetchData,
    payload: data,
  };
};
export const dataErrorAction = () => {
  return {
    type: ActionTypes.errorData,
    message: 'No data about this Country',
  };
};
