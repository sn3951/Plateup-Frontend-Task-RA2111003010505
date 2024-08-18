import { Button } from "@mui/base";
import SearchBar from "./SearchBar/SearchBar";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./Bar.css";

function Bar() {
    return (
      <div className="container1">
        <div className="filter-bar1">
          <SearchBar />
          <div className="input-group">
            <SvgIcon1 className="icon1" />
            <p className="location-text">City, state, or zipcode</p>
          </div>
          <div className="insurance-container">
            <SvgIcon2 className="icon1" />
            <p className="insurance-label">Insurance carrier</p>
          </div>
          <Button className="button">
            <SvgIcon3 className="icon2" />
            Find now
          </Button>
        </div>
      </div>
    );
  }
  
  export default Bar;