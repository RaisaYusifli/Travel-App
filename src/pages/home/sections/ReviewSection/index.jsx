import style from "./index.module.css";
import { ReviewCmp } from "../../../../components/ReviewCmp";
export function ReviewSection() {
  return (
    <div className={style.container}>
      <ReviewCmp />
    </div>
  );
}
