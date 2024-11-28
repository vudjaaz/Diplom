import './FaqCard.scss';

const FaqCard = ({ cardData }) => {
  const { summary, text } = cardData;
  return (
    <details>
      <summary>{summary}</summary>
      {text}
    </details>
  )
}

export default FaqCard;