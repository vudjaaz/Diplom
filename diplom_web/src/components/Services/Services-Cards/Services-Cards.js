import './Services-Cards.scss';
import { Link } from 'react-router-dom';
import ServicesCard from './Services-Card/Services-Card';

const ServicesCards = () => {
  const servCardsData = [
    {
      id: 2,
      header: "ПРЕДВАРИТЕЛЬНЫЙ РАСЧЕТ",
      span: "",
      text: "БЕСПЛАТНО ПОДГОТОВИМ ПРЕДВАРИТЕЛЬНЫЙ РАСЧЕТ",
    },
    {
      id: 3,
      header: "ВЫЕЗД ИНЖЕНЕРА",
      span: "1 ДЕНЬ",
      text: "БЕСПЛАТНО НАПРАВИМ ИНЖЕНЕРА НА ОБЪЕКТ",
    },
    {
      id: 4,
      header: "ОКОНЧАТЕЛЬНЫЙ РАСЧЕТ И ДОГОВОР",
      span: "",
      text: "ПОДПИСАНИЕ ДОГОВОРА, ВНЕСЕНИЕ ПРЕДОПЛАТЫ",
    },
    {
      id: 5,
      header: "ДОСТАВКА И МОНТАЖ",
      span: "1 ДЕНЬ",
      text: "ИЗГОТОВЛЕНИЕ, ДОСТАВКА И МОНТАЖНЫЕ РАБОТЫ",
    },
    {
      id: 6 ,
      header: "ПОДПИСАНИЕ АКТОВ",
      span: "",
      text: "ПРИЕМКА ВЫПОЛНЕННЫХ РАБОТ",
    },
  ]
  return (
    <div class="services-cards">
      <div class="services-card">
        <p class="services-card-bg">1</p>
        <div class="services-card-content">
          <p>1</p>
          <div class="services-card-content-elem">
            <h3>ВАША ЗАЯВКА</h3>
            <div class="services-button">
              <Link to="/#feedback">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </div>
      {servCardsData.map(cardData => (
        <ServicesCard key={cardData.id} cardData={cardData} />
      ))}
    </div>
  )
}

export default ServicesCards;