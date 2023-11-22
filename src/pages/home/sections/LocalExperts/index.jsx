import style from "./index.module.css";
import local1 from "../../../../../public/assets/local1Home.png";
import local2 from "../../../../../public/assets/local2Home.png";
import vector1 from "../../../../../public/assets/Vector.png";
import vector2 from "../../../../../public/assets/vector2.png";
import res1 from "../../../../../public/assets/CallcenterRes.png";
import res2 from "../../../../../public/assets/CallcenterRes2.png";

export function LocalExperts() {
  return (
    <div className={style.container}>
      <p>Our Local Experts</p>

      <div className={style.localImgs}>
        <div className={style.img1}>
          <img src={local1} alt="" />
          <div className={style.vector1}>
            <img src={vector1} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>
        </div>

        <div className={style.img2}>
          <img src={local2} alt="" />
          <div className={style.vector2}>
            <img src={vector2} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>
        </div>
      </div>

      <div className={style.responsiveLocalImgs}>
        {/* <div className={style.res1}> */}
          <img src={res1} alt="" />
          <div className={style.vector1}>
            <img src={vector1} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>

          <img src={res2} alt="" />
          <div className={style.vector2}>
            <img src={vector2} alt="" />
            <p>Why trust Gary in Florida to plan your trip to South Africa?</p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
