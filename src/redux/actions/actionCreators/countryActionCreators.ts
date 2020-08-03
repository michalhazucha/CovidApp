import { ActionTypes } from '../types';
import { ICountry } from '../../../interfaces';
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