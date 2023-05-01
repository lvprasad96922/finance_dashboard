import { IoIosHome, IoIosInformationCircle,IoIosNotifications,IoIosSpeedometer,IoIosSettings} from "react-icons/io";
import { BsLink45Deg } from "react-icons/bs";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

const LeftSideMenupanel = () => {
  return (
  <div className="d-flex flex-column justify-content-center text-center left-pannel">
        <div className="pt-3 pb-3 icon-box text-center">
            <IoIosHome className="fs-2" />
        </div>
        <div className="mt-1  p-3">
            <IoIosInformationCircle className="fs-2 font-icon" />
        </div>
        <div className="mt-1 p-3">
            <IoIosNotifications className="fs-2 font-icon" />
        </div>
        <div className="mt-1  p-3">
            <IoIosSpeedometer className="fs-2 font-icon" />
        </div>
        <div className="mt-1 p-3">
            <BsLink45Deg className="fs-2 font-icon" />
        </div>
        <div className="mt-1 p-3">
            <IoIosSettings className="fs-2 font-icon" />
        </div>
        
  </div>
  );
};



export default LeftSideMenupanel;