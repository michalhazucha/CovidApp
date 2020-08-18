import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interfaces';
import { getCountries, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { Navbar, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.scss';

const Navigation = () => {
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const { countries } = useSelector((state: IState) => state.country);
  const countriesArray = countries.sort((a: String | any, b: String | any) => a.Country.localeCompare(b.Country));
  const [country, setCountry] = useState('');
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(countriesArray.filter((c: any) => c.Slug.includes(search.toLowerCase())));
  }, [search, countries]);

  const dispatch = useDispatch();
  const handleGetName = (e: any) => {
    dispatch(getNameAction(country));
  };
  const handleSetName = (e: any) => {
    setNameAction(e);
  };
  return (
    <Navbar variant="dark" className="bg-primary d-flex">
      <Navbar.Brand href="#home" className="d-flex">
        COVID 19 World Informations
      </Navbar.Brand>
      <div className="w-100 d-flex justify-content-center px-5">
        <Form inline className="justify-content-between">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onClick={handleSetName}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <DropdownButton alignRight title={country ? country : 'Vyber Krajinu'} id="dropdown-menu-align-right">
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
      </div>
    </Navbar>
  );
};
export default Navigation;
