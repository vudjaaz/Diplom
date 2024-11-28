import "./Catalog-Card.scss";
import CatalogCardDesc from "./Catalog-Card-Desc/Catalog-Card-Desc";
import ImgPlug1 from "assets/media/images/img5.jpg";

const CatalogCard = ({ cardData }) => {
  const { title } = cardData;
  return (
    <div className="catalog-card">
      <img src={ImgPlug1} alt="img1" />
      <h3>{title}</h3>
      <CatalogCardDesc cardData={cardData} />
    </div>
  );
};

export default CatalogCard;
