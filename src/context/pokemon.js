import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemons, setPokemons] = useState(null)

  async function searchPokemons() {
    axios.get(BASE_URL).then(res => setPokemons(res.data.pokemon))
  }

  //TODO: Ver se dar pra usar useMemo
  useEffect(() => searchPokemons(), [])

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
