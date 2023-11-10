import style from "./index.module.css";

export function Reason(props) {
  return (
    <div className={style.reason}>
      <button>
        <img src={props.frame} alt="" />
      </button>
      <p>{props.frameText}</p>
    </div>
  );
}
