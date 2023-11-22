import style from "./index.module.css";
import logo from "../../../public/assets/Logo.png";
import arrow from "../../../public/assets/chevron-left.png";
import google from "../../../public/assets/goggle.png";
import apple from "../../../public/assets/apple.png";
import facebook from "../../../public/assets/facebook.png";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export function CreateAccount() {
  const methods = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log("ajndjasd---", methods.formState.errors);
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
                  <Controller
                    control={methods.control}
                    name="email"
                    rules={{
                      required: "This is field is required!",
                      validate: (value) => {
                        return (
                          !value.includes("@gmail.com") &&
                          "The value should contain correct email path!"
                        );
                      },
                    }}
                    render={({ field }) => {
                      return (
                        <input
                          {...field}
                          type="email"
                          id="email"
                          placeholder="someone@example.com"
                        />
                      );
                    }}
                  />
                  {methods.formState.errors?.email && (
                    <div className={style["createAccount-error"]}>
                      {methods.formState.errors?.email?.message}
                    </div>
                  )}
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
      <DevTool control={methods.control} />

    </div>
  );
}
