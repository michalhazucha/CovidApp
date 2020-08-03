import React from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import './App.scss';
import { AppState } from '../../redux/reducers/rootReducer';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { ICountry } from '../../interfaces';
import moment from 'moment';

import { Container, Button } from 'react-bootstrap';
const App = () => {
  const dispatch = useDispatch();
  const { Country, CountryCode, Province, City, CityCode, Lat, Lon, Cases, Status, Date } = useSelector((state: any) => state.country.country);
  const handleFetch = () => dispatch(getNameAction('Slovakia'));
  return (
    <div className="App bg-dark text-light p-3">
      <Button onClick={handleFetch} className="btn-primary lg">
        handleFetch
      </Button>
      <Container>
        {Country ? <h1>Country:{Country}</h1> : ''}
        {Cases ? <h1>Cases:{Cases}</h1> : ''}
        {Status ? <h1>Status:{Status}</h1> : ''}
        {Date ? <h1>Date:{moment(Date).format('DD MMM YYYY')}</h1> : ''}
      </Container>
    </div>
  );
};

export default App;
