import style from './index.module.css';

export function Categories(){
    return(
        <div className={style.container}>
            <div className={style.category}>
                <p>All articles</p>
            </div>
            <div className={style.category}>
                <p>Food & Drink</p>
            </div>
            <div className={style.category}>
                <p>Inspiration</p>
            </div>
            <div className={style.category}>
                <p>Local Guides</p>
            </div>
            <div className={style.category}>
                <p>See & Do</p>
            </div>
            <div className={style.category}>
                <p>Travel Tips</p>
            </div>
            <div className={style.category}>
                <p>Where to stay</p>
            </div>
        </div>
    )
}