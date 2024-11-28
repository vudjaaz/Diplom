import LogoWhite from "assets/media/icons/header/logo_1.png";
import IconAddress from "assets/media/icons/header/header-address.svg";
import IconPhone from "assets/media/icons/header/header-phone.svg";
import IconTime from "assets/media/icons/header/header-time.svg";
import TelegramIcon from "assets/media/icons/header/telegram.svg";
import WhatsAppIcon from "assets/media/icons/header/whatsapp.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="header-content footer-content wrap">
        <Link to="/">
          <img src={LogoWhite} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={{ pathname: "/", hash: "#about" }}>Главная</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#catalog" }}>Каталог</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#services" }}>Услуги</Link>
            </li>
            <li>
              <Link to="/works">Работы</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq" }}>FAQ</Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#footer" }}>Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="wrap before-header footer-content">
        <div class="bheader-contact">
          <div class="bheader-content-elem">
            <img src={IconAddress} class="filter-white" alt="" />
            <a href="#">Россия, г.Тамбов, бульвар Энтузиастов, 1Ас1</a>
          </div>
          <div class="bheader-content-elem">
            <img src={IconPhone} class="filter-white" alt="" />
            <a href="#">+7 (4752) 75-58-00</a>
          </div>
          <div class="bheader-content-elem">
            <img src={IconTime} class="filter-white" alt="" />
            <a href="#">Пн-Пт: 9:00 - 18:00</a>
          </div>
        </div>
        <div class="bheader-buttons">
          <a href="#feedback" class="bheader-button">
            Оставить заявку
          </a>
          <a href="https://t.me">
            <img src={TelegramIcon} alt="" />
          </a>
          <a href="https://wa.me">
            <img src={WhatsAppIcon} alt="" />
          </a>
        </div>
      </div>
      <div class="wrap confidence">
        <p>Политика конфиденциальности</p>
        <p>GlassArt 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
