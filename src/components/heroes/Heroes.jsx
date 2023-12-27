import Card from '../card/Card'
import './heroes.css'

import { heroesList } from '../../helpers/images'

const btnClick = (event) => {
    event.preventDefault();
    window.location.assign('/create')
}

const Heroes = (props) => {
    const heroes = props.heroList
    if (!heroes || heroes.length === 0) return <p></p>;
    return (
        <section className='heroes'>
            <div className='container'>
                <div className='heroes-header'>
                    <div className='heroes-title'>
                        <h2>Герои</h2>
                    </div>
                </div>
                <ul className='heroes-cards'>
                    {
                        heroes.map((hero) => {
                            // return <Card key={hero.ID} heroName={hero.Name} role={hero.Role} img={heroesList[hero.ID - 1].img} index={hero.ID} />
                            return <Card key={hero.ID} hero={hero} index={hero.ID} />
                        })
                    }
                </ul>
                <div className='create'>
                    <button className='add-btn' onClick={btnClick}>Добавить героя</button>
                </div>
            </div>
        </section>
    );
}

export default Heroes;