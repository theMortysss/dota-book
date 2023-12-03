import { heroesList } from '../../helpers/heroesList';
import './hero.css'
import Tabs from '.././tabs/Tab';

import strength from '../../img/icons/hero_strength.png'
import agility from '../../img/icons/hero_agility.png'
import intelligence from '../../img/icons/hero_intelligence.png'
import universal from '../../img/icons/hero_universal.png'

import AttackValue from '../../img/icons/icon_damage.png'
import AttackDelay from '../../img/icons/icon_attack_time.png'
import AttackRange from '../../img/icons/icon_attack_range.png'
import AttackSpeed from '../../img/icons/icon_projectile_speed.png'
import PhysProtection from '../../img/icons/icon_armor.png'
import MagProtection from '../../img/icons/icon_magic_resist.png'
import Speed from '../../img/icons/icon_movement_speed.png'
import RotateSpeed from '../../img/icons/icon_turn_rate.png'
import Visibility from '../../img/icons/icon_vision.png'

const DrawRoleLine = ({ color, width }) => (
    <div className='hero-spec-container'>
        <hr className='hero-spec'
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                width: width,
            }}
        />
        <hr className='hero-spec-stack-on-top'
            style={{
                color: "#7A8A99",
                backgroundColor: "#7A8A99",
                height: 5,
                width: 150
            }}
        />
    </div>
);

const DrawStats = ({ color, stat, statInc }) => (
    <div className='hero-base-stats-container'>
        <hr className='hero-base-stats-stack-on-top'
            style={{
                color: color,
                backgroundColor: color,
                height: 20,
                width: 142,
            }}
        />
        <div className='hero-base-stats'>
            <div className='test'>
                <h2 className='hero-base-stats-v'>
                    {stat}
                </h2>
                <h2 className='hero-base-statsInc-v'>
                    +{statInc}
                </h2>
            </div>
        </div>
    </div>
);

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
                <div className='hero-type'>
                    <img src={hero.typeImg} />
                    <h2>{heroType.Titile}</h2>
                </div>
                <div className="hero-title">
                    <h1>{heroMain.Name}</h1>
                </div>
                <div className='hero-role'>
                    <h2>{heroMain.Role}</h2>
                </div>
                <div className='hero-desc-info-row'>
                    <div className='hero-description'>
                        <h2>{heroMain.Description}</h2>
                    </div>
                    <div className='hero-desc-info'>
                        <div className='hero-attack-type'>
                            <h1>ТИП АТАКИ</h1>
                            <img src={hero.atkImg} />
                            <h2>{heroAttackType.Title}</h2>
                        </div>
                        <div className='hero-difficult'>
                            <h1>СЛОЖНОСТЬ</h1>
                            <h2>{heroDiff.Title}</h2>
                        </div>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src={hero.imgBig} />
                </div>
            </div>

            <div className='hero-main-info-container'>
                <div className='hero-main-info'>
                    <div className='hero-stats'>
                        <img src={hero.img} />
                        <DrawStats color="green" stat={heroAttr.Health} statInc={heroAttr.HealthInc} />
                        <DrawStats color="blue" stat={heroAttr.Mana} statInc={heroAttr.ManaInc} />
                    </div>

                    <div className='hero-attr'>
                        <img src={strength} />
                        <h2>{heroAttr.Strength}</h2>
                        <h3>{"+" + heroAttr.StrengthInc}</h3>

                        <img src={agility} />
                        <h2>{heroAttr.Agility}</h2>
                        <h3>{"+" + heroAttr.AgilityInc}</h3>

                        <img src={intelligence} />
                        <h2>{heroAttr.Intelligence}</h2>
                        <h3>{"+" + heroAttr.IntelligenceInc}</h3>
                    </div>

                    <div className='hero-roles'>
                        <div>
                            <h3 className='hero-role-spec'>Основа</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Core * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Поддержка</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Support * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Быстрый урон</h3>
                            <DrawRoleLine color="azure" width={heroSpec.FastDamage * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Контроль</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Control * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Лес</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Forest * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Стойкость</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Durability * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Побег</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Escape * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Осада</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Siege * 30} />
                        </div>

                        <div>
                            <h3 className='hero-role-spec'>Инициация</h3>
                            <DrawRoleLine color="azure" width={heroSpec.Initiation * 30} />
                        </div>
                    </div>

                    <div className='hero-ind'>
                        <div className='hero-ind-atk'>
                            <h2>Атака</h2>
                            <div className='hero-ind-atk-value'>
                                <img src={AttackValue} />
                                <h3>{heroParams.AttackValue}</h3>
                            </div>
                            <div className='hero-ind-atk-value'>
                                <img src={AttackDelay} />
                                <h3>{heroParams.AttackDelay}</h3>
                            </div>
                            <div className='hero-ind-atk-value'>
                                <img src={AttackRange} />
                                <h3>{heroParams.AttackRange}</h3>
                            </div>
                            <div className='hero-ind-atk-value'>
                                <img src={AttackSpeed} />
                                <h3>{heroParams.AttackSpeed}</h3>
                            </div>
                        </div>

                        <div className='hero-ind-prot'>
                            <h2>Защита</h2>
                            <div className='hero-ind-prot-value'>
                                <img src={PhysProtection} />
                                <h3>{heroParams.PhysProtection}</h3>
                            </div>
                            <div className='hero-ind-prot-value'>
                                <img src={MagProtection} />
                                <h3>{heroParams.MagProtection}</h3>
                            </div>
                        </div>

                        <div className='hero-ind-mob'>
                            <h2>Мобильность</h2>
                            <div className='hero-ind-mob-value'>
                                <img src={Speed} />
                                <h3>{heroParams.Speed}</h3>
                            </div>
                            <div className='hero-ind-mob-value'>
                                <img src={RotateSpeed} />
                                <h3>{heroParams.RotateSpeed}</h3>
                            </div>
                            <div className='hero-ind-mob-value'>
                                <img src={Visibility} />
                                <h3>{heroParams.Visibility}</h3>
                            </div>
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
                <div className='hero-skills-container'>
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
            </div>

            {/* <Tabs hero={hero} heroTalants={heroTalants} heroAbil={heroAbil} /> */}

        </section>
    )

}

export default Hero