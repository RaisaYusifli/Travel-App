import style from "./index.module.css";
import destinationImage from '../../../../assets/ItalyDestination.png';

export function VideoDestinationPlaceholder() {
  return (
    <div className={style.container}>
      <img src={destinationImage} alt="" />
      <div className={style.text}>
        <p>Explore places on Tourista</p>
        <p>Destinations</p>
      </div>
    </div>
  );
}
