import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemonsAPI, setPokemonsAPI] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [filterText, setFilterText] = useState(null)

  const limit = 0
  let listTemporalyType = []
  let temporalyName = ''

  async function searchPokemons() {
    await axios.get(BASE_URL).then(res => setPokemonsAPI(res.data.pokemon))
  }

  function searchByType() {
    if (filterType.length > limit) {
      listTemporalyType = []
      pokemonsAPI.filter((pokemon) => {
        for (let i = 0; i < filterType.length; i++) {
          for (let t = 0; t < pokemon.type.length; t++) {
            if (pokemon.type[t] === filterType[i]) {
              listTemporalyType.push(pokemon)
            }
          }
        }
      })
      setPokemons(listTemporalyType)
    } else {
      setPokemons(pokemonsAPI)
    }
  }

  function searchByName() {
    if (filterText) {
      temporalyName = pokemonsAPI.find(p => p.name === filterText)
      if (temporalyName) {
        setPokemons([temporalyName])
      }
    }
  }


  useEffect(() => searchPokemons(), [])
  useEffect(() => searchByType(), [filterType])
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
