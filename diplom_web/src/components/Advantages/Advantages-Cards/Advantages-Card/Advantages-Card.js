import './Advantages-Card.scss';

const AdvantagesCard = ({ cardData }) => {
  const { imgPath, imgAlt, text } = cardData;
  return (
    <div class="advantages-card">
        <img src={imgPath} alt={imgAlt}/>
        <p>{text}</p>
      </div>
  )
}

export default AdvantagesCard;