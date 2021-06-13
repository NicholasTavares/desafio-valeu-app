import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from './base_url'

export const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
  const [filterType, setFilterType] = useState([])
  const [pokemonsAPI, setPokemonsAPI] = useState([])
  const [pokemons, setPokemons] = useState(null)
  const [filterText, setFilterText] = useState(null)

  const limit = 0
  let listTemporalyType = []
  let temporalyName = []

  async function searchPokemons() {
    await axios.get(BASE_URL).then(res => {
      setPokemonsAPI(res.data.pokemon)
      setPokemons(res.data.pokemon)
    })
  }

  function searchByType() {
    if (filterType.length > limit) {
      listTemporalyType = []
      // eslint-disable-next-line
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
    for (let i = 0; i < pokemonsAPI.length; i++) {
      if (pokemonsAPI[i].name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
        temporalyName.push(pokemonsAPI[i])
      }
    }
    if (temporalyName) {
      setPokemons(temporalyName)
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
