import "./Feedback.scss";

const Feedback = () => {
  return (
    <section class="feedback" id="feedback">
      <div class="wrap">
        <h2 class="headers-h2">Оставить заявку</h2>
        <div class="feedback-content">
          <div class="feedback-content-col">
            <p>
              Компания "GlassArt" - современные стеклянные и зеркальные
              конструкции, а также индивидуальный подход к каждому Клиенту.
            </p>
            <input type="checkbox" id="" name="" checked />
            <label for="">Разрешаю обработку персональных данных</label>
          </div>
          <div class="feedback-content-col">
            <form>
              <input type="text" placeholder="Ваше имя*" required />
              <input type="text" placeholder="Ваш телефон*" required />
              <input type="email" placeholder="Адрес эл. почты" />
              <input type="submit" value="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
