import style from './index.module.css';

export function Contacts(){
    return(
        <div className={style.container}>
            <div className={style.contacts}>
                <div className={style.wrapper}>
                    <p>Commercial Contacts</p>
                    <div className={style.wrapper}>
                        <div className={style.ads}>
                            <p>To advertise on Tourista:</p>
                            <p>advertise@tourista.com</p>
                        </div>
                        <div className={style.ads}>
                            <p>To become an affiliate partner:</p>
                            <p>affiliate@tourista.com</p>
                        </div>
                        <div className={style.ads}>
                            <p>To contact the hotels team:</p>
                            <p>hotels@tourista.com</p>
                        </div>
                        <div className={style.ads}>
                            <p>Send your request to republish Tourista content:</p>
                            <p>contentlicensing@tourista.com</p>
                        </div>
                        <div className={style.ads}>
                            <p>To contact the experiences team:</p>
                            <p>experiences@tourista.com</p>
                        </div>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.wrapper}>
                        <p>Content Contact</p>
                        <div className={style.ads}>
                            <p>To report an issue to our content teams please contact: </p>
                            <p>corrections@tourista.com</p>
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <p>Press Contact</p>
                        <div className={style.ads}>
                            <p>If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office:</p>
                            <p>pr@tourista.com</p>
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <p>Partnership Contact</p>
                        <div className={style.ads}>
                            <p>For partnership opportunities:</p>
                            <p>partnerships@tourista.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}