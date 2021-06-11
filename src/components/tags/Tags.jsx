import React from 'react'
import Tag from './Tag'

const Tags = () => {

    const valuesTags = [
        { text: 'normal', backgroundColor: '#fff', color: '#1F1F1F' },
        { text: 'fighting', backgroundColor: '#B64D19', color: '#fff' },
        { text: 'flying', backgroundColor: '#277BA1', color: '#fff' },
        { text: 'poison', backgroundColor: '#823EC3', color: '#fff' },
        { text: 'ground', backgroundColor: '#8A8331', color: '#fff' },
        { text: 'rock', backgroundColor: '#715C3D', color: '#fff' },
        { text: 'bug', backgroundColor: '#2F9651', color: '#fff' },
        { text: 'ghost', backgroundColor: '#83417A', color: '#fff' },
        { text: 'steel', backgroundColor: '#6C6C6C', color: '#fff' },
        { text: 'fire', backgroundColor: '#A8282B', color: '#fff' },
        { text: 'water', backgroundColor: '#145EAB', color: '#fff' },
        { text: 'grass', backgroundColor: '#7D8545', color: '#fff' },
        { text: 'eletric', backgroundColor: '#BA9A22', color: '#fff' },
        { text: 'psychic', backgroundColor: '#452A8D', color: '#fff' },
        { text: 'ice', backgroundColor: '#659DBA', color: '#fff' },
        { text: 'dragon', backgroundColor: '#D57931', color: '#fff' },
        { text: 'dark', backgroundColor: '#232424', color: '#fff' },
        { text: 'fairy', backgroundColor: '#BA65A0', color: '#fff' },
        { text: 'shadow', backgroundColor: '#414141', color: '#fff' },
        { text: 'unknown', backgroundColor: '#9A9A9A', color: '#fff' }
    ]

    return (
        <div className='container-tags'>
            {valuesTags.map((value, i) => <Tag text={value.text} background_color={value.backgroundColor}
                color_text={value.color} key={i} />)}
        </div>
    )
}

export default Tags