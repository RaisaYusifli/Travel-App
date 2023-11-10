import style from "./index.module.css";
import cardsTrending from "./database/cards.js";
import { Card } from "../../../../components/Card";

export function TrendingNow() {
  return (
    <div className={style.container}>
      <p>Trending now</p>
      <div className={style.trend}>
        {cardsTrending.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.image}
              trip={card.trip}
              description={card.description}
              days={card.days}
              from={card.from}
              price={card.price}
              iconText={card.iconText}
              imageIcon={card.imageIcon}
              showButton={card.showButton}
              bookmark={card.bookmark}
              showBookmark={card.showBookmark}
            />
          );
        })}
      </div>
    </div>
  );
}
