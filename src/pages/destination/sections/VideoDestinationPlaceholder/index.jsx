import style from "./index.module.css";

export function VideoDestinationPlaceholder() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Explore places on Tourista</p>
        <p>Destinations</p>
      </div>
    </div>
  );
}
