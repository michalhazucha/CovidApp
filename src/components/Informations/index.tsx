import React, { useEffect } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
import './Informations.scss';
import { AppState } from '../../redux/reducers/rootReducer';
import { fetchDataAction, getNameAction, setNameAction } from '../../redux/actions/actionCreators/countryActionCreators';
import { ICountry } from '../../interfaces';
import moment from 'moment';

import { Container, Button } from 'react-bootstrap';
const Informations = ({ Country, Cases, Status, Date }: any) => {
  return (
    <Container className="m-3">
      {Country ? (
        <div>
          <span className="h3">Krajina:</span> <span className="h2 ">{Country}</span>
        </div>
      ) : (
        ''
      )}
      {Cases ? (
        <div>
          <span className="h3">Prípadov doteraz:</span> <span className="h2 text-danger">{Cases}</span>
        </div>
      ) : (
        ''
      )}
      {Status ? (
        <div>
          <span className="h3">Status:</span> <span className="h2 text-warning">{Status}</span>
        </div>
      ) : (
        ''
      )}
      {Date ? (
        <div>
          <span className="h2">Aktualizované:</span> <span className="h3">{moment(Date).format('DD MMM YYYY')}</span>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};
export default Informations;
