import styles from './Сard.module.css'
import favorite from '../../img/icons/favorite.svg'

const Card = (props) => {
    const hero = props.hero;
    return (
        <li>
            <div className={styles.card}>
                <a href={`/hero/${props.index - 1}`} className={styles.card_link}></a>
                {/* <img className={styles.card_favorite} src={favorite} /> */}
                <img className={styles.card_img} src={`data:image/png;base64,${hero.Image}`}/>
                <div className={styles.card_text}>
                    <div className={styles.card_name}>
                        <h3>{hero.Name}</h3>
                    </div>
                </div>
            </div>
        </li>

    )
}

export default Card;