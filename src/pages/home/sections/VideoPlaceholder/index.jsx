import searchIcon from "../../../../assets/search_icon.png";
import style from "./index.module.css";
// import video from "../../assets/Homepage.gif";
export function VideoPlaceholder() {
  return (
    <div className={style.container}>
      {/* <img src={video} alt="" /> */}
      <div className={style.text}>
        <div className={style.texts}>
          <div id={style.headingText} className={style.headingTexts1}>
            <p>We create trips you love</p>
          </div>
          <div id={style.headingText} className={style.headingTexts2}>
            <p>Trips you couldn't plan, even if you wanted to.</p>
          </div>
        </div>
        <div class={style.input}>
          <input type="text" placeholder="Where do you want to go?" />
          <button className={style.icon}>
            <img src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
