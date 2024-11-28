import "./Before-Header-Buttons.scss";
import TelegramIcon from "assets/media/icons/header/telegram.svg";
import WhatsAppIcon from "assets/media/icons/header/whatsapp.svg";
import { Link } from "react-router-dom";

const BHeaderButtons = () => {
  return (
    <div className="bheader-buttons">
      <Link to="/#feedback" className="bheader-button">
        Оставить заявку
      </Link>
      <a href="https://t.me">
        <img src={TelegramIcon} alt="" />
      </a>
      <a href="https://wa.me">
        <img src={WhatsAppIcon} alt="" />
      </a>
    </div>
  );
};

export default BHeaderButtons;
