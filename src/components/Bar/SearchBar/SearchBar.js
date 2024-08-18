import SvgIcon1 from "./icons/SvgIcon1";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="info-card">
      <SvgIcon1 className="svg-icon" />
      <p className="info-text">Condition, procedure, speciality...</p>
    </div>
  );
}

export default SearchBar;
