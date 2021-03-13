import React from 'react';
import { useSelector } from 'react-redux';
import InfoCard from '../InfoCard';
import Informations from '../Informations';
import Navigation from '../Navigation';
import Graph from '../Graph';
import './App.scss';
import { Container } from 'react-bootstrap';
import { IState } from '../../interfaces';
import { getCountries } from '../../redux/actions/actionCreators/countryActionCreators';
const App = () => {
  const { error } = useSelector((state: IState) => state.country);
  const { country } = useSelector((state: IState) => state.country);
  const { countries } = useSelector((state: IState) => state.country);
  /*math logic*/
  const liveData = country.length - 1;
  const dayBefore = country.length - 2;
  const countryData = country[liveData];
  const yesterday = country[dayBefore];
  const newCases = country.map((c: any) => c.NewCases);
  const division = newCases[dayBefore] - newCases[liveData];
  if (newCases[liveData] > newCases[dayBefore]) {
    console.log('more');
  } else {
    console.log('less');
  }
  const { Country, TotalCases, NewCases, Status, Date } = useSelector((state: any) => countryData || {});
  console.log(division);
  return (
    <div className="App">
      <Navigation />
      <Container>
        {error !== '' ? <Informations Error={Error} /> : error === '' && country === [] ? 'Vyberte krajinu' : <Informations Country={Country} TotalCases={TotalCases} NewCases={NewCases} Division={division} Status={Status} Date={Date} />}
        {error === '' ? (
          <div>
            <Informations Error={Error} />
          </div>
        ) : (
          ''
        )}
      </Container>
    </div>
  );
};

export default App;
