import React from "react";
import styles from "./Button.module.scss";
import Arrow from "../../../svgs/Arrow";
import Shapes from "../../../svgs/Shapes";

const Button = (props) => (
  <div className={styles.Button}>
    <Shapes />
    <div>
      <a>{props.text}</a>
      <Arrow />
    </div>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
