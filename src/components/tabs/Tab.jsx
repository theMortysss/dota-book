import React, { useState } from 'react';

import "./tab.css"

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Основное',
            title: 'Title 1',
            content: 'Описание героя'
        },
        {
            id: 2,
            tabTitle: 'Силён против',
            title: 'Title 2',
            content: 'Таблица героев, против которых силён'
        },
        {
            id: 3,
            tabTitle: 'Слаб против',
            title: 'Title 3',
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
                            {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.content}</p></div>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Tabs;