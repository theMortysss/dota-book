import dota from '../img/Dota.jpg'
import './hero.css'

import { useParams } from 'react-router-dom'
import { heroes } from './../helpers/heroesList'

function Hero() {
    const {id} = useParams();
    const hero = heroes[id];
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-title">
                    <h2>Герой</h2>
                </div>
                <div className='hero-info-row'>
                    <div className='hero-img'>
                        <img src={hero.Img} />
                    </div>
                    <div className='hero-info'>
                        <h2>{hero.Name}</h2>
                        <h2>{hero.Role}</h2>
                        <h2>Популярность</h2>
                        <h2>Винрейт</h2>
                    </div>
                    <div className='hero-talant'>
                        <h2>Таланты</h2>
                    </div>
                </div>
            </div>
            <header className='hero-tab'>
                <div className="container">
                    <ul className='hero-tab-list'>
                        <li className='hero-tab__item'>
                            <a className='hero-tab__link hero-tab__link--active' href="#!">
                                Основное
                            </a>
                        </li>
                        <li className='hero-tab__item'>
                            <a className='hero-tab__link hero-tab__link--active' href="#!">
                                Силён против
                            </a>
                        </li>
                        <li className='hero-tab__item'>
                            <a className='hero-tab__link hero-tab__link--active' href="#!">
                                Слаб против
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className='container'>
                <div className='hero-tab-info'>
                    <h2>Выбранное инфо</h2>
                </div>
            </div>
        </section>
    )
}

export default Hero