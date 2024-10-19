import "./secureAccess.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const SecureAccess = () => {
  AOS.init();

  return (
    <section className="access container">
      <div className="access__desc" data-aos="fade-right">
        <p className="title">Securing access</p>
        <p>
          PayXtoday provides capabilities to help protect your organisation, but
          they are effective only if you use them. If you do not use them, you
          may be vulnerable.
        </p>

        <ul className="access__list">
          <li className="access__list__item">
            <img
              src="https://payxtoday.com/images/two-factor-authetication.svg"
              alt="image"
            />
            <strong>Two-factor authentication.</strong>
            <p>
              Minimise security risks and ensure peace of mind with enhanced
              security and protection through PayXtoday's PCI-compliant,
              two-factor authentication
            </p>
          </li>
          <li className="access__list__item">
            <img
              src="https://payxtoday.com/images/activity-log.png"
              alt="image"
            />
            <strong>Activity log.</strong>
            <p>
              Protecting data, preserving privacy, and complying with
              regulations such as the GDPR should certainly be the highest
              priorities for any business
            </p>
          </li>
          <li className="access__list__item">
            <img
              src="https://payxtoday.com/images/role-access-management.png"
              alt="image"
            />
            <strong>Role access management.</strong>
            <p>
              Providing only the necessary level of access for a user to perform
              their role mitigates security risks and supports compliance with
              company policies
            </p>
          </li>
          <li className="access__list__item">
            <img
              src="https://payxtoday.com/images/session-management.png"
              alt="image"
            />
            <strong>Session management.</strong>
            <p>
              We store unique identifiers of user sessions as entries in the
              database
            </p>
          </li>
        </ul>
      </div>
      <div className="access__costumers">
        <ul className="access__costumers__list">
          <li>
            <img src="https://payxtoday.com/images/costumers.svg" alt="img" />
            Costumers
          </li>
          <li>
            <input type="checkBox" />
            <div>
              <p className="costumer__title">Allow access</p>
              <p className="costumer__desc">
                Accounts, Subscriptions, Invoices, Transactions, Plans
              </p>
            </div>
          </li>
          <li className="costumer__radio">
            <p className="costumer__desc">Permissions</p>

            <label>
              <input type="radio" name="gender" />
              Can edit
            </label>
            <label>
              <input type="radio" name="gender" />
              Read-only
            </label>
          </li>
        </ul>
        <ul className="access__costumers__list">
          <li>
            <img src="https://payxtoday.com/images/reports.svg" alt="image" />
            Reports
          </li>
          <li>
            <input type="checkBox" />
            <div>
              <p className="costumer__title">Allow access and editing</p>
              <p className="costumer__desc">
                Dashboard, Accounts and Subscribers, Plans, Recurring revenue,
                Subscriber retention, Transcations, Exports
              </p>
            </div>
          </li>
        </ul>
        <ul className="access__costumers__list">
          <li>
            <img
              src="https://payxtoday.com/images/configuration-integrations.svg"
              alt="image"
            />
            Configuration & Integrations
          </li>
          <li>
            <input type="checkBox" />
            <div>
              <p className="costumer__title">Allow access and editing</p>
              <p className="costumer__desc">
                Site settings, Plans, Invoice settings, Coupons, Currencies,
                Taxes, Email templates, Payment gateways, Checkout settings,
                Dunning management, MailChimp, Salesforce
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecureAccess;
