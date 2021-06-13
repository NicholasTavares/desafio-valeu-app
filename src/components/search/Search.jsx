import React, { useRef } from "react"
import Logo from '../../assets/logo.png'
import SearchSymbol from '../../assets/search.png'
import Pokeball from '../../assets/pokeball.png'

import { usePokemon } from '../../context/pokemon'

const Search = () => {

    const { setFilterText } = usePokemon()
    const pokemonName = useRef(null)

    return (
        <header className="search-container">
            <div className="search-container__content">
                <div className="search-container__logo">
                    <img src={Logo} alt="Logo Pokemon" />
                </div>
                <p className='search-container__phrase'>
                    Uma Pokedex completa criada em React JS
                </p>
                {/* TODO: Ver as bordas*/}
                <div className='search-container__search'>
                    <input type="text" placeholder='Search a Pokemon' ref={pokemonName} />
                    {/* TODO: colocar dentro de uma div*/}
                    <img src={SearchSymbol} alt="Search symbol" onClick={() => setFilterText(pokemonName.current.value)} />
                </div>
            </div>
            <div className='search-container__title-filter'>
                <img src={Pokeball} alt="Pokeball" /><p>Filter by type</p>
            </div>
        </header>
    );
};

export default Search;