import "./index.css";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend,ResponsiveContainer } from "recharts";

const data = [
  { name: "28 Days", value: 95, color: "#2cc71e" },
  { name: "", value: 30, color: "#f7eceb" },
];
const style = {
  top: "75%",
  right: 0,
  left: 15,
  transform: "translate(0, -20%)",
  lineHeight: "14px",
};
const RADIAN = Math.PI / 180;

const cx = 120;
const cy = 100;
const iR = 60;
const oR = 80;
const value = 114;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3.8;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default class Rechart3 extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          startAngle={230}
          endAngle={-50}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#000000"
          stroke="none"
          // label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#000000")}
        <Legend
          iconSize={0}
          layout="horizontal"
          verticalAlign="middle"
          wrapperStyle={style}
        />
        </PieChart>
    </ResponsiveContainer>
    );
  }
}
