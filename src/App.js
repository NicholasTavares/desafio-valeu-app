import React from 'react'

import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";
import Tags from "./components/tags/Tags";

import PokemonProvider from './context/pokemon'

function App() {

  return (
    <div className="App">
      <PokemonProvider>
        <Search />
        <Tags />
        <Cards />
      </PokemonProvider>
    </div>
  );
}

export default App;
