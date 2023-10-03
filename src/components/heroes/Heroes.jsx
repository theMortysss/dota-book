import Card from '../card/Card'
import './heroes.css'

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
                <div className='heroes-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='heroes-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Heroes;