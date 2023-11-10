import style from "./index.module.css";
import { CardMap } from "../../../../components/CardMap";
import mapAttractions1 from "./database/mapCard";
export function NewAttractions() {
  return (
    <div className={style.container}>
      <p>Must-see attractions for your itinerary</p>
      <div className={style.trend}>
        {mapAttractions1.map((card) => {
          return (
            <CardMap
              key={card.id}
              image={card.image}
              trip={card.trip}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
}
