import React from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Text,
  Tooltip
} from 'recharts';

const exampleData = [
  {
    _id: '601c8f40919ee790d86524f9',
    date_of_session: '2020-10-01',
    weight_added_in_kg: 10
  },
  {
    _id: '601c8f40919ee790d86524fb',
    date_of_session: '2020-12-01',
    weight_added_in_kg: 12
  },
  {
    _id: '601c8f40919ee790d86524fa',
    date_of_session: '2020-14-01',
    weight_added_in_kg: 14
  }
];
const Graph = ({ data }) => {
  return (
    <LineChart
      width={500}
      height={500}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="weight_added_in_kg" stroke="#000000" />
      <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
      <XAxis dataKey="date_of_session" stroke="#000000" />
      <YAxis label={<Text x={20}
      y={250} fontSize={20}
      
      
      angle={-90}
   >kg</Text>} stroke="#000000" />
      <Tooltip />
    </LineChart>
  );
};

export default Graph;
