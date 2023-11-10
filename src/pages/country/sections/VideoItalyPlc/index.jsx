import style from './index.module.css';
import italy from '../../../../assets/ItalyVideoPlc.png';
import calendar from '../../../../assets/fi-rr-calendar.png';
import sun from '../../../../assets/sun.png';
import earth from '../../../../assets/earth.png';
import dollar from '../../../../assets/dollar-sign.png';
import wind from '../../../../assets/Frame.png';

export function VideoItalyPlc(){
    return(
        <div className={style.container}>
            <img src={italy} alt="" />
            <div className={style.texts}>
                <div className={style.text}>
                    <p>Italy</p>
                    <p>Trips you couldn't plan, even if you wanted to.</p>
                </div>
                <button>Create a trip</button>
            </div>
            <div className={style.statistics}>
                <div className={style.statistic}>
                    <img src={calendar} alt="" />
                    <div className={style.frame}>
                        <p>BEST TIME TO VISIT</p>
                        <div className={style.frameInner}>
                            <p>High s/ May-Sept</p>
                        </div>
                    </div>
                </div>
                <div className={style.statistic}>
                    <img src={sun} alt="" />
                    <div className={style.frameSun}>
                        <p>CLIMATE</p>
                        <div className={style.frameInner}>
                            <p>High 32°C</p>
                            <p>Low 0°C</p>
                        </div>
                    </div>
                </div>
                <div className={style.statistic}>
                    <img src={earth} alt="" />
                    <div className={style.frame}>
                        <p>TIMEZONE</p>
                        <div className={style.frameInner}>
                            <p>Central European</p>
                            <p>Time (UTC +1)</p>
                        </div>
                    </div>
                </div>
                <div className={style.statistic}>
                    <img src={dollar} alt="" />
                    <div className={style.frame}>
                        <p>CURRENCY</p>
                        <div className={style.frameInner}>
                            <p>Euro</p>
                            <p>Dollar</p>
                        </div>
                    </div>
                </div>
                <div className={style.statistic}>
                    <img src={wind} alt="" />
                    <div className={style.frame}>
                        <p>LOCAL LANGUAGE</p>
                        <div className={style.frameInner}>
                            <p>Italian</p>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}