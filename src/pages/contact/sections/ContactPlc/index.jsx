import style from "./index.module.css";
import image from "../../../../assets/contact.png";
export function ContactPlc() {
  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <div className={style.text}>
        <p>Contact us</p>
        <p>Your Journey Begins with a Conversation - Reach Out to Us Today!</p>
      </div>
    </div>
  );
}
