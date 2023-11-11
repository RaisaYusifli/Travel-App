import styles from "./index.module.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
// import currencies from "./database";
// import { Currency } from "../Currency";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/User_01.png";

export function Navs({handleMenuClick}) {
  // const [selectedCurrency, setSelectedCurrency] = useState(null);

  // const handleCurrentSelect = (currency) => {
  //   setSelectedCurrency(currency);
  // };
  const [menuOpen, setMenuOpen] = useState(false);

  //  handleMenuClick = () => {
  //   setMenuOpen(!menuOpen);
  //   console.log('div gosterildi')
  // };

  return (
    <div className={styles.nav}>
      <div className={styles["nav-left"]}>
        <button id={styles["menu-btn"]}type="button" onClick={handleMenuClick}>
          <FontAwesomeIcon className={styles.icon} icon={menuOpen ? faXmark : faBars} />
        </button>
        <nav>
          <ul className={styles.links}>
            <li>
              {" "}
              <Link className={styles.link} to="/">
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link className={styles.link} to="/about">
                About us
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.link} to="/faq">
                FAQ
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.link} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.link} to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["nav-right"]}>
        <p className={styles.mezenne}>US$</p>
        {/* <select name="" id="">
          {currencies.map((currency) => {
            return (
              <option value="">
                <Currency key={currency.id} text={currency.text} />
              </option>
            );
          })}
        </select> */}
        {/* <ul>
            {currencies.map((currency) => {
              return (
                <>
                <li>
                  <Currency
                    className={
                      selectedCurrency === currency ? styles.selected : ""
                    }
                    onClick={() => handleCurrentSelect(currency)}
                    key={currency.id}
                    text={currency.text}
                  />
                  
                </li>
                <img src={arrow} alt="" />
                </>
              );
            })}
          </ul> */}

        <a href="#">
          <img src={arrow} alt="" />
        </a>
        <div className={styles.profile}>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}
