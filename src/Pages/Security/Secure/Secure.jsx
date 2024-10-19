import "./secure.scss";

const Secure = () => {
  return (
    <section className="secure">
      <div className="secure__desc">
        <p className="title">Secure infrastructure</p>
        <p>
          PayXtoday
          <span className="green">
            {" "}
            meets the highest standards of security
          </span>
          , <span className="green">integrity</span> and
          <span className="green"> stability</span> . We understand that you
          entrust your data to us, and we do everything possible to keep it
          secure and continuously look for opportunities to improve.
        </p>
      </div>
      <ul className="secure__logotypes">
        <li className="secure__logotypes__desc">
          <p className="secure__desc__hidden">
            Our payment platform runs entirely on Amazon Web Services (AWS), a
            secure cloud services platform that offers computing power, database
            storage, and other functionality helping us scale and grow.
          </p>
          <img src="https://payxtoday.com/images/amazonImg.svg" alt="logo" />
        </li>
        <li className="secure__logotypes__desc">
          <p className="secure__desc__hidden">
            Cloudflare helps us mitigate DDoS attacks of all forms and sizes and
            enhances the security of our platform.
          </p>
          <img src="https://payxtoday.com/images/cloudflare.svg" alt="logo" />
        </li>
        <li className="secure__logotypes__desc">
          <p className="secure__desc__hidden">
            Our website is secured by the Comodo SSL certificate.
          </p>
          <img src="https://payxtoday.com/images/comodo.svg" alt="logo" />
        </li>
        <li className="secure__logotypes__desc">
          <p className="secure__desc__hidden">
            Our users are prompted to authenticate with their password and
            verification code. The additional layer of security ensures that
            only authorised PayXtoday users can access their account.
          </p>
          <img src="https://payxtoday.com/images/hz.svg" alt="logo" />
        </li>
      </ul>

      <ul className="secure__lists">
        <li className="secure__lists__item">
          <div className="secure__lists__item__desc">
            <p className="secure__list__title">Infrastructure reliability</p>
            <p className="secure__list__description">
              PayXtoday's PCI-compliant payment platform runs entirely on AWS,
              relying on security best practices and auditability.
            </p>
          </div>
          <ul className="secure__list__item__standart__list">
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Hosting facilities
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              99.95% uptime
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Monitoring
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              DDoS protection
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Latency
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Processing speed
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Scalability
              <span className="secure__list__i">i</span>
            </li>
          </ul>
        </li>
        <li className="secure__lists__item">
          <div className="secure__lists__item__desc">
            <p className="secure__list__title">Security management</p>
            <p className="secure__list__description">
              We review and observe employee, customer, and vendor activity to
              guard against suspicious or unauthorised activities.
            </p>
          </div>
          <ul className="secure__list__item__standart__list">
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Firewall
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Monitoring
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Penetration testing
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Scanning
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Vulnerability management
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Intrusion prevention system
              <span className="secure__list__i">i</span>
            </li>
          </ul>
        </li>
        <li className="secure__lists__item">
          <div className="secure__lists__item__desc">
            <p className="secure__list__title">Ultimate data protection</p>
            <p className="secure__list__description">
              Data protection and security are major concerns when considering
              information management solutions, especially when it comes to your
              company’s sensitive payment data. With us, you can enjoy peace of
              mind knowing that industry best practices are followed.
            </p>
          </div>
          <ul className="secure__list__item__standart__list">
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              TLS 1.2 (SSL)
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Data encryption
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              Card tokenisation
              <span className="secure__list__i">i</span>
            </li>
            <li>
              <img
                src="https://payxtoday.com/images/green_arrow.svg"
                alt="arrow"
              />
              No prohibited data storage
              <span className="secure__list__i">i</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Secure;
