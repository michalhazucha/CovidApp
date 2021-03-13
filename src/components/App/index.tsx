import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import InfoCard from '../InfoCard';
import Informations from '../Informations';
import Navigation from '../Navigation';
import WelcomePage from '../WelcomePage';
import Graph from '../Graph';
import './App.scss';
import { Container } from 'react-bootstrap';
import { IState } from '../../interfaces';
import { getCountries } from '../../redux/actions/actionCreators/countryActionCreators';
const App = () => {
  const { error } = useSelector((state: IState) => state.country);
  const { country } = useSelector((state: IState) => state.country);
  const { name } = useSelector((state: IState) => state.country);
  console.log(country);
  /*math logic*/
  const liveData = country.length - 1;
  const dayBefore = country.length - 2;
  const countryData = country[liveData];
  const yesterday = country[dayBefore];
  const newCases = country.map((c: any) => c.NewCases);
  const division = newCases[dayBefore] - newCases[liveData];

  const { Country, TotalCases, NewCases, Status, Date } = useSelector((state: any) => countryData || {});
  console.log(`country:${country.length}\nname:${name}`);
  return (
    <div className="App">
      <Navigation />
      <Container>
        {country.length === 0 && name !== '' ? (
          <Informations Error={Error} />
        ) : error === '' && country === [] ? (
          'Vyberte krajinu'
        ) : country.length > 0 && name !== '' ? (
          <Fragment>
            <Informations Country={Country} TotalCases={TotalCases} NewCases={NewCases} Division={division} Status={Status} Date={Date} />
            <Graph devision={division} />
          </Fragment>
        ) : (
          <WelcomePage />
        )}
      </Container>
    </div>
  );
};

export default App;
