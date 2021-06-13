import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemonsAPI, setPokemonsAPI] = useState([])
  const [pokemons, setPokemons] = useState([])
  let listTemporaly = []

  async function searchPokemons() {
    await axios.get(BASE_URL).then(res => setPokemonsAPI(res.data.pokemon))
  }

  function searchByType() {
    if (filterType.length > 0) {
      listTemporaly = []
      pokemonsAPI.filter((pokemon) => {
        for (let i = 0; i < filterType.length; i++) {
          for (let t = 0; t < pokemon.type.length; t++) {
            if (pokemon.type[t] === filterType[i]) {
              listTemporaly.push(pokemon)
            }
          }
        }
      })
      setPokemons(listTemporaly)
    } else {
      setPokemons(pokemonsAPI)
    }
  }

  useEffect(() => searchPokemons(), [])
  useEffect(() => searchByType(), [filterType])

  return (
    <PokemonContext.Provider value={{ filterType, setFilterType, pokemons, pokemonsAPI }}>
      {children}
    </PokemonContext.Provider>
  )

}

export function usePokemon() {
  const context = useContext(PokemonContext)
  const { filterType, setFilterType, pokemons, pokemonsAPI } = context

  return { filterType, setFilterType, pokemons, pokemonsAPI }
}
