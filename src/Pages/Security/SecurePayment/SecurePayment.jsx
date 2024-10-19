import "./securePayment.scss";

const SecurePayment = () => {
  const addAccardion = (ev) => {
    ev.target.nextElementSibling.classList.toggle("active__acardeon");
    ev.target.parentElement.classList.toggle("border");
  };

  return (
    <section className="secure__payment container">
      <ul className="secure__payment__list">
        <li className="secure__payment__li">
          <h3>Secure online payments</h3>
          <div className="plus" onClick={addAccardion}></div>
          <div className="hidden">
            <p>
              Security of online payments is a significant concern not only for
              cardholders. Banks, payment service providers, platforms, and
              merchants (i.e. online stores) are also interested in the security
              of the payment process. And the reason is apparent: all the
              participants risk their money and reputation in case of a security
              breach. This safety concern leads to creating advanced means to
              secure transactions and prevent fraudulent activities with card
              data.
            </p>
            <h3>How it works?</h3>
            <p>
              Security of payment data underlies every solution of our platform.
              PayXtoday complies with the highest standards through rigorous
              security checks, safe data storage, staff control, and compliance
              with all the available regulations. We take the matter of security
              seriously to ensure the maximum data safety and reliability of the
              platform.
            </p>
            <p>
              The new technologies are always on our radars: we assess risks and
              perform independent audits to ensure stability, reliability, and
              safety throughout the platform.
            </p>
            <h3>PCI DSS</h3>
            <p>
              Our platform complies with the strictest security standard — PCI
              DSS Level 1. The annual onsite audit ensures the highest levels of
              compliance are maintained. It also allows us to relieve the PCI
              burden from our customers and deal with the banks on their behalf.
              This compliance ensures the complete protection of our clients and
              their customers’ sensitive data.
            </p>
            <h3>VISA TPA &amp; MRP</h3>
            <p>
              Being registered in Mastercard Registration Program and as VISA
              Third Party Agent, we provide our clients with an additional
              safety layer.
            </p>
            <h3>ISO 9001, 27001</h3>
            <p>
              International Organization for Standardization (ISO) is an
              essential point in secure online payments. PayXtoday has both ISO
              9001 and ISO 27001 standards. ISO 9001 is the international
              standard specifying the requirements for Quality Management
              System. When used, it helps organisations demonstrate their
              ability to provide high-quality services and products. PayXtoday
              also possesses the ISO/IEC 27001:2013 certification of
              Application, Systems, People, Technology, and Processes.
            </p>
            <p>
              Information security results in performance improvement, reduced
              risks, and increased customer convenience.
            </p>
            <h3>PSD2</h3>
            <p>
              We also support PSD2. The Payment Services Directive replaces the
              PSD dated 2007. This solution enables third-party providers to
              manage the bank customers’ finances with their direct permission
              and through enhanced authentication. According to PSD2, customers
              give their consent both for individual transactions and for TPP’s
              to fully access their information stored in the bank.
            </p>
            <h3>GDPR</h3>
            <p>
              GDPR is aimed to protect the personal data and privacy of European
              Union citizens. The pan-European regulation ensures that clients’
              identity details are collected only when they have given explicit
              and reasonable consent.
            </p>
          </div>
        </li>
        <li className="secure__payment__li">
          <h3>Secure payment methods</h3>
          <div className="plus" onClick={addAccardion}></div>
          <div className="hidden">
            <p>
              Our payment orchestration platform uses 3D Secure technologies
              (both 1 and 2). This helps to verify a cardholder’s identity in
              real-time and make each transaction secure. After entering the
              card number, its owner is redirected to the issuing bank server.
              Usually, after that banks send an SMS with a secret code to be
              used as a confirmation. When the received code is entered, the
              cardholder’s identity is confirmed and the transaction is
              authorised. For instance, the Mastercard uses the Masterсard
              SecureCode to secure all financial procedures.
            </p>
            <h3>Credit cards</h3>
            <p>
              PayXtoday enables you to accept online payments via tokenisation
              technology. It protects the customer’s data and allows business
              owners to focus on development. Our powerful API enables merchants
              to charge one credit card many times without the need to re-enter
              the payment details. It becomes feasible to perform a free of
              charge authorisation due to our fraud score. We also offer
              one-click payments to facilitate the purchasing process and
              increase your customers’ satisfaction.
            </p>
          </div>
        </li>
        <li className="secure__payment__li">
          <h3>Fraud prevention</h3>
          <div className="plus" onClick={addAccardion}></div>
          <div className="hidden">
            <p>
              Our platform entails a system that evaluates transactions online
              and detects suspicious ones. After a thorough analysis of each
              transaction, the system recommends rejecting or applying an
              additional check. In case of a fraud suspicion, the system can
              prevent money debiting.
            </p>
            <p>
              PayXtoday anti-fraud system can operate according to different
              parameters:
            </p>
            <ul className="hidden__desc__list">
              <li>limits on transactions from one IP address;</li>
              <li>restrictions on the amount;</li>
              <li>number of purchases;</li>
              <li>constantly changing algorithm;</li>
              <li>assessment of customer behaviour in the payment flow;</li>
              <li>transactions based on statistics, etc.</li>
            </ul>
            <p>
              Anti-fraud evaluates all operations and identifies the abnormal
              and suspicious ones. It is also capable of identifying a fraudster
              with the maximum degree of probability or defining buyers’ card
              transactions as trusted.
            </p>
            <p>
              Enjoy secure payments processing without putting your funds,
              reputation, and customers’ sensitive data in jeopardy.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SecurePayment;
