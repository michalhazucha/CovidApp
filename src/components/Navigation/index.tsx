import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
const Navigation = () => {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const handleGetName = (e: any) => {
    dispatch(getNameAction(country));
  };
  const handleSetName = (e: any) => {
    setCountry(e);
    setNameAction(e);
  };
  return (
    <Navbar variant="dark" className="bg-primary">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onClick={handleSetName} />
        <DropdownButton alignRight title="Dropdown right" id="dropdown-menu-align-right">
          <Dropdown.Item eventKey="Slovakia" onSelect={handleSetName}>
            Slovensko
          </Dropdown.Item>
          <Dropdown.Item eventKey="Czech Republic" onSelect={handleSetName}>
            Česká republika
          </Dropdown.Item>
          <Dropdown.Item eventKey="Ukraine" onSelect={handleSetName}>
            Ukrajina
          </Dropdown.Item>
        </DropdownButton>
        <Button variant="light" onClick={handleGetName}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};
export default Navigation;
