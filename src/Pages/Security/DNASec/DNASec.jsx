import AOS from "aos";
import "aos/dist/aos.css";
import "./dnaSec.scss";

const DNASec = () => {
  AOS.init();

  return (
    <section className="dna__sec container">
      <div className="dna__sec__desc" data-aos="fade-up">
        <p className="title">Security is in our DNA</p>
        <p>
          In an industry where trust is paramount, using sophisticated security
          practices gives businesses confidence that PayXtoday is keeping their
          data secure. Our team works with each of our clients to protect them,
          offering best practices to ensure private information stays private.
        </p>
        <img
          src="https://payxtoday.com/images/lock.png"
          className="dna__sec__img"
          alt="dna-img"
        />
      </div>

      <ul className="dna__sec__list">
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img src="https://payxtoday.com/images/cap.svg" alt="image" />
          </div>
          <p className="dna__sec__list__item__title">Ongoing education</p>
          <p className="dna__sec__list__item__text">
            Our Development and Engineering teams regularly train in several
            different areas including cryptography, OWASP Top 10 and others
            relevant to our platform.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img src="https://payxtoday.com/images/community.svg" alt="image" />
          </div>
          <p className="dna__sec__list__item__title">Community consciousness</p>
          <p className="dna__sec__list__item__text">
            We share information security approaches locally and nationally to
            help shape the security community.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img src="https://payxtoday.com/images/strategic.svg" alt="image" />
          </div>
          <p className="dna__sec__list__item__title">Strategic approach</p>
          <p className="dna__sec__list__item__text">
            Constant internal and external testing helps us identify and
            understand the tactics used by adversaries, and how to proactively
            stop them to keep data safe.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img
              src="https://payxtoday.com/images/third-party-testing.svg"
              alt="image"
            />
          </div>
          <p className="dna__sec__list__item__title">Third-party testing</p>
          <p className="dna__sec__list__item__text">
            Solutions that are only secure in theory are not acceptable. We
            partner with third-party providers to test, attack and evaluate our
            security controls to confirm they work.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img
              src="https://payxtoday.com/images/development.svg"
              alt="image"
            />
          </div>
          <p className="dna__sec__list__item__title">Development</p>
          <p className="dna__sec__list__item__text">
            Our developers work closely together with different departments.
            Crucially, we publish new releases of our core system every week,
            without any downtime or active involvement of our customers.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img
              src="https://payxtoday.com/images/software-and-hardware.svg"
              alt="image"
            />
          </div>
          <p className="dna__sec__list__item__title">Software and hardware</p>
          <p className="dna__sec__list__item__text">
            PayXtoday is fully built on open-source software. This gives us
            maximum control over our software components while remaining
            independent of any third party. All development, system
            administration, networking, database administration and security
            activities are performed in-house by our experts.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img
              src="https://payxtoday.com/images/proven-practices.svg"
              alt="image"
            />
          </div>
          <p className="dna__sec__list__item__title">Proven practices</p>
          <p className="dna__sec__list__item__text">
            PayXtoday maintains a SOC 2 report, which is provided by an
            independent, third-party attestation and proves that we are taking
            the appropriate steps to protect our systems and your data.
          </p>
        </li>
        <li className="dna__sec__list__item">
          <div className="dna__sec__list__item__img">
            <img
              src="https://payxtoday.com/images/strong-access-controls.svg"
              alt="image"
            />
          </div>
          <p className="dna__sec__list__item__title">Strong access controls</p>
          <p className="dna__sec__list__item__text">
            With data as precious as financial information, we make sure only
            the right people have the proper access. Utilising OAuth
            authentication and scoping, we transform sensitive information into
            a temporary and constantly changing key (or token) for robust
            protection.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default DNASec;
