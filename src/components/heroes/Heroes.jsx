import Card from '../card/Card'
import './heroes.css'

import { heroes } from './../../helpers/heroesList'

const Heroes = () => {
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
                        heroes.map((hero, index) => {
                            return <Card key={index} Name={hero.Name} Role={hero.Role} Img={hero.Img} Index={index} />
                        }
                        )}
                </ul>
                <ul className='heroes-cards'>
                    {
                        heroes.map((hero, index) => {
                            return <Card key={index} Name={hero.Name} Role={hero.Role} Img={hero.Img} />
                        }
                        )}
                </ul>
                <ul className='heroes-cards'>
                    {
                        heroes.map((hero, index) => {
                            return <Card key={index} Name={hero.Name} Role={hero.Role} Img={hero.Img} />
                        }
                        )}
                </ul>
                <ul className='heroes-cards'>
                    {
                        heroes.map((hero, index) => {
                            return <Card key={index} Name={hero.Name} Role={hero.Role} Img={hero.Img} />
                        }
                        )}
                </ul>
            </div>
        </section>
    );
}

export default Heroes;