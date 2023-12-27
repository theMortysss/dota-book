import dota from '../img/Dota.jpg'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Hero from '../components/hero/Hero';
import WithLoading from '../helpers/Loading';

function HeroPage() {
    const { id } = useParams();
    // console.log(parseInt(id) + 1)
    
    const heroData = new FormData();
    heroData.append("HeroID", parseInt(id) + 1);

    const HeroLoading = WithLoading(Hero);
    const [heroState, setHeroState] = useState({
        loading: false,
        hero: null,
    });

    useEffect(() => {

        async function getResponse() {
            setHeroState({ loading: true });
            Promise.all([
                fetch("http://back.pifpaf8b.beget.tech/getHeroById.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getDiffByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getAbilityByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getAttackTypeByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getParamsByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getSpecByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getTalantByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getTypeByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json()),
                fetch("http://back.pifpaf8b.beget.tech/getAttributeByHero.php", {
                    method: 'POST',
                    body: heroData
                })
                    .then(response => response.json())
            ])
                .then(allResponses => {
                    console.log("HeroResponse", allResponses)
                    setHeroState({ loading: false, hero: allResponses });
                })

        }

        getResponse();
        
    }, []);


    return (
        <div className='hero'>
            <HeroLoading isLoading={heroState.loading} hero={heroState.hero} />
            {/* <Hero Id={id} /> */}
        </div>
    )
}

export default HeroPage