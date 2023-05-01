import React from "react";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.css';
import Item1 from "../Item1";
import Item2 from "../Item2";
import Item3 from "../Item3";
import Item4 from "../Item4";
import Item5 from "../Item5";
import Item6 from "../Item6";
import Item7 from "../Item7";
 

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <div className="header bg-light pt-2 pb-1">
        <h6 className="align-center">Financial Management</h6>
      </div>
      <div className="Main-container">
        <div className="container-1">
          <div className="recharts-container bg-light m-2">
            <Item1 />
          </div>
          <div className="recharts-container bg-light m-2">
            <Item2 />
          </div>
          <div className="recharts-container p-2">
            <Item3 />
          </div>
          <div className="recharts-container p-2">
            <Item4 />
          </div>
          <div className="recharts-container-2">
            <Item5 />
          </div>
          {/* <div className="recharts-container bg-light m-2">
            <Item6 />
          </div>
          <div className="recharts-container bg-light m-2">
            <Item6 />
          </div> */}
          {/* <div className="recharts-container-3 bg-light m-2">
            <Item6 />
          </div>
          <div className="recharts-container-3 bg-light m-2">
            <Item6 />
          </div>
          <div className="recharts-container-3 bg-light m-2">
            <Item6 />
          </div>
          <div className="recharts-container-3 bg-light m-2">
            <Item6 />
          </div> */}
          <div className="recharts-container-4 bg-light m-2">
            <Item7 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
