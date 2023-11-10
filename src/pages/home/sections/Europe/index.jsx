import style from "./index.module.css";
import europe from './database/europe.js';
import { Card } from "../../../../components/Card/index.jsx";

export function Europe() {
  return (
    <div className={style.container}>
      <p>Europe</p>
      <div className={style.trend}>
        {europe.map((card) => {
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
