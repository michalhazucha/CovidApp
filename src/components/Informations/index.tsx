import React from 'react';
import './Informations.scss';
import { ICountry } from '../../interfaces';
import InfoCard from '../InfoCard';
import { Container, Row, Col } from 'react-bootstrap';
const Informations = (props: ICountry | any) => {
  return (
    <Container className="m-3 d-flex">
      {props.Country || props.TotalCases || props.NewCases || props.Division || props.Status || props.Date ? (
        <Row className="w-100">
          {props.Country ? (
            <Col>
              <InfoCard Heading="Krajina" Content={props.Country} />
            </Col>
          ) : (
            ''
          )}
          {props.TotalCases || {} ? (
            <Col xs={12} sm={6} md={3}>
              <InfoCard Heading="Prípadov Doteraz" Content={props.TotalCases} />
            </Col>
          ) : (
            'Hello'
          )}
          {props.NewCases || props.Division || {} ? (
            <Col xs={12} sm={6} md={3}>
              <InfoCard Heading="Nových Prípadov" Content={props.NewCases} AlternativeData={props.Division} />
            </Col>
          ) : (
            ''
          )}
          {props.Date || {} ? (
            <Col xs={12} sm={6} md={3}>
              <InfoCard Heading="Aktualizované" Date={props.Date} />
            </Col>
          ) : (
            ''
          )}
        </Row>
      ) : (
        <Row>
          <Col>
            <Container className="text-center">
              {props.Error ? (
                <Col>
                  <InfoCard Heading="Oops Chyba" Content="O tejto krajine nemáme bohužiaľ žiadne informácie" />
                </Col>
              ) : (
                ''
              )}
            </Container>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Informations;
