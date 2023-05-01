import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const Rechart1 = (props) => {
  const { colorgraph, data } = props;
  return (
    <ResponsiveContainer width="100%" height="61%">
      <AreaChart
        width={255}
        height={120}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        // className="bg-light"
      >
        <Tooltip />
        <Area type="" dataKey="uv" stroke="#8884d8" fill={`${colorgraph}`} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default Rechart1;
