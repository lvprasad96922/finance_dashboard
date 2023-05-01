import "./index.css";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Jan",
    "Net Working Capital": 7.9,
    "Gross Working Capital": 7.9,
    amt: 2400,
  },
  {
    name: "Feb",
    "Net Working Capital": 18,
    "Gross Working Capital": 18,
    amt: 2400,
  },
  {
    name: "Mar",
    "Net Working Capital": 248.7,
    "Gross Working Capital": 136.36,
    amt: 2400,
  },
  {
    name: "Apr",
    "Net Working Capital": 226.12,
    "Gross Working Capital": 220.26,
    amt: 2400,
  },
  {
    name: "May",
    "Net Working Capital": 203.36,
    "Gross Working Capital": -107,
    amt: 2400,
  },
  {
    name: "Jun",
    "Net Working Capital": 199.56,
    "Gross Working Capital": -18.29,
    amt: 2400,
  },
  {
    name: "Jul",
    "Net Working Capital": 305.79,
    "Gross Working Capital": -31.15,
    amt: 2400,
  },
  {
    name: "Aug",
    "Net Working Capital": 560.98,
    "Gross Working Capital": 470.55,
    amt: 2400,
  },
  {
    name: "Sep",
    "Net Working Capital": 93.02,
    "Gross Working Capital": -13.77,
    amt: 2400,
  },
  {
    name: "Oct",
    "Net Working Capital": 323.38,
    "Gross Working Capital": 320.37,
    amt: 2400,
  },
  {
    name: "Nov",
    "Net Working Capital": 237.38,
    "Gross Working Capital": 166.67,
    amt: 2400,
  },
  {
    name: "Dec",
    "Net Working Capital": 0,
    "Gross Working Capital": -48,
    amt: 2400,
  },
];

export default class Rechart4 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 50,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="" dataKey="Net Working Capital" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="" dataKey="Gross Working Capital" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}