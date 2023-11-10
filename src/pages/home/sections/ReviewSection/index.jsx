import style from "./index.module.css";
import image from '../../../../assets/reviewImg.png'
import { ReviewCmp } from "../../../../components/ReviewCmp";
export function ReviewSection() {
  return (
    <div className={style.container}>
      <ReviewCmp image={image}/>
    </div>
  );
}
