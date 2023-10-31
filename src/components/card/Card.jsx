import styles from './Сard.module.css'
import favorite from '../../img/icons/favorite.svg'

const Card = (props) => {
    return (
        <li>
            <div className={styles.card}>
                <a href={`/hero/${props.index}`} className={styles.card_link}></a>
                <img className={styles.card_favorite} src={favorite} />
                <img className={styles.card_img} src={props.img} />
                <div className={styles.card_text}>
                    <div className={styles.card_name}>
                        <h3>{props.heroName}</h3>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default Card;