import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IState } from '../../interfaces';
const { Body } = Card;

const Graph = () => {
  const { country } = useSelector((state: IState) => state.country);
  const lastWeek = country.slice(country.length - 8, country.length - 1);
  const weekBefore = country.slice(country.length - 15, country.length - 1);
  return (
    <Card>
      <Body>
        <LineChart
          width={800}
          height={500}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="NewCases" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" data={lastWeek} dataKey="NewCases" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" data={weekBefore} dataKey="NewCases" stroke="#82ca9d" />
        </LineChart>
      </Body>
    </Card>
  );
};

export default Graph;
