import style from "./index.module.css";

export function Currency({ text }) {
  return (
    // <div className={style.divMezenne}>
      <p className={style.mezenne}>{text}</p>
    // </div>
  );
}
