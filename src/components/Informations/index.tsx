import React, { useEffect } from 'react';
import './Informations.scss';
import { ICountry } from '../../interfaces';
import moment from 'moment';

import { Container, Button, Card } from 'react-bootstrap';
const { Body, Title, Text } = Card;
const Informations = ({ Country, Cases, Status, Date }: any) => {
  return (
    <Container className="m-3 d-flex flex-row">
      {Country ? (
        <Card className="bg-dark">
          <Body>
            <Title>Krajina:</Title> <Text className="h2 ">{Country}</Text>
          </Body>
        </Card>
      ) : (
        ''
      )}
      {Cases ? (
        <Card className="bg-dark">
          <Body>
            <Title className="h3">Prípadov doteraz:</Title> <Text className="h2 text-danger">{Cases}</Text>
          </Body>
        </Card>
      ) : (
        ''
      )}
      {Status ? (
        <Card className="bg-dark">
          <Body>
            <Title className="h3">Status:</Title> <Text className="h2 text-warning">{Status}</Text>
          </Body>
        </Card>
      ) : (
        ''
      )}
      {Date ? (
        <Card className="bg-dark">
          <Body>
            <Title className="h2">Aktualizované:</Title> <Text className="h3">{moment(Date).format('DD MMM YYYY')}</Text>
          </Body>
        </Card>
      ) : (
        ''
      )}
    </Container>
  );
};
export default Informations;
