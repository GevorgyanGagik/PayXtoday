import "./fewWords.scss";

const FewWords = () => {
  return (
    <section className="words container">
      <p className="title">
        A few words from <span className="green__headline"> our clients</span>
      </p>
      <ul className="words__raitings">
        <li className="words__raitings__google">
          <img
            className="google__img"
            src="https://payxtoday.com/images/google.svg"
            alt="google__image"
          />
          <div className="words__raitings__google__desc">
            <p>Google Raiting</p>

            <div className="star__images">
              <img
                src="https://payxtoday.com/images/star_rating.svg"
                alt="star__image"
              />
              <img
                src="https://payxtoday.com/images/star_rating.svg"
                alt="star__image"
              />
              <img
                src="https://payxtoday.com/images/star_rating.svg"
                alt="star__image"
              />
              <img
                src="https://payxtoday.com/images/star_rating.svg"
                alt="star__image"
              />
              <img
                src="https://payxtoday.com/images/star_rating_half.svg"
                alt="half__star__image"
              />
            </div>

            <p>74 reviews</p>
          </div>
        </li>
        <li className="words__raitings__li first">
          <div>
            <div className="words__raitings__top__desc">
              <img
                src="https://payxtoday.com/images/user_blue.svg"
                alt="image"
              />
              <div>
                <strong>BizHelper</strong>
                <p className="small__p">Czech Republic</p>
              </div>
            </div>

            <div className="words__raitings__top__stars">
              <div className="words__raitings__li__stars">
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
              </div>
              <p>14.12.2023</p>
            </div>
          </div>
          <strong>Pleasant cooperation & assistance</strong>
          <p>
            We’ve been working with PayXtoday for 9 months. The people at
            PayXtoday have been really helpful, and we’re getting things done on
            time. We’re happy with how everything is going.
          </p>
          <p className="green">Continue reading</p>
        </li>
        <li className="words__raitings__li">
          <div>
            <div className="words__raitings__top__desc">
              <img
                src="https://payxtoday.com/images/user_green.svg"
                alt="image"
              />
              <div>
                <strong>QuickTV </strong>
                <p className="small__p">Germany</p>
              </div>
            </div>

            <div className="words__raitings__top__stars">
              <div className="words__raitings__li__stars">
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
              </div>
              <p>27.01.2024</p>
            </div>
          </div>
          <strong>Pleasant cooperation & assistance</strong>
          <p>
            They’re good at getting things done fast and right. We’re glad to be
            working with them.
          </p>
          <p className="green">Continue reading</p>
        </li>
        <li className="words__raitings__li">
          <div>
            <div className="words__raitings__top__desc">
              <img
                src="https://payxtoday.com/images/user_purple.svg"
                alt="image"
              />
              <div>
                <strong>SimplestTV</strong>
                <p className="small__p">Poland</p>
              </div>
            </div>

            <div className="words__raitings__top__stars">
              <div className="words__raitings__li__stars">
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
                <img
                  src="https://payxtoday.com/images/star_rating.svg"
                  alt="star"
                />
              </div>
              <p>18.05.2024</p>
            </div>
          </div>
          <strong>Pleasant cooperation & assistance</strong>
          <p>
            We’ve been with PayXtoday for 6 months. They’re effective and gave
            us the info we needed. We’re happy with how things are going.
          </p>
          <p className="green">Continue reading</p>
        </li>
      </ul>
    </section>
  );
};

export default FewWords;
