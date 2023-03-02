import React from "react";
import styles from "./Careers.module.scss";

const Careers = () => (
  <div className={styles.Careers}>
    <div className={styles.texts}>
      <h2>
        {" "}
        We hired people who are Always Passionate about what they do Through
        True
      </h2>
      <p>
        Rich Attended does no end it his mother since real had half every him
        case in packages enquire we up ecstatic unsatiable saw .
      </p>
    </div>
    <svg className={styles.shape}
      width="49"
      height="52"
      viewBox="0 0 49 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6724 -8.74228e-07L48.6724 0L48.6724 52L28.6724 52L28.6724 -8.74228e-07Z"
        fill="#666DFF"
      />
      <path
        d="M0.672363 -6.11959e-07L14.6724 0L14.6724 14L0.672362 14L0.672363 -6.11959e-07Z"
        fill="#666DFF"
      />
      <path
        d="M14.6724 -1.48619e-06L48.6724 0L48.6724 34L14.6724 34L14.6724 -1.48619e-06Z"
        fill="#FFA155"
      />
      <path
        d="M28.6724 14L48.6724 14L48.6724 34L28.6724 34L28.6724 14Z"
        fill="#FFD3AF"
      />
    </svg>

    <div className={styles.inscription}>
      <div>Careers</div>
    </div>
  </div>
);

Careers.propTypes = {};

Careers.defaultProps = {};

export default Careers;
