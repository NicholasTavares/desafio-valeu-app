import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemonsAPI, setPokemonsAPI] = useState(null)
  const [pokemons, setPokemons] = useState([])

  async function searchPokemons() {
    await axios.get(BASE_URL).then(res => setPokemonsAPI(res.data.pokemon))
  }

  useEffect(() => searchPokemons(), [])

  useEffect(() => {
    console.log(filterType)
    if (filterType.length <= 0) {
      setPokemons(pokemonsAPI)
    } else {
      pokemonsAPI.filter((pokemon) => {
        for (let i = 0; i < filterType.length; i++) {
          for (let t = 0; t < pokemon.type.length; t++) {
            console.log('Dentro do segundo loop', pokemon.type[t], filterType[i])
            if (pokemon.type[t] === filterType[i]) {
              console.log('Dentro do IF', pokemon.type[t], filterType[i])
              setPokemons(pokemons.push(pokemon))
            }
          }
        }
      })
    }
  }, [filterType])

  return (
    <PokemonContext.Provider value={{ filterType, setFilterType, pokemons }}>
      {children}
    </PokemonContext.Provider>
  )

}

export function usePokemon() {
  const context = useContext(PokemonContext)
  const { filterType, setFilterType, pokemons } = context

  return { filterType, setFilterType, pokemons }
}
