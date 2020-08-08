import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, fetchCountriesAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './Navbar.scss';

const Navigation = () => {
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const countries = useSelector((state: any) => state.country.countries);
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const handleGetName = (e: any) => {
    dispatch(getNameAction(country));
  };
  const handleSetName = (e: any) => {
    setNameAction(e);
  };
  /** *TODO
   * Detailed info fetch
   * Graphs
   */
  countries.sort((a: String | any, b: String | any) => a.Country.localeCompare(b.Country));
  return (
    <Navbar variant="dark" className="bg-primary">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={handleSetName} />
        <DropdownButton alignRight title={country ? country : 'Vyber Krajinu'} id="dropdown-menu-align-right">
          {countries.map((c: any) => (
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
    </Navbar>
  );
};
export default Navigation;
