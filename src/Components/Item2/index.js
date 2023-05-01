import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Rechart1 from "../Rechart1";

const colorRed = "#e06960";
const data = [
  {
    name: "",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 150,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 250,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 1200,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "",
    uv: 900,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "",
    uv: 1300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "",
    uv: 300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 100,
    pv: 4800,
    amt: 2181,
  },
];

const Item2 = () => {
  return (
    <>
      <div className="content pt-4">
        <h5 className="m-0">Total Accounts Payable</h5>
        <h4 className="text-danger pt-1 m-0">$1,659,600</h4>
      </div>
      <Rechart1 colorgraph={colorRed} data={data} />
    </>
  );
};
export default Item2;
