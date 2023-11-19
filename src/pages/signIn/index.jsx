import style from "./index.module.css";
// import image from "../../assets/signin.png";
import logo from "../../assets/Logo.png";
import eyeLogo from "../../assets/eyeLogo.png";
import google from "../../assets/goggle.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export function SignIn() {
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
      <div className={style.leftSide}>{/* <img src={image} alt="" /> */}</div>

      <div className={style.rightSide}>
        <header>
          <img src={logo} alt="" />
        </header>

        <div className={style.formSection}>
          <div className={style.travelInfo}>
            <p>Sign in for your exciting journey</p>
            <form className={style.form}>
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
                    <div className={style["form-email-error"]}>
                      {methods.formState.errors?.email?.message}
                    </div>
                  )}
                </div>
                <div className={style.input}>
                  <label htmlFor="pass">Password</label>

                  <div className={style.inputInner}>
                    <Controller
                      control={methods.control}
                      name="password"
                      rules={{
                        required: "This is field is required!",
                      }}
                      render={({ field }) => {
                        return (
                          <input
                            {...field}
                            type="password"
                            id="pass"
                            name="pass"
                            placeholder="•••••••••••"
                          />
                        );
                      }}
                    />
                    <img src={eyeLogo} alt="" />
                    
                  </div>
                  {methods.formState.errors?.password && (
                    <div className={style["form-password-error"]}>
                      {methods.formState.errors?.password?.message}
                    </div>
                  )}
                </div>
                <div className={style.forgotPassword}>
                  <Link to="/forgotPass">
                    <p>Forgot password?</p>
                  </Link>
                </div>
              </div>
              <div className={style.button}>
                <button>Sign in</button>
              </div>
            </form>
          </div>
        </div>

        <div className={style.socialSection}>
          <div className={style.social}>
            <p>or use one of this</p>
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
          <span>Don’t have an account?</span>
          <span>
            <Link to="/createAccount">Create one for new adventure!</Link>
          </span>
        </footer>
      </div>
      <DevTool control={methods.control} />
    </div>
  );
}
