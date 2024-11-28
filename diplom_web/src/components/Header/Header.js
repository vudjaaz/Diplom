import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "components/Header/Header.scss";
import Logo from "assets/media/icons/header/logo_1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="header-content wrap">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <button className="close-menu" onClick={closeMenu}>
            ✕
          </button>
          <ul>
            <li>
              <Link to={{ pathname: "/", hash: "#about" }} onClick={closeMenu}>
                Главная
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#catalog" }}
                onClick={closeMenu}
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#services" }}
                onClick={closeMenu}
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/works" onClick={closeMenu}>
                Работы
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#faq" }} onClick={closeMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#footer" }} onClick={closeMenu}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={menuOpen ? "overlay open" : "overlay"}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;
