import React from 'react';
import './Informations.scss';
import { ICountry } from '../../interfaces';
import InfoCard from '../InfoCard';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
const { Body, Title, Text } = Card;
const Informations = ({ Country, Cases, Status, Date }: any) => {
  return (
    <Container className="m-3 d-flex">
      {Country && Cases && Status && Date ? (
        <Row>
          <Col>
            <InfoCard Heading="Krajina" Content={Country} />
          </Col>
          <Col>
            <InfoCard Heading="Prípadov Doteraz" Content={Cases} />
          </Col>
          <Col>
            <InfoCard Heading="Status" Content={Status} />
          </Col>
          <Col>
            <InfoCard Heading="Aktualizované" Date={Date} />
          </Col>
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};
export default Informations;
