import React from 'react'
import Card from './Card'
import Loading from '../loading/Loading'

import { usePokemon } from '../../context/pokemon'

const Cards = () => {

    const { pokemons, pokemonsAPI } = usePokemon()
    let listPokemons = null

    if (pokemons.length > 0) {
        listPokemons = pokemons
    } else {
        listPokemons = pokemonsAPI
    }

    return (
        <main className='container-cards'>
            {listPokemons ? listPokemons.map((res, i) => (
                <Card name={res.name} img_url={res.img} type={res.type}
                    height={res.height} weight={res.weight} candy={res.candy}
                    candy_count={res.candy_count} weaknesses={res.weaknesses} avg_spawns={res.spawn_chance} key={i} />
            )) : <Loading />}
        </main>
    )
}

export default Cards