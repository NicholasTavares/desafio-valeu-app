import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemonsAPI, setPokemonsAPI] = useState([])
  const [pokemons, setPokemons] = useState(null)
  const [filterText, setFilterText] = useState(null)

  let listTemporaly = []
  const limit = 0

  async function searchPokemons() {
    await axios.get(BASE_URL).then(res => {
      setPokemonsAPI(res.data.pokemon)
      setPokemons(res.data.pokemon)
    })
  }

  function searchByType() {
    if (filterType.length > limit) {
      listTemporaly = pokemonsAPI.filter(pokemon => (
        pokemon.type.some(type => filterType.includes(type))
      ))
      setPokemons(listTemporaly)
    } else {
      setPokemons(pokemonsAPI)
    }
  }

  function searchByName() {
    if (filterText) {
      listTemporaly = pokemonsAPI.filter(pokemon => (
        pokemon.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
      ))
      setPokemons(listTemporaly)
    } else {
      setPokemons(pokemonsAPI)
    }
  }


  useEffect(() => searchPokemons(), [])
  // eslint-disable-next-line
  useEffect(() => searchByType(), [filterType])
  // eslint-disable-next-line
  useEffect(() => searchByName(), [filterText])

  return (
    <PokemonContext.Provider value={{
      filterType, setFilterType, pokemons,
      pokemonsAPI, filterText, setFilterText
    }}>
      {children}
    </PokemonContext.Provider>
  )

}

export function usePokemon() {
  const context = useContext(PokemonContext)
  const { filterType, setFilterType, pokemons, pokemonsAPI, filterText, setFilterText } = context
  return { filterType, setFilterType, pokemons, pokemonsAPI, filterText, setFilterText }
}
