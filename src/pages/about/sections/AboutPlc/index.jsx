import style from "./index.module.css";
import image from "../../../../assets/AboutUs.png";
export function AboutPlc() {
  return (
    <div className={style.container}>
        <img src={image} alt="" />
      <div className={style.text}>
          <p>About us</p>
          <p>Discover Our Passion for Travel and Adventure.</p>
      </div>
    </div>
  );
}
