import style from "./index.module.css";
import arrow from "../../../public/assets/Chevron_Right.png";
export function LookingGoElsewhere() {
  return (
    <div className={style.container}>
      <div className={style.text1}>
        <div className={style.text}>
          <p>Looking to go elsewhere?</p>
          <button>
            <div className={style.arrow}>
              <a href="#">Our destinations</a>
              <img src={arrow} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
