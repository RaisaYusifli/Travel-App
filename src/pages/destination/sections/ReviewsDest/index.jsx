import style from "./index.module.css";
import { ReviewCmp } from "../../../../components/ReviewCmp";
import image from '../../../../assets/topDestReviewImg.png'
export function ReviewsDest() {
  return (
    <div className={style.container}>
      <ReviewCmp image={image}/>
    </div>
  );
}
