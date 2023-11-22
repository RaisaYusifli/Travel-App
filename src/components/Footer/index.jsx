import { Link } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../../public/assets/Logo.png";

export function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style["footer-top"]}>
          <div className={style["footer-text"]}>
            <div className={style.bodyText}>
              <p>Join our travel revolution</p>
              <p>
                Sign up to stay in the know - hot new travel spots, <br />
                how we strive to make the world a better place, and all sorts of
                surprises.
              </p>
            </div>
            <div class={style["footer-input"]}>
              <input type="email" placeholder="Email" required />
              <button className={style.sign}>Sign up</button>
            </div>
          </div>
        </div>

        <div className={style["footer-wrapper"]}>
          <div className={style["footer-logo"]}>
            <a href="#">
              <img className={style.logo} src={logo} alt="logo" />
            </a>
            <p className={style.link}>
              Discover the world's wonders and let us be <br />
              your trusted guide to extraordinary destinations.
            </p>
            <span className={style.span}>
              © Copyright 2023 Tourista Ltd. All Rights Reserved.
            </span>
          </div>
          <div className={style["footer-card"]}>
            <h3>Menu</h3>
            <ul className={style.ul}>
              <li>
                {" "}
                <Link className={style.link} to="/destination">
                  Destinations
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/private-trip">
                  Private trips
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/about">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className={style["footer-card"]}>
            <h3>Support</h3>
            <ul className={style.ul}>
              <li>
                {" "}
                <Link className={style.link} to="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/">
                  Privacy policy
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/about">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className={style["footer-card"]}>
            <h3>Follow us</h3>
            <ul className={style.ul}>
              <li>
                {" "}
                <Link className={style.link} to="/instagram">
                  Instagram
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/facebook">
                  Facebook
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/linkedin">
                  Linkedin
                </Link>
              </li>
              <li>
                {" "}
                <Link className={style.link} to="/tiktok">
                  Tiktok
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
