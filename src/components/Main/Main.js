import React from "react";
import styles from "./Main.module.scss";
import Preview from "./Preview/Preview";
import Careers from "./Careers/Careers";
import Info from "./Info/Info";
import Patner from "./Patner/Patner";

const Main = () => (
  <div className={styles.Main}>
    <Preview />
    <div className={styles.center}>
      <Careers />
      <Info />
    </div>
    <Patner />
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
