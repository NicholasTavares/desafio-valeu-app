import React from 'react'
import Card from './Card'
import Loading from '../loading/Loading'

import { usePokemon } from '../../context/pokemon'

const Cards = () => {
    const { pokemons } = usePokemon()

    return (
        <main className='container-cards-count'>
            {pokemons && <p className='container-cards-count__count'>
                {pokemons && `(${pokemons.length} results)`}
            </p>}
            <main className='container-cards'>
                {pokemons ? pokemons.map((res, i) => (
                    <Card name={res.name} img_url={res.img} type={res.type}
                        height={res.height} weight={res.weight} candy={res.candy}
                        candy_count={res.candy_count} weaknesses={res.weaknesses} avg_spawns={res.spawn_chance} key={i} />
                )) : <Loading />}
            </main>
        </main>
    )
}

export default Cards