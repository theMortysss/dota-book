import dota from '../img/Dota.jpg'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Hero from '../components/hero/Hero';
import WithLoading from '../helpers/Loading';

function HeroPage() {
    const { id } = useParams();

    const heroData = new FormData();
    heroData.append("HeroID", id + 1);

    const HeroLoading = WithLoading(Hero);
    const [heroState, setHeroState] = useState({
        loading: false,
        hero: null,
    });

    useEffect(() => {
        setHeroState({ loading: true });
        Promise.all([
            fetch("http://dota-book-php/getHeroById.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getDiffByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getAbilityByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getAttackTypeByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getParamsByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getSpecByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getTalantByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getTypeByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json()),
            fetch("http://dota-book-php/getAttributeByHero.php", {
                method: 'POST',
                body: heroData
            })
                .then(response => response.json())
        ])
            .then(allResponses => {
                console.log("HeroResponse", allResponses)
                setHeroState({ loading: false, hero: allResponses });
            })
    }, [setHeroState]);


    return (
        <div className='hero'>
            <HeroLoading isLoading={heroState.loading} hero={heroState.hero} />
            {/* <Hero Id={id} /> */}
        </div>
    )
}

export default HeroPage