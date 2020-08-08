import React from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import Informations from '../Informations';
import Navigation from '../Navigation';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { ICountry } from '../../interfaces';
import moment from 'moment';
import './App.scss';
import { Container, Button } from 'react-bootstrap';
const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.country.error);
  const country = useSelector((state: any) => state.country.country);
  const { Country, Cases, Status, Date } = useSelector((state: any) => state.country.country || {});
  return (
    <div className="App p-5">
      <Container className="d-flex .align-items-around justify-content-center h-100">
        <div>
          <h1>Covid 19 INFO</h1>
          <Navigation />
          {error !== '' ? <Informations Error={Error} /> : error === '' && country === [] ? 'Vyberte krajinu' : <Informations Country={Country} Cases={Cases} Status={Status} Date={Date} Error={Error} />}
        </div>
      </Container>
    </div>
  );
};

export default App;
