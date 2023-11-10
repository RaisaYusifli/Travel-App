import style from "./index.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function FaqList({ id, number, header, text }) {
  const [isTextVisible, setTextVisibility] = useState(false);
  const [accordion, setActiveAccordion] = useState(0);

  const toggleText = (id) => {
    if (accordion === id) {
      setActiveAccordion(-1);
      setTextVisibility(!isTextVisible);

      return;
    }
    setTextVisibility(!isTextVisible);
    setActiveAccordion(id);
  };

  return (
    <div className={style.list}>
      <div className={style.number}>
        <p>{number}</p>
      </div>
      <div className={style.content}>
        <div className={style.header} onClick={() => toggleText(id)}>
          <div className={style.title}>
            <p>{header}</p>
          </div>
          <div className={style.sign}>
            <button
              className={
                accordion === id ? style.btn_active : style.btn_inactive
              }
            >
              <FontAwesomeIcon
                className={
                  accordion === id ? style.faPlus_active : style.faPlus_inactive
                }
                icon={faPlus}
              />
            </button>
          </div>
        </div>
        <div className={style.text}>
          <p>{isTextVisible && <p>{text}</p>}</p>
        </div>
      </div>
    </div>
  );
}
