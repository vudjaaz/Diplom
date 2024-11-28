import './Advantages-Cards.scss';
import AdvantagesCard from './Advantages-Card/Advantages-Card';
import IconDiscount from 'assets/media/icons/advantages/discount.svg';
import IconConsultant from 'assets/media/icons/advantages/consultant.svg';
import IconBill from 'assets/media/icons/advantages/bill.svg';
import IconBox from 'assets/media/icons/advantages/box.svg';
import IconDelivery from 'assets/media/icons/advantages/delivery.svg';

const AdvantagesCards = () => {
  const advCardsData = [
    {
      id: 1,
      imgPath: IconDiscount,
      imgAlt: "discount",
      text: "Лояльная скидочная система и регулярные акции",
    },
    {
      id: 2,
      imgPath: IconConsultant,
      imgAlt: "consultant",
      text: "Бесплатная консультация, вызов инженера и просчет цены",
    },
    {
      id: 3,
      imgPath: IconBill,
      imgAlt: "bill",
      text: "Гарантия на изделие до 3 лет и сервисное обслуживание 15 лет",
    },
    {
      id: 4,
      imgPath: IconBox,
      imgAlt: "box",
      text: "Работа с крупными и мелкими заказами",
    },
    {
      id: 5,
      imgPath: IconDelivery,
      imgAlt: "delivery",
      text: "Доставка по Москве и в регионы",
    }
  ];
  return (
    <div class="advantages-cards">
      {advCardsData.map(cardData => (
        <AdvantagesCard key={cardData.id} cardData={cardData} />
      ))}
    </div>
  )
}

export default AdvantagesCards;