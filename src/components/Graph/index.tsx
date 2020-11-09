import React, { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LineChart, XAxis, Line, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IState } from '../../interfaces';
const { Body } = Card;

const Graph = () => {
  const { country } = useSelector((state: IState) => state.country);
  const lastWeek = country.slice(country.length - 7, country.length);
  const lastMonth = country.slice(country.length - 31, country.length);
  const lastYear = country.slice(country.length - 365, country.length);
  //const lastWeekDate = country.slice(country.length - 7, country.length);
  const weekBefore = country.slice(country.length - 14, country.length - 7);
  const monthBefore = country.slice(country.length - 14, country.length - 7);
  const yearBefore = country.slice(country.length - 730, country.length - 7);
  return (
    <Card>
      <Body style={{ height: '75vh' }}>
        <LineChart
          width={1000}
          height={500}
          data={[...lastWeek]}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" data={[...lastWeek]} dataKey="NewCases" stroke="#28a745" activeDot={{ r: 8 }} />
          <Line type="monotone" data={[...weekBefore]} dataKey="NewCases" stroke="#335ab1" strokeDasharray="5 5" />
        </LineChart>
      </Body>
    </Card>
  );
};

export default Graph;
