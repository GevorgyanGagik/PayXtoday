import AOS from "aos";
import "aos/dist/aos.css";
import "./fullSecure.scss";

const FullSecure = () => {
  AOS.init();

  return (
    <section className="full__secure container">
      <div className="full__secure__top__desc">
        <div className="full__secure__anim" data-aos="fade-left">
          <div className="full__secure__anim__circle">
            3DS
            <span>v1</span>
          </div>
        </div>
        <div className="full__secure__desc">
          <p className="title">Full 3D Secure support</p>
          <p className="opacity" data-aos="fade-left">
            3D Secure is an authentication protocol that provides an additional
            layer of verification for card-not-present transactions. The
            protocol is compliant with authentication regulations, including the
            span Customer Authentication (SCA) mandate from PSD2.
          </p>
          <ul className="full__secure__desc__list">
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Support for both 3D Secure 1 & 2</p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Keep your transactions SCA-compliant</p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Shift chargeback liability</p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Lift authorisation rates</p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Take advantage of exemptions</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="full__secure__second">
        <div className="full__secure__second__desc">
          <p className="title">Card vault & Tokenisation</p>
          <div className="opacity">
            Enjoy safe transactions and tokenised data without any additional
            fees. Accept payments with or without PCI compliance thanks to our
            tokenisation technology, which always keeps your customers’ data
            secure {""}
            <span className="green">
              and enables you to focus on your business.
            </span>
          </div>
          <p className="sec__p">
            Our powerful API gives you a huge flexibility to create payment
            scenarios that best fit your business needs.
          </p>
          <ul className="full__secure__desc__list">
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>
                Charge one card multiple times, without asking a customer to
                re-enter the details
              </p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>
                Make a free of charge authorisation to block funds on the
                customer’s card to have time for customer verification using our
                fraud score
              </p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>Offer one-click payments to simplify the purchasing flow</p>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="ok__image"
              />
              <p>
                Create charges, subscriptions, or plans with just a few lines of
                code
              </p>
            </li>
          </ul>
        </div>
        <div
          className="full__secure__sec__anim"
          data-aos="flip-left"
          data-aos-duration="5000"
        >
          <div class="card-ill">
            <div class="card-ill__logo">
              <img
                src="https://payxtoday.com/images/visa-texts.svg"
                alt="visa_text_2"
              />
            </div>
            <ul class="card-ill__info">
              <li>
                <div>Card Fingerprint</div>
                <div>QSHATNYPL342BT7A</div>
              </li>
              <li>
                <div>Charge ID</div>
                <div>CHAR-SPBUFHTSJC4538LO2DKNT9RY</div>
              </li>
              <li>
                <div>Fraud Score</div>
                <div>
                  <span class="safe"> Safe </span>
                </div>
              </li>
            </ul>
            <div class="card-ill__user-info">
              <div class="card-ill__user-info-item white">
                <span> Card holder </span>
                Alex Bolton
              </div>
              <div class="card-ill__user-info-item white">
                <span> Valid thru mm/yy </span>
                10/22
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="full__secure__enters__card">
        <li>
          <div class="card-vault-tokenization__list-item-icon">
            <div className="card-valut-tokenization-line"></div>
            <div class="card-vault-tokenization__icon-card">
              <p class="card-vault-tokenization__icon-card-title">
                Credit card data
              </p>
              <div class="card-vault-tokenization__icon-card-input card-number">
                <span>---- ---- ---- ----</span>
              </div>
              <div
                class="card-vault-tokenization__icon-card-input card-name"
                data-text="Alex Bolton"
              >
                <span>Cardholder name</span>
              </div>
              <div class="card-vault-tokenization__icon-card-triple-inputs">
                <div class="card-vault-tokenization__icon-card-input card-mm">
                  <span>MM</span>
                </div>
                <div class="card-vault-tokenization__icon-card-input card-yy">
                  <span>YY</span>
                </div>
                <div class="card-vault-tokenization__icon-card-input card-cvv">
                  <span>CVV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card__valut__desc">
            <span>Customer enters card data</span>
            <p>
              A customer inputs their credit card details. It can be done by
              using a custom form, Checkout, or directly with API.
            </p>
          </div>
        </li>
        <li>
          <div class="card-vault-tokenization__list-item-icon">
            <div className="card-valut-tokenization-line"></div>
            <div class="card-vault-tokenization__icon-compuctor">
              <div class="card-vault-tokenization__icon-compuctor-line">
                <div class="card-vault-tokenization__icon-compuctor-rectangles create-elements-on-scroll"></div>
                <div class="card-vault-tokenization__icon-compuctor-circles create-elements-on-scroll"></div>
              </div>
              <div class="card-vault-tokenization__icon-compuctor-line">
                <div class="card-vault-tokenization__icon-compuctor-rectangles create-elements-on-scroll"></div>
                <div class="card-vault-tokenization__icon-compuctor-circles create-elements-on-scroll"></div>
              </div>
              <div class="card-vault-tokenization__icon-compuctor-line">
                <div class="card-vault-tokenization__icon-compuctor-rectangles create-elements-on-scroll"></div>
                <div class="card-vault-tokenization__icon-compuctor-circles create-elements-on-scroll"></div>
              </div>
            </div>
          </div>
          <div className="card__valut__desc">
            <span>Token is created on our side</span>
            <p>
              A token is created in our API and card details are sent to our
              token server.
            </p>
          </div>
        </li>
        <li>
          <div class="card-vault-tokenization__list-item-icon">
            <div class="card-vault-tokenization__token create-elements-on-scroll"></div>
          </div>
          <div className="card__valut__desc">
            <span>Token is sent back to you</span>
            <p>
              The token is sent to your backend. You can securely process the
              payments, even without PCI compliance — leave it to us.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FullSecure;
