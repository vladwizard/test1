import React from "react";
import Button from "../../common/Button/Button";
import styles from "./Preview.module.scss";

const Preview = () => (
  <div className={styles.Preview}>
    <section>
      <h1>Transform Your Idea Into Reality with Finsweet</h1>
      <p>
        The entire Finsweet team knows what's good with Webflow and you can too
        with 1 week and a good attitude.
      </p>
      <Button text="Request Quote" />
    </section>
    <img src="/images/Image1.png" />
  </div>
);

Preview.propTypes = {};

Preview.defaultProps = {};

export default Preview;
