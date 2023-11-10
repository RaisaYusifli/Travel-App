import style from "./index.module.css";
import map from "../../../../assets/Map Italy.png";
import leftArrow from "../../../../assets/chevron-left.png";
import rightArrow from "../../../../assets/chevron-right.png";
import { Card } from "../../../../components/Card";
import mapAttractions from "../database/mapCard";

export function MapItaly() {
  return (
    <div className={style.container}>
      <img src={map} alt="" />
      <div className={style.header}>
        <div className={style.headerBody}>
          <div className={style.headerText}>
            <p>Tops things to do</p>
          </div>
          <div className={style.headerButtons}>
            <button>
              <img src={leftArrow} alt="" />
            </button>
            <button>
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.trend}>
        <Card
          key={mapAttractions[0].id}
          image={mapAttractions[0].image}
          days={mapAttractions[0].description}
        />
      </div>
    </div>
  );
}
