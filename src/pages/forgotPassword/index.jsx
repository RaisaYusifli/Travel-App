import style from "./index.module.css";
import logo from "../../../public/assets/Logo.png";
import arrow from "../../../public/assets/chevron-left.png";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export function ForggotPass() {
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
                    <div className={style["forgotPassword-error"]}>
                      {methods.formState.errors?.email?.message}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className={style.passButton}>
            <button>Reset my password</button>
          </div>
        </div>
      </div>
      <DevTool control={methods.control} />

    </div>
  );
}
