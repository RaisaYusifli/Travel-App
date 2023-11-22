// import { useState } from "react";
import { useState } from "react";
// import { DestinationCountry } from "../DestinationCountry";
import style from "./index.module.css";
import { Link } from "react-router-dom";

export function Destination(props) {
  const [isTextVisible, setTextVisibility] = useState(false);

  const toggleText = () => {
    setTextVisibility(!isTextVisible);
  };

  return (
    <div className={style.destination}>
      <div>
        <p onClick={() => toggleText()} className={style.continent}>
          {props.continent}
        </p>
      </div>
      <ul>
        {props.countries.map((country, index) => {
          return (
            <li
              key={index}
              className={`${isTextVisible ? style.open : style.close}`}
            >
              <Link to="italy">{country}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
