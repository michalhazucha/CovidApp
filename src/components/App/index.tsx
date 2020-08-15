import React from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import Informations from '../Informations';
import Navigation from '../Navigation';
import './App.scss';
import { Container } from 'react-bootstrap';
const App = () => {
  const error = useSelector((state: any) => state.country.error);
  const country = useSelector((state: any) => state.country.country);
  const { Country, TotalCases, NewCases, Status, Date } = useSelector((state: any) => state.country.country || {});
  return (
    <div className="App">
      <Navigation />
      <Container> {error !== '' ? <Informations Error={Error} /> : error === '' && country === [] ? 'Vyberte krajinu' : <Informations Country={Country} TotalCases={TotalCases} NewCases={NewCases} Status={Status} Date={Date} Error={Error} />}</Container>
    </div>
  );
};

export default App;
