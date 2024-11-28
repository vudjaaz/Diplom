import "./Before-Header.scss";
import BHeaderContact from './Before-Header-Contact/Before-Header-Contact';
import BHeaderButtons from "./Before-Header-Buttons/Before-Header-Buttons";

const BeforeHeader = () => {
  return (
  <div className="wrap before-header">
    <BHeaderContact/>
    <BHeaderButtons/>
  </div>

  )
}

export default BeforeHeader;