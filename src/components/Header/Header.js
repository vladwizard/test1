import React, { useState } from "react";
import Arrow from "../../svgs/Arrow";
import ModalWindow from "./ModalWindow/ModalWindow";
import styles from "./Header.module.scss";

const links = [
  { title: "Home", href: "" },
  { title: "Careers", href: "" },
  { title: "FAQ", href: "" },
  { title: "Customers", href: "" },
];

const Header = () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const [path, setPath] = useState(0);

  const [modalWindowToggle, setModalWindowToggle] = useState(false);

  return (
    <>
      <div className={styles.Header}>
        <p className={styles.logo}>LOGO</p>
        <div>
          {mediaQuery.matches ? (
            <>
              {links.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.title}
                </a>
              ))}
            </>
          ) : (
            <select>
              {links.map((link, index) => (
                <option key={index} href={link.href}>
                  {link.title}
                </option>
              ))}
            </select>
          )}
          <div
            className={styles.modalButton}
            onClick={() => setModalWindowToggle(true)}
          >
            Open Modal
            <Arrow />
          </div>
        </div>
      </div>
      {modalWindowToggle ? (
        <ModalWindow exit={() => setModalWindowToggle(false)} />
      ) : (
        <></>
      )}
    </>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
