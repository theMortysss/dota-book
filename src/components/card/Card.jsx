import styles from './Сard.module.css'
import favorite from '../../img/icons/favorite.svg'

const Card = (props) => {
    return (
        <li>
            <div className={styles.card}>
                <a href={`/hero/${props.Index}`} className={styles.card_link}></a>
                <img className={styles.card_favorite} src={favorite} />
                <img className={styles.card_img} src={props.Img} />
                <div className={styles.card_text}>
                    <div className={styles.card_name}>
                        <h3>{props.Name}</h3>
                    </div>
                    <div className={styles.card_role}>
                        <h3>{props.Role}</h3>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default Card;