import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import Loading from '../loading/Loading'

const Cards = () => {

    const [pokemons, setPokemons] = useState(null)

    async function defaultPokemons() {
        await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then((res) => setPokemons(res.data.pokemon))
    }

    useEffect(() => {
        defaultPokemons()
    }, [])

    console.log(pokemons)

    return (
        <main className='container-cards'>
            {pokemons ? pokemons.map((res, i) => (
                <Card name={res.name} img_url={res.img} type={res.type}
                    height={res.height} weight={res.weight} candy={res.candy}
                    candy_count={res.candy_count} weaknesses={res.weaknesses} avg_spawns={res.spawn_chance} key={i} />
            )) : <Loading />}
        </main>
    )
}

export default Cards