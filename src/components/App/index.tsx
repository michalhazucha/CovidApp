import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Informations from '../Informations';
import Navigation from '../Navigation';
import WelcomePage from '../WelcomePage';
import Footer from '../Footer';
import Graph from '../Graph';
import './App.scss';
import { Container } from 'react-bootstrap';
import { IState } from '../../interfaces';
const App = () => {
  const { error } = useSelector((state: IState) => state.country);
  const { country } = useSelector((state: IState) => state.country);
  const { name } = useSelector((state: IState) => state.country);
  console.log(country);
  /*math logic*/
  const liveData = country.length - 1;
  const dayBefore = country.length - 2;
  const countryData = country[liveData];
  const newCases = country.map((c: any) => c.NewCases);
  const division = newCases[dayBefore] - newCases[liveData];

  const { Country, TotalCases, NewCases, Status, Date } = useSelector((state: any) => countryData || {});
  console.log(`country:${country.length}\nname:${name}`);
  return (
    <div className="App h100">
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
      <Footer />
    </div>
  );
};

export default App;
