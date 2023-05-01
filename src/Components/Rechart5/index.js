import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 500,

    uv: 500,
    amt: 200,
    loss: 0,
  },
  {
    name: "Feb",
    pv: 600,
    uv: 600,
    amt: 300,
    loss: -500,
  },
  {
    name: "Mar",
    pv: 530,
    uv: 540,
    amt: 200,
    loss: -600,
  },
  {
    name: "Apr",
    pv: 700,
    uv: 800,
    amt: 100,
    profit: 200,
  },
  {
    name: "May",
    pv: 750,
    uv: 850,
    amt: 150,
    profit: 210,
  },
  {
    name: "Jun",
    pv: 750,
    uv: 850,
    amt: 150,
    loss: -300,
  },
  {
    name: "Jul",
    pv: 790,
    uv: 880,
    amt: 180,
    profit: 170,
  },
  {
    name: "Aug",
    pv: 800,
    uv: 850,
    amt: 200,
    profit: 220,
  },
  {
    name: "Sep",
    pv: 900,
    uv: 910,
    amt: 150,
    profit: 280,
  },
  {
    name: "Oct",
    pv: 950,
    uv: 960,
    amt: 200,
    profit: 310,
  },
  {
    name: "Nov",
    pv: 900,
    uv: 910,
    amt: 150,
    profit: 380,
  },
  {
    name: "Dec",
    pv: 920,
    uv: 980,
    amt: 100,
    profit: 600,
  },
];

export default class Rechart5 extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/mixed-bar-chart-q4hgc";

  render() {
    return (
      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />

          <YAxis yAxisId="left" orientation="left" stroke="#050000">
            <Label
              value="Sales,COGGS,OE"
              offset={0}
              angle={270}
              position="left"
            />
          </YAxis>
          <YAxis yAxisId="right" orientation="right" stroke="#050000">
            <Label
              value="profit & Loss"
              offset={0}
              angle={90}
              position="right"
            />
          </YAxis>
          <Tooltip />
          <Bar yAxisId="left" dataKey="pv" stackId="a" fill="#3e4a96" />
          <Bar yAxisId="left" dataKey="uv" stackId="a" fill="#cfa417" />
          <Bar yAxisId="left" dataKey="amt" stackId="a" fill="#2cc71e" />
          <Bar yAxisId="right" dataKey="loss" fill="#db622a" />
          <Bar yAxisId="right" dataKey="profit" fill="#11034a" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
