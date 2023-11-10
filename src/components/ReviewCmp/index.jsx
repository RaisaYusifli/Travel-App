import style from './index.module.css';
import frameImg from '../../assets/reviewFrame.png';

export function ReviewCmp(props) {
  return (
    <div className={style.containerCard}>
      <img src={props.image} className={style.image} alt="" />
      <div className={style.reviewText}>
        <p>
          “Tiago put together an epic itinerary for me and my friends. He showed
          us some hidden hiking trails and amazing local food spots. He even met
          us for a coffee to make sure we had everything we needed.
        </p>
        <p>Thanks Tiago!”</p>
        <p>Charlie, rappelling down a 370-foot waterfall</p>
        <p>The Azores</p>
      </div>
      <div className={style.localExpertInfo}>
        <button>
          <img src={frameImg} alt="" />
        </button>
        <div className={style.frameImg}>
          <p>Trip crafted by</p>
          <p>
            <b>Tiago</b> | Local expert in Portugal
          </p>
        </div>
      </div>
    </div>
  );
}
