import React from 'react';
import './Informations.scss';
import { ICountry } from '../../interfaces';
import InfoCard from '../InfoCard';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
const { Body, Title, Text } = Card;
const Informations = (props: any) => {
  return (
    <Container className="m-3 d-flex">
      {props.Country || props.Cases || props.Status || props.Date ? (
        <Row>
          {props.Country || {} ? (
            <Col>
              <InfoCard Heading="Krajina" Content={props.Country} />
            </Col>
          ) : (
            ''
          )}
          {props.Cases || {} ? (
            <Col>
              <InfoCard Heading="Prípadov Doteraz" Content={props.Cases} />
            </Col>
          ) : (
            ''
          )}
          {props.Status || {} ? (
            <Col>
              <InfoCard Heading="Status" Content={props.Status} />
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
