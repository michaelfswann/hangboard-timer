import React from 'react';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
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
      width={250}
      height={150}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="weight_added_in_kg" stroke="#000000" />
      <CartesianGrid stroke="#ffffff" />
      <XAxis dataKey="date_of_session" stroke="#000000" />
      <YAxis label="(kg)" stroke="#000000" />
      <Tooltip />
    </LineChart>
  );
};

export default Graph;
