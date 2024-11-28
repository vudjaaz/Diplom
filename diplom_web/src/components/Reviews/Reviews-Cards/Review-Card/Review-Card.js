import './Review-Card.scss';

const ReviewsCard = ({ cardData }) => {
  const { imgPath, text } = cardData;
  return (
    <div class="reviews-card">
      <img src={imgPath} alt="reviews"/>
      <p>{text}</p>
    </div>
  )
}

export default ReviewsCard;