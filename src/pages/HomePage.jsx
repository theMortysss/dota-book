
import { useEffect, useState } from 'react';
import Heroes from '../components/heroes/Heroes';
import WithLoading from '../helpers/Loading';

function HomePage() {

    const HeroListLoading = WithLoading(Heroes);
    const [heroListState, setHeroListState] = useState({
        loading: false,
        heroes: null,
    });

    useEffect(() => {

        async function getHeroes() {
            setHeroListState({ loading: true });
            fetch("http://back.pifpaf8b.beget.tech/getHeroes.php", {
                method: 'POST'
            })
                .then(response => response.json())
                .then(response => {
                    console.log("HomeResponse", response);
                    setHeroListState({ loading: false, heroes: response });
                })
        }
        if(heroListState.heroes == null)
            getHeroes();
    }, []);


    return (
        <div className='home'>
            <HeroListLoading isLoading={heroListState.loading} heroList={heroListState.heroes} />
            {/* <Heroes heroList={props.heroList} /> */}
        </div>
    )
}

export default HomePage