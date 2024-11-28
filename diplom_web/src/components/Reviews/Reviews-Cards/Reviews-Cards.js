import "./Reviews-Cards.scss";
import Plug1 from "assets/media/icons/reviews/img_woman.png";
import Plug2 from "assets/media/icons/reviews/img_man.jpg";
import ReviewsCard from "./Review-Card/Review-Card";

const ReviewsCards = () => {
  const revCardsData = [
    {
      id: 1,
      imgPath: Plug1,
      text: "Изящно-воздушные стеклянные конструкции.",
    },
    {
      id: 2,
      imgPath: Plug2,
      text: "Сделали все не подкопаешься, и сам профиль красивый, и стеклопакет отличный с энергосбережением, и фурнитура европейская.",
    },
    {
      id: 3,
      imgPath: Plug1,
      text: "Переживала за нестандартные проемы, но сделали все идеально в плане размеров.",
    },
    {
      id: 4,
      imgPath: Plug2,
      text: "Душевой кабиной доволен, не жалею, что именно в GlassArt заказал.",
    },
  ];
  return (
    <div class="reviews-cards">
      {revCardsData.map((cardData) => (
        <ReviewsCard key={cardData.id} cardData={cardData} />
      ))}
    </div>
  );
};

export default ReviewsCards;
