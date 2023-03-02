import React from "react";
import styles from "./Patner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from './Image3.png'
const persons = [
  {
    text: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Johnny Andro",
    title: "Director, Company",
    image: image,
  },
  {
    text: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Johnny Andro",
    title: "Director, Company",
    image: image,
  },
  { text: "der4h45", name: "", title: "", image: "" },
];

const Patner = () => {
  const [selected, setSelected] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.Patner}>
      <main>
        <svg
          className={styles.quotes}
          width="43"
          height="30"
          viewBox="0 0 43 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5789 30H0L12.7802 0H21.4334L13.5789 30ZM35.1455 30H21.5666L34.3467 0H43L35.1455 30Z"
            fill="#232536"
          />
        </svg>
        <div className={styles.bar} />
        <Slider {...settings}>
          {persons.map((person, index) => (
            <div key={index} className={styles.cart}>
              <div>
                <h4>{person.text}</h4>
                <div className={styles.person}>
                  <img src={person.image} />
                  <h6>{person.name}</h6>
                  <p className="small"> {person.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
};
Patner.propTypes = {};

Patner.defaultProps = {};

export default Patner;
