import style from "./index.module.css";
import { ReviewCmp } from "../../../../components/ReviewCmp";
import image from '../../../../assets/ItalyReviewMap.png'
export function ReviewsItaly() {
  return (
    <div className={style.container}>
      <ReviewCmp image={image}/>
    </div>
  );
}
