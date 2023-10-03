import styles from './Сard.module.css'
import Dota from '../../img/Dota.jpg'
import favorite from '../../img/icons/favorite.svg'

const Card = () => {
    return (     
        <div className={styles.card}>
            <a href='hero' className={styles.card_link}></a>
            <img className={styles.card_favorite} src={favorite}/>
            <img className={styles.card_img} src={Dota}/>
            <div className={styles.card_text}>
                <div className={styles.card_name}>
                    <h3>Name</h3>
                </div> 
                <div className={styles.card_role}>
                    <h3>Role</h3>
                </div> 
            </div>
        </div>   
    )
}

export default Card;