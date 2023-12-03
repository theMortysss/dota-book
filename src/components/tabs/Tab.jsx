import React, { useState } from 'react';

import "./tab.css"

const Tabs = (props) => {

    const hero = props.hero;
    const heroAbil = props.heroAbil;
    const heroTalants = props.heroTalants;

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Основное',
            content:
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
        },
        {
            id: 2,
            tabTitle: 'Силён против',
            content:
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
        },
        {
            id: 3,
            tabTitle: 'Слаб против',
            content: 'Таблица героев, против которых слаб'
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <section>
            <header className='hero-tab'>
                <div className="container">
                    <ul className='hero-tab-list'>
                        {tabs.map((tab, i) =>
                            <button className='hero-tab-title  hero-tab-title--active' key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                        )}
                    </ul>
                </div>
            </header>
            <div className='container'>
                <div className='hero-tab-info'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tabs;