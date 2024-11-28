import "./Faq.scss";
import FaqCard from "./FaqCard/FaqCard";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      summary: "Как узнать примерную стоимость конструкций?",
      text: "Оставьте заявку на сайте, после мы договоримся о бесплатном замере и расчёте стоимости работ.",
    },
    {
      id: 2,
      summary: "Вывозите ли вы за собой мусор?",
      text: "Да, мы вывозим весь строительный  мусор с объекта.",
    },
    {
      id: 3,
      summary: "Есть ли гарантия?",
      text: "Мы предоставляем 1 год бесплатного гарантийного обслуживания.",
    },
    {
      id: 4,
      summary: "В каких регионах работаете?",
      text: "Работаем в северо-западном федеральном округе, центральном федеральном округе, южном федеральном округе.",
    },
  ];
  return (
    <section class="faq wrap" id="faq">
      <h2 class="headers-h2">Часто задаваемые вопросы</h2>
      {faqData.map((cardData) => (
        <FaqCard key={cardData.id} cardData={cardData} />
      ))}
    </section>
  );
};

export default Faq;
