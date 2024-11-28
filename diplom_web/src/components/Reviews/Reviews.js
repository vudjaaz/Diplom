import './Reviews.scss'; 
import ReviewsCards from './Reviews-Cards/Reviews-Cards';

const Reviews = () => {
  return (
    <section class="reviews wrap">
      <h2 class="headers-h2">Отзывы клиентов</h2>
      <p class="reviews-subtitle">Вы можете отправить свой отзыв на почту: </p>
      <ReviewsCards/>
    </section>
  )
}

export default Reviews;