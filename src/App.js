import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";
import Tags from "./components/tags/Tags";

function App() {

  const [pokemons, setPokemons] = useState(null)
  const [filterType, setFilterType] = useState(null)

  async function defaultPokemons() {
    await axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then((res) => setPokemons(res.data.pokemon))
  }

  useEffect(() => {
    defaultPokemons()
  }, [])

  function searchByType(text) {
    if (pokemons) {

    }
  }

  return (
    <div className="App">
      <Search />
      <Tags />
      <Cards pokemons={pokemons} />
    </div>
  );
}

export default App;
