import "./index.css";
import React, { PureComponent } from "react";
import {
  Label,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Current",
    "Accounts Recievable": 50000,
    "Accounts Payable": 20000,
    amt: 0.5,
  },
  {
    name: "1-30",
    "Accounts Recievable": 40000,
    "Accounts Payable": 2000,
    amt: 2210,
  },
  {
    name: "31-60",
    "Accounts Recievable": 20000,
    "Accounts Payable": 2500,
    amt: 2290,
  },
  {
    name: "61-90",
    "Accounts Recievable": 16000,
    "Accounts Payable": 1500,
    amt: 2000,
  },
  {
    name: "91+",
    "Accounts Recievable": 10000,
    "Accounts Payable": 1000,
    amt: 2181,
  },
];

class Rechart21 extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="95%" height="85%">
        <BarChart
          width={450}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name">
            <Label value="Due date" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend
            wrapperStyle={{
              bottom: -2,
              right: -25,
              backgroundColor: "transparent",
              border: "0px solid transparent",
              lineHeight: "50px",
            }}
          />
          <Bar dataKey="Accounts Recievable" fill="#3e4a96">
            <LabelList position="top" />
          </Bar>

          <Bar dataKey="Accounts Payable" fill="#db622a">
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default Rechart21;