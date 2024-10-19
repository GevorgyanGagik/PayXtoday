import ok from "../../../images/ok_icon.png";
import "./poverful.scss";

const Poverful = () => {
  return (
    <section className="poverful container">
      <div className="poverful__desc">
        <p className="title">Powerful toolkit for fraud prevention</p>
        <p>
          Our ready-made anti-fraud solutions provide you with additional
          security layer and help you target specific fraud issues and risks
          more effectively.
        </p>
        <ul className="poverful__desc__list">
          <li>
            <img src={ok} alt="image" />
            Blocking rule engine
            <span className="poverful__list__i">
              i
              <p>
                Automatically cut off suspicious or undesirable traffic using
                Blocking schemes with configurable dynamic rules.
              </p>
            </span>
          </li>
          <li>
            <img src={ok} alt="image" />
            Smart 3DS routing
            <span className="poverful__list__i">
              i
              <p>
                After several failed attempts to complete a transaction, a payer
                can be added to the blacklist automatically.
              </p>
            </span>
          </li>
          <li>
            <img src={ok} alt="image" />
            Smart blacklisting
            <span className="poverful__list__i">
              i
              <p>
                Enable or disable 3DS when needed, or apply it selectively for
                transactions filtered by relevant parameter.
              </p>
            </span>
          </li>
          <li>
            <img src={ok} alt="image" />
            Third-party risk scoring
            <span className="poverful__list__i">
              i
              <p>
                Connect your trusted anti-fraud and risk scoring systems, like
                Kount, MaxMind or Ravelin, for an extra layer of protection.
              </p>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Poverful;
