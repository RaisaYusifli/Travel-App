import { Destination } from "../../../../components/Destination";
import destinations from "./database";
import style from "./index.module.css";
export function Destinations() {
  return (
    <div className={style.container}>
      {destinations.map((destination) => {
        return (
          <div >
            <Destination
              key={destination.id}
              continent={destination.continent}
              countries={destination.countries}
            />
          </div>
        );
      })}
    </div>
  );
}
