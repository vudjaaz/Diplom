import "./Catalog-Cards.scss";
import { Link } from "react-router-dom";
import CatalogCard from "./Catalog-Card/Catalog-Card";

const CatalogCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Стеклянные двери",
      textTime: "от 6 дней",
      textPrice: "от 4 780 руб/м2",
    },
    {
      id: 2,
      title: "Стеклянные перегородки",
      textTime: "от 6 дней",
      textPrice: "от 2 400 руб/м2",
    },
    {
      id: 3,
      title: "Стеклянные ограждения",
      textTime: "от 8 дней",
      textPrice: "от 3 800 руб/м2",
    },
    {
      id: 4,
      title: "Душевые кабины",
      textTime: "от 5 дней",
      textPrice: "от 14 830 руб/м2",
    },
    {
      id: 5,
      title: "Безрамное остекление",
      textTime: "от 10 дней",
      textPrice: "от 12 300 руб/м2",
    },
    {
      id: 6,
      title: "Зеркала и панно",
      textTime: "от 4 дней",
      textPrice: "от 2 600 руб/м2",
    },
    {
      id: 7,
      title: "Стеклянные конструкции",
      textTime: "от 10 дней",
      textPrice: "от 7 700 руб/м2",
    },
  ];
  return (
    <div class="catalog-cards">
      {cardsData.map((cardData) => (
        <CatalogCard key={cardData.id} cardData={cardData} />
      ))}
      <div class="catalog-card" id="catalog-button">
        <Link to="/#feedback" class="button">
          Оставить заявку
        </Link>
      </div>
    </div>
  );
};

export default CatalogCards;
