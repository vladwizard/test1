import { useState } from "react";
import styles from "./ModalWindow.module.scss";
import Button from "../common/Button/Button";
import Cross from "./Cross";

const sections = [
  { title: "Name", placeholder: "Paresh Srichandan", required: false },
  { title: "E-mail", placeholder: "Paresh@pixeto.com", required: true },
  { title: "Phone", placeholder: "+7 (___) ___-__-__", required: true },
  { title: "Messege", placeholder: "Type your Messege", required: false },
];

const ModalWindow = (props) => {
  const [data, setData] = useState({});

  return (
    <div className={styles.ModalWindow}>
      <div
        className={styles.exitButton}
        onClick={() => {
          props.exit();
        }}
      >
        <Cross />
      </div>
      <h2>
        {" "}
        Have a Question ?<br />
        Let’s Get in Touch with us 👋 back
      </h2>
      <p>Fill up the form and the team will get back to within 24 hrs</p>

      <form>
        {sections.map((section, index) => (
          <section key={index}>
            <p>{section.title + (section.required ? " *" : "")}</p>
            <input
              onChange={(e) => (data[section.title] = e.target.value)}
              placeholder={section.placeholder}
            />
          </section>
        ))}
      </form>
      <div
        onClick={() => {
          for (let section  of sections) {
            if (section.required) {
              if (data[section.title]) continue;
              return 0
            }
          }
          console.log(JSON.stringify(data));
        }}
      >
        <Button text="Send Messege" />
      </div>
    </div>
  );
};
ModalWindow.propTypes = {};

ModalWindow.defaultProps = {};

export default ModalWindow;
