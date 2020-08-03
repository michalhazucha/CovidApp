import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Navigation = ({ countryName }: any) => {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const handleGetName = () => {
    if (country !== null) {
      dispatch(setNameAction(country));
      dispatch(getNameAction(country));
    }
  };
  const handleSetName = (e: any) => {
    if (e.target.value !== undefined) {
      setCountry(e.target.value);
    }
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSetName} />
        <Button variant="outline-light" onClick={handleGetName}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;
