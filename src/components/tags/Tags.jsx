import React from 'react'
import Tag from './Tag'

const Tags = ({ filterType, setFilterType }) => {

    const valuesTags = [
        { text: 'Normal', backgroundColor: '#fff', color: '#1F1F1F' },
        { text: 'Fighting', backgroundColor: '#B64D19', color: '#fff' },
        { text: 'Flying', backgroundColor: '#277BA1', color: '#fff' },
        { text: 'Poison', backgroundColor: '#823EC3', color: '#fff' },
        { text: 'Ground', backgroundColor: '#8A8331', color: '#fff' },
        { text: 'Rock', backgroundColor: '#715C3D', color: '#fff' },
        { text: 'Bug', backgroundColor: '#2F9651', color: '#fff' },
        { text: 'Ghost', backgroundColor: '#83417A', color: '#fff' },
        { text: 'Steel', backgroundColor: '#6C6C6C', color: '#fff' },
        { text: 'Fire', backgroundColor: '#A8282B', color: '#fff' },
        { text: 'Water', backgroundColor: '#145EAB', color: '#fff' },
        { text: 'Grass', backgroundColor: '#7D8545', color: '#fff' },
        { text: 'Eletric', backgroundColor: '#BA9A22', color: '#fff' },
        { text: 'Psychic', backgroundColor: '#452A8D', color: '#fff' },
        { text: 'Ice', backgroundColor: '#659DBA', color: '#fff' },
        { text: 'Dragon', backgroundColor: '#D57931', color: '#fff' },
        { text: 'Dark', backgroundColor: '#232424', color: '#fff' },
        { text: 'Fairy', backgroundColor: '#BA65A0', color: '#fff' },
        { text: 'Shadow', backgroundColor: '#414141', color: '#fff' },
        { text: 'Unknown', backgroundColor: '#9A9A9A', color: '#fff' }
    ]

    return (
        <div className='container-tags'>
            {valuesTags.map((value, i) => <Tag text={value.text} background_color={value.backgroundColor}
                color_text={value.color} filterType={filterType} setFilterType={setFilterType} key={i} />)}
        </div>
    )
}

export default Tags