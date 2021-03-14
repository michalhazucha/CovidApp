import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interfaces';
import { getCountries, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { Container, Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const { error } = useSelector((state: IState) => state.country);
  const { countries } = useSelector((state: IState) => state.country);
  const countriesArray = countries.sort((a: String | any, b: String | any) => a.Country.localeCompare(b.Country));
  const [country, setCountry] = useState('');
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(countriesArray.filter((c: any) => c.Slug.includes(search.toLowerCase())));
  }, [search, countries]);

  const handleGetName = (e: any) => {
    dispatch(getNameAction(country));
  };
  const handleSetName = (e: any) => {
    setNameAction(e);
  };
  return (
    <Navbar variant="dark" expand="lg" className="bg-primary d-flex justify-content-between navbar sticky-top">
      {' '}
      <Container>
        <Navbar.Brand href="#home" className="p-2">
          <strong>
            COVID <img className="navbar__logo" alt="covid-19 logo" src={require('../../assets/img/19.png')} /> World Informations
          </strong>
        </Navbar.Brand>
        {error === 'Countries fetch failed' ? (
          <div className=" btn-lg  btn-danger">Chyba pripojenia k vzdialenému serveru! Skúste to prosím neskôr</div>
        ) : (
          <Form inline className=" p-2 justify-content-between">
            <FormControl
              type="text"
              placeholder="Zadajte Meno Krajiny"
              className=" mx-3 searchbar"
              onClick={handleSetName}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <DropdownButton alignRight title={country ? country : 'Vyber Krajinu'} id="dropdown-menu-align-right" className="mx-3">
              {filteredCountries.map((c: any) => (
                <Dropdown.Item
                  eventKey={c.Slug}
                  onSelect={handleSetName}
                  onClick={() => {
                    setCountry(c.Country);
                  }}
                >
                  {c.Country}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <Button variant="light" onClick={handleGetName}>
              Search
            </Button>
          </Form>
        )}
      </Container>
    </Navbar>
  );
};
export default Navigation;
