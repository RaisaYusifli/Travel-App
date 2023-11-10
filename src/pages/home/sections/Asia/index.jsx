import style from "./index.module.css";
import asia from './database/asia.js';
import { Card } from "../../../../components/Card/index.jsx";

export function Asia() {
  return (
    <div className={style.container}>
      <p>Asia</p>
      <div className={style.trend}>
        {asia.map((card) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}
