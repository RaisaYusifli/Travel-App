import style from "./index.module.css";
import logo from "../../assets/Logo.png";
import arrow from "../../assets/chevron-left.png";
import google from "../../assets/goggle.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";

export function CreateAccount() {
  return (
    <div className={style.container}>
      <div className={style.leftSide}></div>
      <div className={style.rightSide}>
        <header>
          <div>
            <Link to="/signin"><img src={arrow} alt="" /></Link>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
          <div></div>
        </header>

        <div className={style.createFormSection}>
          <div className={style.createTravelInfo}>
            <div className={style.createText}>
              <p>Create an account to start trip planning</p>
            </div>
            <form action="">
              <div className={style.inputs}>
                <div className={style.input}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="someone@example.com"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className={style.socialSection}>
            <div className={style.social}>
              <p>Sign up with</p>
              <div className={style.socialAccounts}>
                <div className={style.item}>
                  <img src={google} alt="" />
                </div>
                <div className={style.item}>
                  <img src={apple} alt="" />
                </div>
                <div className={style.item}>
                  <img src={facebook} alt="" />
                </div>
              </div>
            </div>
          </div>

          <footer>
            <p>
              By creating an account, you agree to elsewhere's
              <span> Terms of Use</span> and <span>Privacy Policy</span>.
            </p>
          </footer>

          <div className={style.createButton}>
            <button>Start trip planning</button>
          </div>
        </div>
      </div>
    </div>
  );
}