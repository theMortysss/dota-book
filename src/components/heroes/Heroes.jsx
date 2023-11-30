import Card from '../card/Card'
import './heroes.css'

import { heroesList } from '../../helpers/heroesList'

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
                    <div className='heroes-sort'>
                        <h2>Сортировка</h2>
                    </div>
                </div>
                <ul className='heroes-cards'>
                    {
                        heroes.map((hero) => {
                            return <Card key={hero.ID} heroName={hero.Name} role={hero.Role} img={heroesList[hero.ID - 1].img} index={hero.ID} />
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Heroes;