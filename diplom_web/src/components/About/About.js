import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>GlassArt</h2>
        <ul>
          <li>Проектирование, изготовление и установка</li>
          <li>Европейское стекло и комплектующие</li>
          <li>Срок службы нашего стекла - 50 лет</li>
          <li>Гарантия качества и сервисное обслуживание</li>
        </ul>
        <Link to="/#feedback">Оставить заявку</Link>
      </div>
    </section>
  );
};

export default About;
