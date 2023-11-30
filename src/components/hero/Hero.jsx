import { heroesList } from '../../helpers/heroesList';
import './hero.css'
import Tabs from '.././tabs/Tab';

const Hero = (props) => {
    const heroProp = props.hero
    
    if (!heroProp || heroProp.length === 0) return <p></p>;

    
    const hero = heroesList[heroProp[0][0].ID - 1];

    console.log("test", heroProp[0][0])

    const heroMain = heroProp[0][0];
    const heroDiff = heroProp[1];
    const heroAbil = heroProp[2];
    const heroAttackType = heroProp[3];
    const heroParams = heroProp[4][0];
    const heroSpec = heroProp[5][0];
    const heroTalants = heroProp[6];
    const heroType = heroProp[7];
    const heroAttr = heroProp[8][0];

    // console.log("heroMain", heroMain)
    // console.log("heroDiff", heroDiff)
    // console.log("heroAbil", heroAbil)
    // console.log("heroAttackType", heroAttackType)
    // console.log("heroParams", heroParams)
    // console.log("heroSpec", heroSpec)
    // console.log("heroTalants", heroTalants)
    // console.log("heroType", heroType)
    // console.log("heroAttr", heroAttr)


    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-title">
                    <h1>{heroMain.Name}</h1>
                </div>
                <div className='hero-desc-info-row'>
                    <div className='hero-img'>
                        <img src={hero.img} />
                    </div>

                    <div className='hero-desc-info'>
                        <h2>{heroMain.Role}</h2>
                        <h2>{heroType.Titile}</h2>
                        <div className='hero-attack-type'>
                            <h2>ТИП АТАКИ:</h2>
                            <h2>{heroAttackType.Title}</h2>
                        </div>
                        <div className='hero-difficult'>
                            <h2>СЛОЖНОСТЬ:</h2>
                            <h2>{heroDiff.Title}</h2>
                        </div>
                    </div>

                    <div className='hero-description'>
                        <h2>{heroMain.Description}</h2>
                    </div>
                </div>
            </div>

            <div className='hero-main-info-container'>

                <div className='hero-main-info'>
                    <div className='hero-attr'>
                        <h2>{heroAttr.Strength}</h2>
                        <h3>{"+" + heroAttr.StrengthInc}</h3>
                        <h2>{heroAttr.Agility}</h2>
                        <h3>{"+" + heroAttr.AgilityInc}</h3>
                        <h2>{heroAttr.Intelligence}</h2>
                        <h3>{"+" + heroAttr.IntelligenceInc}</h3>
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
                            <h3>{heroParams.AttackValue}</h3>
                            <h3>{heroParams.AttackDelay}</h3>
                            <h3>{heroParams.AttackRange}</h3>
                            <h3>{heroParams.AttackSpeed}</h3>
                            <h2>Атака</h2>
                        </div>

                        <div className='hero-ind-prot'>
                            <h3>{heroParams.PhysProtection}</h3>
                            <h3>{heroParams.MagProtection}</h3>
                            <h2>Защита</h2>
                        </div>

                        <div className='hero-ind-mob'>
                            <h3>{heroParams.Speed}</h3>
                            <h3>{heroParams.RotateSpeed}</h3>
                            <h3>{heroParams.Visibility}</h3>
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
                        <h2>{heroAbil[0].Description}</h2>

                        <img src={hero.abilitysImg[1]} />
                        <h2>{heroAbil[1].Description}</h2>

                        <img src={hero.abilitysImg[2]} />
                        <h2>{heroAbil[2].Description}</h2>

                        <img src={hero.abilitysImg[3]} />
                        <h2>{heroAbil[2].Description}</h2>
                    </div>
                    <div className='hero-talants'>
                        <h2>{heroTalants[6].Talant}</h2>
                        <h1>25</h1>
                        <h2>{heroTalants[7].Talant}</h2>

                        <h2>{heroTalants[4].Talant}</h2>
                        <h1>20</h1>
                        <h2>{heroTalants[5].Talant}</h2>

                        <h2>{heroTalants[2].Talant}</h2>
                        <h1>15</h1>
                        <h2>{heroTalants[3].Talant}</h2>

                        <h2>{heroTalants[0].Talant}</h2>
                        <h1>10</h1>
                        <h2>{heroTalants[1].Talant}</h2>
                    </div>
                </div>
            </div>

            <Tabs />

        </section>
    )

}

export default Hero