import style from "./index.module.css";
import reasonsItaly from "./database";
import { ReasonItaly } from "../../../../components/ReasonItaly";

export function WhyUsItaly() {
  return (
    <div className={style.container}>
      <p>Expert guidance to help you plan your trip</p>
      <div className={style.reasons}>
        {reasonsItaly.map((reason) => {
          return (
            <ReasonItaly
              key={reason.id}
              frame={reason.frame}
              frameText={reason.frameText}
              frameHeader={reason.header}
            />
          );
        })}
      </div>
    </div>
  );
}
