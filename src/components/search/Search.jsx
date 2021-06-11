import React, { useState } from "react"
import Logo from '../../assets/logo.png'
import SearchSymbol from '../../assets/search.png'

const Search = () => {

    const [search, setSearch] = useState('')

    function searchPokemon(name) {
        console.log(name)
    }

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
                    <input type="text" placeholder='Search a Pokemon' value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <img src={SearchSymbol} alt="Search symbol" onClick={() => searchPokemon(search)} />
                </div>
            </div>
        </header>
    );
};

export default Search;