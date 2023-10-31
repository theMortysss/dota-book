import dota from '../img/Dota.jpg'
import './hero.css'

import { useParams } from 'react-router-dom'
import { heroes } from './../helpers/heroesList'
import Tabs from '../components/tabs/Tab';

function Hero() {
    const { id } = useParams();
    const hero = heroes[id];

    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-title">
                    <h1>{hero.heroName}</h1>
                </div>
                <div className='hero-desc-info-row'>
                    <div className='hero-img'>
                        <img src={hero.img} />
                    </div>

                    <div className='hero-desc-info'>
                        <h2>{hero.roleDesc}</h2>
                        <h2>{hero.heroType}</h2>
                        <div className='hero-attack-type'>
                            <h2>ТИП АТАКИ:</h2>
                            <h2>{hero.attackType}</h2>
                        </div>
                        <div className='hero-difficult'>
                            <h2>СЛОЖНОСТЬ:</h2>
                            <h2>{hero.difficult}</h2>
                        </div>
                    </div>

                    <div className='hero-description'>
                        <h2>{hero.description}</h2>
                    </div>
                </div>
            </div>

            <div className='hero-main-info-container'>

                <div className='hero-main-info'>
                    <div className='hero-attr'>
                        <h2>{hero.attributes[0]}</h2>
                        <h3>{hero.attributesIncrease[0]}</h3>
                        <h2>{hero.attributes[1]}</h2>
                        <h3>{hero.attributesIncrease[1]}</h3>
                        <h2>{hero.attributes[2]}</h2>
                        <h3>{hero.attributesIncrease[2]}</h3>
                    </div>

                    <div className='hero-roles'>
                        <h3>Основа</h3>

                        <h3>Поддержка</h3>

                        <h3>Быстрый урон</h3>

                        <h3>Контроль</h3>

                        <h3>Лес</h3>

                        <h3>Стойкость</h3>

                        <h3>Побег</h3>

                        <h3>Осада</h3>

                        <h3>Инициация</h3>

                    </div>

                    <div className='hero-ind'>
                        <div className='hero-ind-atk'>
                            <h3>{hero.attack[0]}</h3>
                            <h3>{hero.attack[1]}</h3>
                            <h3>{hero.attack[2]}</h3>
                            <h3>{hero.attack[3]}</h3>
                            <h2>Атака</h2>
                        </div>

                        <div className='hero-ind-prot'>
                            <h3>{hero.protection[0]}</h3>
                            <h3>{hero.protection[1]}</h3>
                            <h2>Защита</h2>
                        </div>

                        <div className='hero-ind-mob'>
                            <h3>{hero.mobility[0]}</h3>
                            <h3>{hero.mobility[1]}</h3>
                            <h3>{hero.mobility[2]}</h3>
                            <h2>Мобильность</h2>
                        </div>
                    </div>
                </div>

                <div className='hero-main-info-titles'>
                    <h1>Атрибуты</h1>
                    <h1>Роли</h1>
                    <h1>Показатели</h1>
                </div>
            </div>

            <div className="container">
                <div className='hero-skills-row'>
                    <div className='hero-abilitys'>
                        <img src={hero.abilitysImg[0]} />
                        <h2>{hero.abilityDescription[0]}</h2>

                        <img src={hero.abilitysImg[1]} />
                        <h2>{hero.abilityDescription[1]}</h2>

                        <img src={hero.abilitysImg[2]} />
                        <h2>{hero.abilityDescription[2]}</h2>

                        <img src={hero.abilitysImg[3]} />
                        <h2>{hero.abilityDescription[3]}</h2>
                    </div>
                    <div className='hero-talants'>
                        <h2>{hero.talants[6]}</h2>
                        <h1>25</h1>
                        <h2>{hero.talants[7]}</h2>

                        <h2>{hero.talants[4]}</h2>
                        <h1>20</h1>
                        <h2>{hero.talants[5]}</h2>

                        <h2>{hero.talants[2]}</h2>
                        <h1>15</h1>
                        <h2>{hero.talants[3]}</h2>

                        <h2>{hero.talants[0]}</h2>
                        <h1>10</h1>
                        <h2>{hero.talants[1]}</h2>
                    </div>
                </div>
            </div>

            <Tabs />

        </section>
    )
}

export default Hero