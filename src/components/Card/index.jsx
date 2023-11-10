import style from "./index.module.css";
export function Card(props) {
  return (
    <div className={style.card}>
      <div class={style["card-img"]}>
        <img src={props.image} alt="" />

        {props.showButton && (
          <div className={style["comment-button"]}>
            <button className={style.button}>
              <img src={props.imageIcon} className={style.iconImg} alt="" />
              <p className={style.iconText}>{props.iconText}</p>
            </button>
          </div>
        )}

        {/* {props.showButton && (
          <div className={style["comment-button"]}>
            <button className={style.button}>
              <img src={props.heartImg} className={style.iconImg} alt="" />
              <p className={style.iconText}>{props.heartText}</p>
            </button>
          </div>
        )} */}

        {props.showBookmark && (<div className={style.bookMarkIcon}>
          <button className={style.saveBtn}>
            <img src={props.bookmark} className={style.bookmark} alt="" />
          </button>
        </div>)}
        
      </div>
      <div class={style["card-content"]}>
        <p className={style.trip}>{props.trip}</p>
        <p className={style.description}>{props.description}</p>
        <div className={style.extras}>
          <p className={style.tripDays}>{props.days}</p>
          <p className={style.from}>
            {props.from}
            <span className={style.tripPrice}>{props.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
