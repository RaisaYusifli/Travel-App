import style from "./index.module.css";
export function CardBlog(props) {
  return (
    <div className={style.card}>
      <div class={style["card-img"]}>
        <img src={props.image} alt="" />
      </div>
      <div class={style["card-content"]}>
        <div className={style.tripC}>
          <p className={style.trip}>{props.trip}</p>
        </div>
        <div className={style.descriptionC}>
          <p className={style.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
