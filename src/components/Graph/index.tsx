import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LineChart, XAxis, Line, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IState } from '../../interfaces';
const { Body } = Card;

const Graph = ({ devision }: any) => {
  const { country } = useSelector((state: IState) => state.country);
  //format date
  const formatXAxis = (tickItem: any) => {
    tickItem = moment(tickItem).format('MMM Do YY');
    return tickItem;
  };
  const lastWeek = country.slice(country.length - 7, country.length);
  //const lastWeekDate = country.slice(country.length - 7, country.length);
  return (
    <Card>
      <Body style={{ height: '75vh' }}>
        <ResponsiveContainer width="100%" height="80%">
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
            <XAxis dataKey="Date" tickFormatter={formatXAxis} />
            <YAxis />
            <Tooltip labelFormatter={formatXAxis} />
            <Legend />
            <Line type="monotone" data={[...lastWeek]} dataKey="NewCases" stroke={devision >= 0 ? '#42b983' : '#dc3545'} activeDot={{ r: 6 }} strokeWidth={6} />
          </LineChart>
        </ResponsiveContainer>
      </Body>
    </Card>
  );
};

export default Graph;
