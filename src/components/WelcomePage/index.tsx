import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './welcomePage.scss';
const index = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col xs={12} className="h100 d-flex flex-column justify-content-start align-items-center px-xs-1 px-md-5 my-1">
          <h1 className="text-secondary hero-heading text-uppercase hero-cover__title">
            COVID <img alt="covid-19 logo" className="hero-cover__logo" src={require('../../assets/img/19.png')} /> World Information
          </h1>

          <div className=" hero-cover__text text-start pt-xs-2 pt-md-4">
            <p className="hero-cover__subtitle  text-center text-light bg-secondary p-2">Stránka na ktorej sa dozviete najčerstvejšie informácie o vývoji pandémie COVID-19 v krajinách celého sveta</p>
            <p className="text-secondary">
              Pre zistenie informácií o vývoji pandémie prosím <strong>vyberte svoju krajinu zo zoznamu krajín a stlačte tlačidlo search.</strong>
            </p>
            <p className="text-secondary">
              V prípade, že vidíte upozornenie v červenom rámčeku <strong>Chyba pripojenia k vzdialenému serveru </strong>, skúste to prosím neskôr.
            </p>
            <p className="text-secondary">
              Pre rýchlejšie nájdenie vami žiadaniej krajiny môžete <strong>zadať názov krajiny do vyhľadávača</strong>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
