import style from "./index.module.css";
import { ReviewCmp } from "../../../../components/ReviewCmp";
export function ReviewsDest() {
  return (
    <div className={style.container}>
      <ReviewCmp />
    </div>
  );
}
