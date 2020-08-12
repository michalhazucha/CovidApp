import React from 'react';
import './Informations.scss';
import { ICountry } from '../../interfaces';
import InfoCard from '../InfoCard';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
const { Body, Title, Text } = Card;
const Informations = (props: ICountry | any) => {
  return (
    <Container className="m-3 d-flex">
      {props.Country || props.TotalCases || props.Status || props.Date ? (
        <Row>
          {props.Country || {} ? (
            <Col>
              <InfoCard Heading="Krajina" Content={props.Country} />
            </Col>
          ) : (
            ''
          )}
          {props.TotalCases || {} ? (
            <Col>
              <InfoCard Heading="Prípadov Doteraz" Content={props.TotalCases} />
            </Col>
          ) : (
            'Hello'
          )}
          {props.NewCases || {} ? (
            <Col>
              <InfoCard Heading="Nových Prípadov" Content={props.NewCases} />
            </Col>
          ) : (
            ''
          )}
          {props.Date || {} ? (
            <Col>
              <InfoCard Heading="Aktualizované" Date={props.Date} />
            </Col>
          ) : (
            ''
          )}
        </Row>
      ) : (
        <Row>There is an Error Here </Row>
      )}
    </Container>
  );
};
export default Informations;
