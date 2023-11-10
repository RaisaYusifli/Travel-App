import { Link } from "react-router-dom";
import style from "./index.module.css";

export function DestinationCountry(props) {
  return (
  <Link to='italy'><p className={style.country}>{props.country}</p></Link>
  // <p className={style.country}>{props.country}</p>
  );
}
