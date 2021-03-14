import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import moment from 'moment';
const { Body, Title, Text } = Card;
const InfoCard = ({ Heading, Content, Date, AlternativeData }: any) => {
  return (
    <Card>
      <Body>
        <Title className="h3">{Heading}</Title>
        {Date ? <Text className="h2 text-dark">{moment(Date).format('DD MMM YYYY')}</Text> : <Text className="h2 text-dark">{Content}</Text>}
        {AlternativeData ? (
          AlternativeData! < 0 ? (
            <h4 className="text-danger">
              <FontAwesomeIcon icon={faLongArrowAltUp} /> {String(AlternativeData).replace('-', '')}
            </h4>
          ) : (
            <h4 className="text-success">
              <FontAwesomeIcon icon={faLongArrowAltDown} /> {AlternativeData}
            </h4>
          )
        ) : (
          ''
        )}
      </Body>
    </Card>
  );
};

export default InfoCard;
