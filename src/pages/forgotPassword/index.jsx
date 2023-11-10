import style from "./index.module.css";
import logo from "../../assets/Logo.png";
import arrow from "../../assets/chevron-left.png";
import { Link } from "react-router-dom";

export function ForggotPass() {
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
        <div className={style.passFormSection}>
          <div className={style.passTravelInfo}>
            <div className={style.passText}>
              <p>Looking to change your password?</p>
              <p>
                Enter your email below and we'll send you instructions on how to
                reset your password.
              </p>
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
          <div className={style.passButton}>
            <button>Reset my password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
