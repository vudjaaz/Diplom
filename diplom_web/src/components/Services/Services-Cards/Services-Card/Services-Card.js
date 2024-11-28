import './Services-Card.scss';

const ServicesCard = ({ cardData }) => {
  const { id, header, span, text }  = cardData;
  return (
    <div class="services-card">
        <p class="services-card-bg">{id}</p>
        <div class="services-card-content">
          <p>{id}</p>
          <div class="services-card-content-elem">
            <h3>{header}</h3>
            <span>{span}</span>
            <p>{text}</p>
          </div>
        </div>
      </div>
  )
}

export default ServicesCard;