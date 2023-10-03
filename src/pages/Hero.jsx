import dota from '../img/Dota.jpg'
import './hero.css'

function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-title">
                    <h2>Герой</h2>
                </div>
                <div className='hero-info-row'>
                    <div className='hero-img'>
                        <img src={dota}/> 
                    </div>  
                    <div className='hero-info'>
                        <h2>Имя</h2>
                        <h2>Позиция</h2>
                        <h2>Популярность</h2>
                        <h2>Винрейт</h2>
                    </div>
                    <div className='hero-talant'>
                        <h2>Таланты</h2>
                    </div>   
                </div>
            </div>
            <header className='hero-tab'>
                <div className='container'>
                    <div className='hero-tab-row'>
                        <h2>Основное</h2>
                        <h2>Силён против</h2>
                        <h2>Слаб против</h2>
                    </div>
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