import { useState } from "react";
import Details from "./components/Details";
import styles from "./Info.module.scss";

const sections = [
  { tab: "Details", component: <Details /> },
  { tab: "Requirements", component: <Details /> },
  { tab: "Responsibilities", component: <></> },
];

const Info = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.Info}>
      <header>

          {sections.map((section, index) => (
            <div
              key={index}
              className={selected == index ? styles.selected : ""}
              onClick={() => setSelected(index)}
            >
              <h4>{section.tab}</h4>
            </div>
          ))}

      </header>
      <main>
        {sections.map((section, index) => (
          <>{index == selected ? section.component : <></>}</>
        ))}
      </main>
    </div>
  );
};

Info.propTypes = {};

Info.defaultProps = {};

export default Info;
