import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Rechart1 from "../Rechart1";

const colorblue = "#8884d8";
const data = [
  {
    name: "",
    uv: 500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 300,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "",
    uv: 300,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "",
    uv: 1100,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "",
    uv: 1300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 400,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 1500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 300,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 0,
    pv: 4800,
    amt: 2181,
  },
];

const Item1 = () => {
  return (
    <>
      <div className="content pt-4">
        <h5 className="m-0">Total Accounts Receivable</h5>
        <h4 className="text-primary pt-1 m-0">$6,259,600</h4>
      </div>
      <Rechart1 colorgraph={colorblue} data={data} />
    </>
  );
};
export default Item1;
