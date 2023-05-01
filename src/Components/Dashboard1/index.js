import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Item1 from "../Item1";
import Item2 from "../Item2";
import Item3 from "../Item3";
import Item4 from "../Item4";
// import Item5 from "../Item5";
import Rechart21 from "../Rechart21";
import Rechart31 from "../Rechart31";
import Rechart32 from "../Rechart32";
import Rechart33 from "../Rechart33";
import Rechart34 from "../Rechart34";
import Item7 from "../Item7";
import Item8 from "../Item8";

const Dashboard1 = () => {
  return (
    <div className="dashboard-container">
      <div className="header bg-light">
        <h6 className="align-center">Financial Management</h6>
      </div>
      <div className="main-container">
        <div className="container-box-1 pt-2 pb-1">
          <div className="box-1 bg-light">
            <Item1 />
          </div>
          <div className="box-1 bg-light">
            <Item2 />
          </div>
          <div className="box-1 bg-light">
            <Item3 />
          </div>
          <div className="box-1 bg-light">
            <Item4 />
          </div>
          <div className="box-2 bg-light">
            <h6 className="p-1">Current Ratio</h6>
            <Rechart31 />
          </div>
          <div className="box-2 bg-light">
            <h6 className="p-1">DSI</h6>
            <Rechart32 />
          </div>
          <div className="box-2 bg-light">
            <h6 className="p-1">DSO</h6>
            <Rechart33 />
          </div>
          <div className="box-2 bg-light">
            <h6 className="p-1">DPO</h6>
            <Rechart34 />
          </div>
        </div>
        <div className="container-box-2">
          <div className="box-3 bg-light">
            <h6 className="p-2">Total Accounts Receivable and Payable Aging</h6>
            <Rechart21 />
          </div>
        </div>
        <div className="container-box-3">
          <div className="box-4 bg-light">
            <Item7 />
          </div>
        </div>
        <div className="container-box-3">
          <div className="box-4 bg-light">
            <Item8 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
