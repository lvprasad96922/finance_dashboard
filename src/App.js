import "./App.css";
import LeftSideMenupanel from "./Components/LeftSideMenupanel";
import Dashboard1 from "./Components/Dashboard1";
// import Rechart21  from "./Components/Rechart21";  
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="d-flex bg-light app">
      <LeftSideMenupanel />
      <Dashboard1 />
      {/* <Rechart21 /> */}
    </div>
  );
}

export default App;
