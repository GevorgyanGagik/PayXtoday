import "./explore.scss";

const Explore = () => {
  return (
    <section className="explore container">
      <p className="title">Routes to explore more</p>
      <ul className="explore__desc">
        <li>
          <div className="explore__desc__img">
            <img
              src="https://payxtoday.com/images/payments.f.svg"
              alt="image"
            />
          </div>
          <p className="blue">Payments</p>
          <p>
            A unified interface allowing the way of accepting payments to be
            centralised, standardised, and streamlined.
          </p>
        </li>
        <li>
          <div className="explore__desc__img">
            <img src="https://payxtoday.com/images/routing.f.svg" alt="image" />
          </div>
          <p className="blue">Routing & Cascading</p>
          <p>
            An intelligent processing engine ensures the highest success rates
            for all your transactions.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Explore;
