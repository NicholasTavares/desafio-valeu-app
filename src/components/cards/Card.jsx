import React from 'react'

const Card = ({ name, img_url, type, height, weight }) => {

    return (
        <div className='container-cards__card'>
            <div className='container-cards__card__img'>
                <img src={img_url} alt={name} />
            </div>
            <div className='container-cards__card__data'>
                <p>{name}</p>
                <p>Type: {type && type.map((res) => `${res}, `)}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
            </div>
        </div>
    )
}

export default Card