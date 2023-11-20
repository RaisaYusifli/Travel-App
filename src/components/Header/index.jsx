import styles from "./index.module.css";
import { Navs } from "../Navs";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import user from "../../assets/User_01.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navs />
        </div>
      </header>

      <div className={styles.nav}>
        <button
          className={styles["menu-btn"]}
          type="button"
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={menuOpen ? faXmark : faBars}
          />
        </button>
        <div
          onClick={handleMenuClick}
          className={menuOpen ? `${styles.hamburgerMenu}` : `${styles.dNone}`}
        >
          <div className={styles.headerItems}>
            <ul>
              <li>
                <Link className={styles.link} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/destination">
                  Destination
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/private-trip">
                  Private trip
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["nav-left"]}>
          <nav>
            <ul className={styles.links}>
              {/* <li> <Link className={styles.link} to="/destination?sort='asc'">Destination</Link></li> */}
              <li>
                {" "}
                <Link className={styles.link} to="/destination">
                  Destination
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/private-trip">
                  Private trip
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["nav-middle"]}>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className={styles["nav-right"]}>
          <nav>
            <ul className={styles.links}>
              <li>
                <button className={styles.lucky}>
                  <Link
                    className={styles["lucky-text"]}
                    to="/destination/italy"
                  >
                    I'm Feeling Lucky
                  </Link>
                </button>
              </li>
              <li>
                <button className={styles.login}>
                  <Link className={styles["login-text"]} to="/signin">
                    Login
                  </Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <button onClick={handleAccount} className={styles.profile}>
          <img src={user} alt="" />
        </button>
        <div
          onClick={handleAccount}
          className={account ? `${styles.accountMenu}` : `${styles.dNone}`}
        >
          <div className={styles.accountItems}>
            <ul className={styles.links}>
              <li>
                <button className={styles.lucky}>
                  <Link
                    className={styles["lucky-text"]}
                    to="/destination/italy"
                  >
                    I'm Feeling Lucky
                  </Link>
                </button>
              </li>
              <li>
                <button className={styles.login}>
                  <Link className={styles["login-text"]} to="/signin">
                    Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
