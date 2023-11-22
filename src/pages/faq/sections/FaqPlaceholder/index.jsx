import style from "./index.module.css";
import image from "../../../../../public/assets/Faq.png";

export function FaqPlaceholder() {
  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <div className={style.text}>
        <p>FAQ</p>
        <p>Unlocking the Mysteries of Travel: Your Questions, Our Journey.</p>
      </div>
    </div>
  );
}
