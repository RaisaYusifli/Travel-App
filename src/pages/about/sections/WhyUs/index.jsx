import style from './index.module.css';
import reasons from './database';
import { Reason } from '../../../../components/Reason';
export function WhyUs(){
    return(
        <div className={style.container}>
            <p>Why us?</p>
            <div className={style.reasons}>
                {reasons.map((reason)=>{
                    return(
                        <Reason 
                        key={reason.id}
                        frame={reason.frame}
                        frameText={reason.frameText}
                        />
                    )
                })}
            </div>
            
        </div>
    )
}