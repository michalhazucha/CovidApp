import React, { useEffect } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import Informations from '../Informations';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { ICountry } from '../../interfaces';
import moment from 'moment';
import './App.scss';
import { Container, Button } from 'react-bootstrap';
const App = () => {
  const dispatch = useDispatch();
  const { Country, Cases, Status, Date } = useSelector((state: any) => state.country.country);
  const handleFetch = () => dispatch(getNameAction('Slovakia'));
  useEffect(() => {
    handleFetch();
  });
  return (
    <div className="App bg-dark text-light p-5">
      <Container className="d-flex .align-items-around justify-content-center h-100">
        <div>
          <h1>Covid 19 INFO</h1>
          <Informations Country={Country} Cases={Status} Status={Status} Date={Date} />
        </div>
      </Container>
    </div>
  );
};

export default App;
