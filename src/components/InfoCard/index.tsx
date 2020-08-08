import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import moment, { MomentInput } from 'moment';
const { Body, Title, Text } = Card;
const InfoCard = ({ Heading, Content, Date }: any) => {
  return (
    <Card>
      <Body>
        <Title className="h3">{Heading}</Title>
        {Date ? <Text className="h2 text-dark">{moment(Date).format('DD MMM YYYY')}</Text> : <Text className="h2 text-dark">{Content}</Text>}
      </Body>
    </Card>
  );
};

export default InfoCard;
