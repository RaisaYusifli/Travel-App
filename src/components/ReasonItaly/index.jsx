import style from "./index.module.css";

export function ReasonItaly(props) {
  return (
    <div className={style.reason}>
      <button>
        <img src={props.frame} alt="" />
      </button>
      <div className={style.texts}>
        <p>{props.frameHeader}</p>
        <p>{props.frameText}</p>
      </div>
    </div>
  );
}
