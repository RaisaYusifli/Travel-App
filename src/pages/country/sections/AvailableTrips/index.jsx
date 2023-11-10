import topDestinations from "./database";
import style from "./index.module.css";
import { Card } from "../../../../components/Card";
export function AvailableTrips() {
  return (
    <div className={style.container}>
      <p>Top Destinations</p>
      <div className={style.trend}>
        {topDestinations.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.image}
              trip={card.trip}
              description={card.description}
              days={card.days}
              from={card.from}
              price={card.price}
              bookmark={card.bookmark}
              showBookmark={card.showBookmark}
            />
          );
        })}
      </div>
    </div>
  );
}
