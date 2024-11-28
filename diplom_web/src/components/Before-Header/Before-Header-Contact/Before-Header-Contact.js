import "./Before-Header-Contact.scss";
import BHeaderCElem from "./Before-Header-Contact-Elem/Before-Header-Contact-Elem";
import IconAddress from "assets/media/icons/header/header-address.svg";
import IconPhone from "assets/media/icons/header/header-phone.svg";
import IconTime from "assets/media/icons/header/header-time.svg";

const BHeaderContact = () => {
  return (
    <div className="bheader-contact">
      <BHeaderCElem
        imgPath={IconAddress}
        text="Россия, г. Тамбов, бульвар Энтузиастов, 1Ас1"
      />
      <BHeaderCElem imgPath={IconPhone} text="+7 (4752) 75-58-00" />
      <BHeaderCElem imgPath={IconTime} text="Пн-Пт: 9:00 - 18:00" />
    </div>
  );
};

export default BHeaderContact;
