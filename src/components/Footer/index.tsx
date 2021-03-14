import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';
const index = () => {
  return (
    <div className="footer sticky-bottom mw100 bg-light-blue">
      <Container className="d-flex flex-column align-items-center">
        <h3 className="text-light pt-3">Dodržiavajte zásady ROR</h3>
        <img className="footer-image" src={require('../../assets/img/r-o-r.png')} alt="Rúško odstup Ruky" />
      </Container>
    </div>
  );
};

export default index;
