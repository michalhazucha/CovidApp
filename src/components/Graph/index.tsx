import React, { Fragment, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LineChart, XAxis, Line, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { ResponsiveLine, Line } from '@nivo/line';
import { IState } from '../../interfaces';
const { Body } = Card;

const Graph = () => {
  const { country } = useSelector((state: IState) => state.country);
  const lastWeek = country.slice(country.length - 7, country.length);
  console.log(lastWeek);

  let data1: any = { x: '', y: '' };
  lastWeek.forEach((day: Object | any) => {
    if (day.NewCases && day.Date) {
      for (let k in lastWeek) {
        data1.x = day.NewCases;
      }
      for (let k in lastWeek) {
        data1.y = day.Date;
      }
    }
  });
  console.log(data1);
  const weekBefore = country.slice(country.length - 14, country.length - 7);
  const data2 = [...weekBefore];
  return (
    <Card>
      <Body style={{ height: '75vh' }}>
        <LineChart
          width={1000}
          height={500}
          data={lastWeek}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="Date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line type="monotone" yAxisId="right" data={data2} dataKey="NewCases" stroke="#82ca9d" />
          <Line type="monotone" yAxisId="left" data={data1} dataKey="NewCases" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </Body>
    </Card>
  );
};

export default Graph;
