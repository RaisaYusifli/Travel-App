import style from "./index.module.css";
import image from "../../../../assets/blog.png";

export function BlogPlc() {
  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <div className={style.text}>
        <p>Blog</p>
        <p>Blog articles for "Inspiration".</p>
      </div>
    </div>
  );
}
