import { FaqList } from "../../../../components/FaqList";
import listsFaq from "./database";
import style from "./index.module.css";
export function Questions() {
  return (
    <div className={style.container}>
      <div className={style.questions}>
        <div className={style.lists}>
          {listsFaq.map((list)=>{
            return(
                <FaqList
                key={list.id}
                number={list.number}
                header={list.header}
                text={list.text}
                />
            )
          })}
        </div>
      </div>
    </div>
  );
}
