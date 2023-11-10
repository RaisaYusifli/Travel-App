import { DestinationCountry } from "../DestinationCountry";
import style from "./index.module.css";

export function Destination(props) {
  return (
      <div className={style.destination}>
      <div>
        <p className={style.continent}>{props.continent}</p>
      </div>
      <div>
        {props.countries.map((country) => {
          return <DestinationCountry key={country.id} country={country} />;
        })}
      </div>
    </div>
  );
}
